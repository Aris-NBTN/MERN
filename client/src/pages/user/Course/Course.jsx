import { Card, Col, Collapse, Row, Typography } from 'antd'
import { useRef } from 'react'

import LayoutAdmin from '~/components/layout/Admin/Layout'
import Video from '~/components/video/Video'

const HomePage = () => {
    const refs = [useRef(null), useRef(null), useRef(null)];
    const steps = [
        {
            placement: 'right',
            title: 'Video khóa học!',
            description: 'Xem video để hiểu rõ hơn về khóa học!',
            target: () => refs[0].current,
        },
        {
            placement: 'left',
            title: 'Học phần!',
            description: 'Trong học phần có nhiều bài học, hãy chọn bài học để học!',
            target: () => refs[1].current,
        },
        {
            placement: 'top',
            title: 'Nội dung và ghi chú bài học!',
            description: 'Hãy đọc kỹ nội dung và ghi chú bài học để hiểu nhiều kiến thức hơn!',
            target: () => refs[2].current,
        },
    ];

    const items = Array.from({ length: 50 }, (_, index) => ({
        key: (index + 1).toString(),
        label: `This is panel header ${index + 1}`,
        children: <div>{index + 1}</div>,
        extra: 1,
    }));

    return (
        <LayoutAdmin
            tours={steps}
            header={'KHÓA HỌC CỦA TÔI'}
        >
            <Row gutter={[18, 18]}>
                <Col lg={{ span: 16 }} span={24}>
                    <Card ref={refs[0]} className='sticky' style={{ top: '5rem' }}>
                        <Video
                            src={'https://files.vidstack.io/sprite-fight/720p.mp4'}
                        />
                    </Card>
                </Col>

                <Col lg={{ span: 8 }} span={24}>
                    <Card ref={refs[1]}>
                        <Typography.Title level={3}> Khóa học </Typography.Title>
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIconPosition='start'
                            items={items}
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card ref={refs[2]} className='mb-6'>
                        <Typography.Title level={4}> Lưu ý bài học </Typography.Title>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores eum reiciendis facere numquam tempora alias, repellendus harum totam non qui porro quis reprehenderit? Dolores ipsam molestias vitae eaque odit!
                    </Card>
                </Col>
            </Row>
        </LayoutAdmin>
    )
}

export default HomePage