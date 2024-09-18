import { Card, Col, Row, Typography } from 'antd'
import React, { lazy, Suspense } from 'react';
import LayoutAdmin from '~/components/layout/Admin/Layout'

const CardCourse = lazy(() => import('~/components/course/CardCourse'));

const HomePage = () => {
    return (
        <LayoutAdmin
            header={'KHÓA HỌC CỦA TÔI'}
        >
            {/* <Row gutter={[18, 18]}>
                <Col span={24}>
                    <Card className='ant-card-box'>
                        <Typography.Title level={3}>Khóa học của tôi</Typography.Title>
                        <Row gutter={[20, 20]}>
                            <Col md={{ span: 6 }} span={24}>
                                <CardCourse
                                    link='/user/course/sd'
                                    ellipsisRow={1}
                                    loading={false}
                                    image='https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    alt='Ảnh khóa học Tự học 3D'
                                    name='Tự học 3D'
                                    title='Học thiết kế 3D với Blender Học thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với Blender'
                                    price='500.000đ'
                                    height='14rem'
                                />
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col span={24}>
                    <Card className='mb-6'>
                        <div className="flex justify-between align-center">
                            <Typography.Title level={3}>Có thể bạn sẽ thích</Typography.Title>
                            <Typography.Link>Xem thêm</Typography.Link>
                        </div>
                        <Row gutter={[20, 20]}>
                            <Col md={{ span: 6 }} span={24}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <CardCourse
                                        link='/user/course/sd'
                                        ellipsisRow={1}
                                        loading={false}
                                        image='https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt='Ảnh khóa học Tự học 3D'
                                        name='Tự học 3D'
                                        title='Học thiết kế 3D với Blender Học thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với BlenderHọc thiết kế 3D với Blender'
                                        price='500.000đ'
                                        height='14rem'
                                    />
                                </Suspense>

                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> */}
        </LayoutAdmin>
    )
}

export default HomePage