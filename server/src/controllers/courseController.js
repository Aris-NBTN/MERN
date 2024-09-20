import coursesSchema from "~/models/coursesModel.js";
import { addData, updateData, deleteData, getData, getSigData } from "./indexControllder";
import fs from 'fs';
import path from 'path';
import { StatusCodes } from "http-status-codes";

// Image
import sharp from 'sharp';

const nameMess = 'Khóa học';
const uploadDir = path.join(__dirname, '../public/uploads/course');

const sigCourser = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const results = await getSigData(nameMess, { slug: slug }, coursesSchema, { populate: 'category' });
        res.status(results.status).json(results.message);
    } catch (error) {
        next(error);
    }
}

const addCourser = async (req, res, next) => {
    try {
        const result = await addData(nameMess, coursesSchema, req.body, { uniqueField: 'name', customSlugField: 'name' });
        res.status(result.status).json({ message: result.message, newData: result.data });
    } catch (error) {
        next(error);
    }
};

const putCourser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateData(nameMess, coursesSchema, id, req.body, { uniqueField: 'name' });
        res.status(result.status).json({ message: result.message, newData: result.data });
    } catch (error) {
        next(error);
    }
}

const delCourser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteData(nameMess, coursesSchema, id);
        res.status(result.status).json({ message: result.message, _id: id });
    } catch (error) {
        next(error);
    }
}

const allCourserAdmin = async (req, res, next) => {
    try {
        const results = await getData(nameMess, coursesSchema, { sort: { createdAt: -1 } });
        res.status(results.status).json(results.message);
    } catch (error) {
        next(error);
    }
}

const allCourser = async (req, res, next) => {
    try {
        const results = await getData(nameMess, coursesSchema, {
            sort: { createdAt: -1 },
            populate: 'category',
            select: '_id name price status title category slug sale'
        });
        res.status(results.status).json(results.message);
    } catch (error) {
        next(error);
    }
}

const outstandCourse = async (req, res, next) => {
    try {
        const courses = await coursesSchema.aggregate([{ $sample: { size: 6 } }]);
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
};

const allCourserCart = async (req, res, next) => {
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids)) {
            return res.status(400).json({ message: 'Lỗi ID là 1 mảng' });
        }

        const courses = await coursesSchema.find({ _id: { $in: ids } })
            .select('_id name price sale slug');

        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

const searchCourses = async (req, res, next) => {
    try {
        const { 'price-course': priceRange, 'category-course': categoryId } = req.query;
        const query = {};

        // Xử lý theo category nếu có
        if (categoryId) {
            query.category = categoryId;
        }

        // Query khóa học và tính toán giá đã giảm
        let results = await coursesSchema.find(query)
            .sort({ createdAt: -1 })
            .populate('category')
            .select('_id name price status title category slug sale');

        // Nếu có priceRange, lọc theo giá đã giảm
        if (priceRange) {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);

            // Tính giá đã giảm và lọc kết quả
            results = results.filter(course => {
                const finalPrice = course.price - (course.price * course.sale / 100);
                return finalPrice >= minPrice && finalPrice <= maxPrice;
            });
        }

        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}

const addImageCourses = async (req, res, next) => {
    try {
        const { folder } = req.body;
        if (!folder) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Folder name is required' });
        }

        const file = req.file.path;
        const fileName = req.file.filename;
        const fileNameOutput = `compress-${fileName}`;

        if (!file) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Không có File được tải lên' });

        const folderPath = path.join(uploadDir, folder);
        if (!fs.existsSync(folderPath)) {
            await fs.promises.mkdir(folderPath, { recursive: true });
        }

        const outputPath = path.join(folderPath, fileNameOutput);
        const fileSize = req.file.size;
        if (fileSize > 1 * 1024 * 1024) {
            await sharp(fs.readFileSync(file))
                .toFormat('jpeg')
                .jpeg({ quality: 80 })
                .toFile(outputPath);
            await fs.promises.unlink(file);
            res.status(StatusCodes.OK).json(`course/${folder}/${fileNameOutput}`);
        } else {
            const newFilePath = path.join(folderPath, fileName);
            await fs.promises.rename(file, newFilePath);
            res.status(StatusCodes.OK).json(`course/${folder}/${fileName}`);
        }
    } catch (error) {
        next(error);
    }
}

export const courserController = {
    sigCourser,
    addCourser,
    allCourser,
    allCourserAdmin,
    putCourser,
    delCourser,
    allCourserCart,
    outstandCourse,
    addImageCourses
}

export const searchCourserController = {
    searchCourses
}