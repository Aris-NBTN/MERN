import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from 'antd';

import LayoutAdmin from '~/components/layout/admin/Layout';
import Table from '~/components/table/Table';
import { FilterText, FilterDate, FilterSelect } from '~/components/table/Filter';
// import Invoice from './Invoice';

import { exportDataExcel } from '~/utils/export';

import { FaFileExcel } from 'react-icons/fa';

const Orders = () => {
    const [data, setData] = useState([
        {
            key: '1',
            userOrder: 'Nguyễn V7',
            billOrder: 'DH001',
            dayOrder: '2021-10-10',
            dayPay: '2023-10-10',
            status: 'Đã thanh toán',
        },
        {
            key: '2',
            userOrder: 'Nguyễn V7',
            billOrder: 'DH002',
            dayOrder: '2021-10-10',
            dayPay: '2021-10-10',
            status: 'Chưa thanh toán',
        }
    ]);

    const [loading, setLoading] = useState(true);
    const [inFor, setInFor] = useState(false);

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'billOrder',
            width: '10%',
            ...FilterText({ dataIndex: 'billOrder' })
        },
        {
            title: 'Người đặt hàng',
            dataIndex: 'userOrder',
            width: '20%',
            ...FilterText({ dataIndex: 'userOrder' })
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'dayOrder',
            width: '15%',
            ...FilterDate({ dataIndex: 'dayOrder' })
        },
        {
            title: 'Ngày thanh toán',
            dataIndex: 'dayPay',
            width: '15%',
            ...FilterDate({ dataIndex: 'dayPay' })
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            width: '10%',
            ...FilterSelect('status', [{ value: 'Đã thanh toán', text: 'Đã thanh toán' }, { value: 'Chưa thanh toán', text: 'Chưa thanh toán' }])
        },
        {
            title: 'Thông tin',
            dataIndex: 'info',
            width: '10%',
            render: () =>
                <>
                    <Button onClick={() => setInFor(true)}>
                        Chi tiết đơn hàng
                    </Button>
                </>
            ,
        },
    ];

    const fecthData = () => {
        setLoading(false);
    }

    useEffect(() => {
        fecthData();
    }, []);

    return (
        <LayoutAdmin
            header={
                <>
                    <div className='flex items-center'>
                        <h6 className='mb-0'>ĐƠN HÀNG</h6>
                    </div>
                </>
            }
            button={
                <>
                    <Button onClick={() => exportDataExcel(data, 'Order.xlsx')} type='primary'>Xuất file Excel</Button>
                </>
            }
        >
            <Table
                loading={loading}
                data={data}
                columns={columns}
                colEdit={false}
            />
            <Modal
                centered
                closeIcon={false}
                open={inFor}
                onOk={() => setInFor(false)}
                onCancel={() => setInFor(false)}
                footer={
                    <>
                        <Button onClick={() => setInFor(false)}>Hủy</Button>
                        <Button type='primary'>Xuất file PDF</Button>
                        <Button type='primary'>In hóa đơn</Button>
                    </>
                }
                width={800}
            >
                {/* <Invoice
                    userName='Nguyễn V7'
                    phoneUser='0123456789'
                    mailUser='@@'
                    addressUser='12221'
                /> */}
            </Modal>
        </LayoutAdmin>
    );
}

export default Orders;
