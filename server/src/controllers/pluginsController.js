import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import categoryCourseModel from "~/models/categoryCourseModel.js";

const addCategory = async (req, res, next) => {
    try {
        const { category } = req.body;
        const existingCategory = await categoryCourseModel.findOne({ category });
        if (existingCategory) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Danh mục đã tồn tại' });
        }
        const newCategory = await new categoryCourseModel({ ...req.body, slug: slugify(category) }).save();
        res.status(StatusCodes.CREATED).json(newCategory);
    } catch (error) {
        next(error);
    }
}

const allCategory = async (req, res, next) => {
    try {
        const allCategory = await categoryCourseModel.find({}).sort({ createdAt: -1 });
        res.status(StatusCodes.CREATED).json(allCategory);
    } catch (error) {
        next(error);
    }
}

const delCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        await categoryCourseModel.findByIdAndDelete(id)
        res.status(StatusCodes.OK).json({ message: 'Đã xóa danh mục!' });
    } catch (error) {
        next(error);
    }
}

const putCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { category } = req.body;
        const existingCategory = await categoryCourseModel.findOne({ category });
        if (existingCategory) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Danh mục đã tồn tại' });
        }
        await categoryCourseModel.findByIdAndUpdate(id, { ...req.body, slug: slugify(category) }, { new: true });
        res.status(StatusCodes.OK).json({ message: 'Cập nhập danh mục thành công!' });
    } catch (error) {
        next(error);
    }
}

export const categoryCourserController = {
    addCategory,
    allCategory,
    putCategory,
    delCategory,
}