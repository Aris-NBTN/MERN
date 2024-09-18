import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Tabs, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import LayoutAdmin from '~/components/layout/admin/Layout'
import Table from '~/components/table/Table';

import { FilterText, FilterDate, FilterSorter, FilterSelect } from '~/components/table/Filter';
import { FindNameById, FormatDay, FormatDayTime, FormatPerCennt, FormatPrice } from '~/components/table/Format';

import { genericDispatch } from '~/redux/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseApi, getCourseApi, delCourseApi, putCourseApi } from '~/redux/slices/Data/coursesSlice';
import { addCategoryCouresApi, getCategoryCouresApi, delCategoryCouresApi, putCategoryCouresApi } from '~/redux/slices/Data/categoryCourseSlice';

import { exportDataExcel } from '~/utils/export';
import { MdSlowMotionVideo } from "react-icons/md";

const Courses = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formAddCourse] = Form.useForm();
    const [formAddCategory] = Form.useForm();
    const [formInfo] = Form.useForm();

    const price = Form.useWatch('price', formAddCourse);
    const sale = Form.useWatch('sale', formAddCourse);

    // Modal
    const [openInFor, setOpenInFor] = useState(false);
    const [openCourse, setOpenCourse] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    // Data
    const { courses, loading: loadingCourses } = useSelector((state) => state.courses);
    const { categoryCourses: categories, loading: loadingCategory } = useSelector((state) => state.categoryCourses);

    const dataCourses = useMemo(() =>
        courses.map((course) => ({
            ...course,
            key: course._id,
        })),
        [courses]
    );

    const dataCategoryCourse = useMemo(() =>
        categories.map((category) => ({
            ...category,
            key: category._id,
        })),
        [categories]
    );

    // Column
    const columnsCourse = [
        {
            title: 'Tên khóa học',
            dataIndex: 'name',
            width: '10%',
            type: 'text',
            editable: true,
            ...FilterText({ dataIndex: 'name' })
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            width: '7%',
            type: 'select',
            editable: true,
            optionSelect: Array.isArray(categories) && categories.length > 0 ? categories?.map(item => ({ label: item.category, value: item._id })) : [],
            render: (category) => (category && categories && Array.isArray(categories) && categories.length > 0) ? FindNameById(category, categories, 'category') : null,
            ...(Array.isArray(categories) && categories.length > 0 ? FilterSelect('category', categories.map(item => ({ text: item.category, value: item._id }))) : {}),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            width: '7%',
            type: 'price',
            editable: true,
            render: (price) => FormatPrice(price),
            ...FilterSorter({ dataIndex: 'price', type: 'number' })
        },
        {
            title: 'Giảm %',
            dataIndex: 'sale',
            width: '6%',
            type: 'percent',
            editable: true,
            render: (sale) => FormatPerCennt(sale),
            ...FilterSorter({ dataIndex: 'sale', type: 'number' })
        },
        {
            title: 'Trang thái',
            dataIndex: 'status',
            width: '7%',
            type: 'select',
            optionSelect: [{ label: 'Đang bán', value: 'Đang bán' }, { label: 'Chưa bán', value: 'Chưa bán' }],
            editable: true,
            ...FilterSelect('status', [{ value: 'Đang bán', text: 'Đang bán' }, { value: 'Chưa bán', text: 'Chưa bán' }])
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            width: '7%',
            ...FilterDate({ dataIndex: 'createdAt' }),
            render: (dayCreate) => FormatDay(dayCreate),
        },
        {
            title: 'Cập nhập',
            dataIndex: 'updatedAt',
            width: '7%',
            render: (updatedAt) => FormatDayTime(updatedAt),
        },
        {
            title: 'Thông tin',
            dataIndex: 'info',
            width: '6%',
            render: (text, record) =>
                <div className='flex justify-center'>
                    <Button type='primary' ghost onClick={() => {
                        formInfo.setFieldsValue(record);
                        setOpenInFor(true);
                    }}
                    >
                        Thông tin
                    </Button>
                </div>
            ,
        },
    ];

    const columnsCategory = [
        {
            title: 'Tên danh mục',
            dataIndex: 'category',
            width: '70%',
            type: 'text',
            editable: true,
            ...FilterText({ dataIndex: 'category' })
        },
    ];

    // Course
    const handleAddCourse = (data) => {
        genericDispatch(dispatch, addCourseApi(data),
            () => {
                setOpenCourse(false);
                formAddCourse.resetFields();
            }
        );
    };

    const handlePutCourse = (data) => {
        genericDispatch(dispatch, putCourseApi(data));
    };

    const handlePutInfo = (data) => {
        data.id = data.key;
        genericDispatch(dispatch, putCourseApi(data),
            () => {
                setOpenInFor(false);
                formInfo.resetFields();
            }
        );
    };

    const handleDelCourse = (data) => {
        genericDispatch(dispatch, delCourseApi(data));
    }

    // Category
    const handleAddCategory = (data) => {
        genericDispatch(dispatch, addCategoryCouresApi(data), () => {
            setOpenCategory(false);
            formAddCategory.resetFields()
        });
    };

    const handlePutCategory = (data) => {
        genericDispatch(dispatch, putCategoryCouresApi(data))
    };

    const handleDelCategory = (data) => {
        genericDispatch(dispatch, delCategoryCouresApi(data));
    }

    useEffect(() => {
        if (loadingCourses === true) {
            dispatch(getCourseApi());
        }
    }, []);

    useEffect(() => {
        if (loadingCategory) {
            dispatch(getCategoryCouresApi());
        }
    }, []);

    useEffect(() => {
        const handleCalculatePriceSale = () => {
            const price = formAddCourse.getFieldValue('price') || 0;
            const sale = formAddCourse.getFieldValue('sale') || 0;
            const priceSale = price - (price * sale) / 100;
            formAddCourse.setFieldsValue({
                priceSale: priceSale >= 0 ? priceSale : 0,
            });
        };

        handleCalculatePriceSale()
    }, [price, sale]);

    return (
        <LayoutAdmin
            header={
                <>
                    <div className='flex items-center'>
                        <h6 className='mb-0'>KHÓA HỌC</h6>
                    </div>
                </>
            }
            button={
                <>
                    <Button type='primary' onClick={() => { setOpenCategory(true) }}> Thêm danh mục</Button>
                    <Button type='primary' onClick={() => setOpenCourse(true)}>Thêm khóa học</Button>
                    {/* <Button onClick={() => exportDataExcel(data, 'Course.xlsx')} type='primary'>Xuất file Excel</Button> */}
                </>
            }
        >
            <Table
                loading={loadingCourses}
                data={dataCourses}
                columns={columnsCourse}
                onSave={handlePutCourse}
                onDelete={handleDelCourse}
                button={(record) => (
                    <div className='flex gap-3'>
                        <MdSlowMotionVideo onClick={() => navigate(`/admin/course/${record.slug}`)} size={20} color='red' />
                    </div>
                )}
            />

            {/* Infor */}
            <Modal
                title=<>Thông tin khóa học: <Typography.Text type='danger'>{formInfo.getFieldValue('name')}</Typography.Text></>
                centered
                open={openInFor}
                onOk={() => formInfo.submit()}
                onCancel={() => { setOpenInFor(false); formInfo.resetFields(); }}
                confirmLoading={loadingCourses}
                width={600}
            >
                <Form
                    form={formInfo}
                    name="customForm"
                    layout="vertical"
                    onFinish={handlePutInfo}
                >
                    <Form.Item
                        className='mb-0 hidden'
                        name="key"
                    >
                        <Input
                            className='mb-2'
                        />
                    </Form.Item>

                    <Form.Item
                        className='mb-2'
                        name="title"
                        label="Tiêu đề"
                        rules={[{ required: true, message: 'Nhập tiêu đề!' }]}
                    >
                        <Input
                            className='mb-2'
                            placeholder='Nhập tiêu đề'
                        />
                    </Form.Item>

                    <Form.Item
                        className='mb-2'
                        name="prerequisite"
                        label="Điều kiện tiên quyết"
                        rules={[{ required: true, message: 'Chọn & nhập điều kiện tiên quyết!' }]}
                    >
                        <Select
                            className='w-full mb-2'
                            placeholder='Chọn & nhập điều kiện tiên quyết'
                            mode="tags"
                            tokenSeparators={[',']}
                        />
                    </Form.Item>

                    <Form.Item
                        className='mb-2'
                        name="customer"
                        label="Đối tượng khách hàng"
                        rules={[{ required: true, message: 'Chọn & nhập đối tượng khách hàng!' }]}
                    >
                        <Select
                            className='w-full mb-2'
                            placeholder='Chọn & nhập đối tượng khách hàng'
                            mode="tags"
                            tokenSeparators={[',']}
                        />
                    </Form.Item>

                    <Form.Item
                        className='mb-2'
                        name="output"
                        label="Tiêu chí đầu ra"
                        rules={[{ required: true, message: 'Chọn & nhập tiêu chí đầu ra!' }]}
                    >
                        <Select
                            className='w-full mb-2'
                            placeholder='Chọn & nhập tiêu chí đầu ra'
                            mode="tags"
                            tokenSeparators={[',']}
                        />
                    </Form.Item>

                    <Form.Item
                        className='mb-2'
                        name="benefit"
                        label="Lợi ích từ khóa học"
                        rules={[{ required: true, message: 'Chọn & nhập lợi ích!' }]}
                    >
                        <Select
                            className='w-full mb-2'
                            placeholder='Chọn & nhập lợi ích'
                            mode="tags"
                            tokenSeparators={[',']}
                        />
                    </Form.Item>

                    <div className="flex mt-2 gap-2">
                        <Form.Item
                            className='mb-2'
                            name="benefit"
                            label="Ảnh"
                            rules={[{ required: true }]}
                        >
                            123
                            {/* <AntdUpload
                                onSave={handleAddFile}
                                onDelete={handleRemoveFile}
                            /> */}
                        </Form.Item>

                        <Form.Item
                            className='mb-2'
                            name="img"
                        >
                            <Input
                                className='mb-2 hidden'
                            />

                        </Form.Item>

                        <Form.Item
                            className='w-full mb-2'
                            name="description"
                            label=" Mô tả"
                            rules={[{ required: true, message: 'Nhập mô tả!' }]}
                        >
                            <Input.TextArea
                                className='mb-2'
                                placeholder="Nhập mô tả"
                                style={{
                                    height: 102,
                                    resize: 'none'
                                }}
                            />
                        </Form.Item>
                    </div>
                </Form>
            </Modal>

            {/* Course */}
            <Modal
                title="Khóa học"
                centered
                open={openCourse}
                onOk={() => formAddCourse.submit()}
                onCancel={() => setOpenCourse(false)}
                confirmLoading={loadingCourses}
                width={600}
            >
                <Form
                    form={formAddCourse}
                    name="customForm"
                    layout="vertical"
                    onFinish={handleAddCourse}
                >
                    <Form.Item
                        className='mb-2'
                        name="name"
                        label="Tên khóa học"
                        rules={[{ required: true, message: 'Nhập tên khóa học!' }]}
                    >
                        <Input placeholder="Nhập tên khóa học" />
                    </Form.Item>

                    <Row gutter={[14, 14]}>
                        <Col span={12}>
                            <Form.Item
                                className='mb-2'
                                name="category"
                                label="Danh mục"
                                rules={[{ required: true, message: 'Chọn danh mục!' }]}
                            >
                                <Select
                                    options={
                                        categories.map(item => ({
                                            label: item.category,
                                            value: item._id
                                        }))
                                    }
                                    placeholder="Chọn danh mục"
                                >
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                className='mb-2'
                                name="status"
                                label="Trạng thái"
                                rules={[{ required: true, message: 'Chọn trạng thái!' }]}
                            >
                                <Select placeholder="Chọn trạng thái">
                                    <Select.Option value="Đang bán">Đang bán</Select.Option>
                                    <Select.Option value="Chưa bán">Chưa bán</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[14, 14]}>
                        <Col span={8}>
                            <Form.Item
                                className='mb-0'
                                name="price"
                                label="Giá tiền VN"
                                rules={[{ required: true, message: 'Nhập giá tiền!' }]}
                            >
                                <InputNumber
                                    className='w-full mb-2'
                                    placeholder='Nhập giá tiền'
                                    min={0}
                                    step={100000}
                                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                className='mb-0'
                                name="sale"
                                label="Giảm giá %"
                                rules={[{ required: true, message: 'Nhập %!' }]}
                            >
                                <InputNumber
                                    className='w-full mb-2'
                                    placeholder='Nhập %'
                                    min={0}
                                    max={100}
                                    step={5}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                className='mb-0'
                                label="Giá sau khi giảm"
                                name='priceSale'
                            >
                                <InputNumber
                                    className='w-full mb-2'
                                    placeholder='Giá sau khi giảm'
                                    readOnly
                                    min={0}
                                    step={100000}
                                    parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>

            {/* Category */}
            <Modal
                centered
                open={openCategory}
                onCancel={() => setOpenCategory(false)}
                footer={null}
                width={600}
            >
                <Tabs
                    centered
                    items={[
                        {
                            label: 'Thêm danh mục',
                            key: '1',
                            children:
                                <>
                                    <Form
                                        form={formAddCategory}
                                        name="customForm"
                                        layout="vertical"
                                        onFinish={handleAddCategory}
                                    >
                                        <Form.Item
                                            className='mb-3'
                                            name="category"
                                            label='Tên danh mục'
                                            rules={[{ required: true, message: 'Nhập tên danh mục!' }]}
                                        >
                                            <Input placeholder="Nhập tên danh mục" />
                                        </Form.Item>

                                        <Button type='primary' loading={loadingCategory} onClick={() => formAddCategory.submit()} className='flex float-end'>Thêm danh mục</Button>
                                    </Form>
                                </>
                            ,
                        },
                        {
                            label: 'Chỉnh sửa danh mục',
                            key: '2',
                            children:
                                <>
                                    <Table
                                        loading={loadingCategory}
                                        data={dataCategoryCourse}
                                        columns={columnsCategory}
                                        onSave={handlePutCategory}
                                        onDelete={handleDelCategory}
                                        width={'20%'}
                                        scroll={{ x: 500, y: 350 }}
                                    />
                                </>
                            ,
                        },
                    ]}
                />
            </Modal>
        </LayoutAdmin>
    )
}

export default Courses