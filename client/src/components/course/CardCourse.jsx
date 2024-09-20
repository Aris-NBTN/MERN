import React, { useState } from 'react';
import { Button, Card, Col, Drawer, Empty, Row, Skeleton, Typography } from 'antd';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';

import { FormatPrice, FormatPriceSale } from '~/components/table/Format';
import { toastSuccess } from '~/components/toast';

import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaCartShopping, FaStarHalfStroke } from 'react-icons/fa6';

import { addToCart } from '~/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdSlowMotionVideo } from "react-icons/md";
import { baseURL } from '~/utils';

import './Card.css';
import '~/pages/public/Cart/Cart.css';
import ListCart from '../cart/ListCart';

const CardCourse = ({ loading, info = '', carts = '', height = '15.75rem', ellipsisRow = 1, openList = true }) => {
  const ellipsis = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isPurchased = user?.courses?.some((course) => course === info._id);

  return (
    <>
      <Card
        className="card-course-container ant-card-pro"
        loading={loading}
        cover={
          <div className="card-inner" style={{ height: height }}>
            <div className="box">
              <NavLink to={`/course/${info.slug || ''}`}>
                <div className="imgBox">
                  {loading && (
                    <Skeleton.Image className="!w-full !h-full" active={true} />
                  )}
                  <motion.img
                    src={`${baseURL}/uploads/${info.img}`}
                    alt={info.alt || 'Ảnh khóa học Tự học 3D'}
                    style={{ display: loading ? "none" : "block" }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </NavLink>

              <div className="icon">
                {!loading && (
                  <>
                    {isPurchased ? (
                      <div className="iconBox" onClick={() => navigate(`/user/course/${info.slug}`)}>
                        <MdSlowMotionVideo className="icon-shop" size={25} />
                      </div>
                    ) : (
                      <div
                        className="iconBox"
                        onClick={() => {
                          if (openList) setOpenCart(true);
                          dispatch(addToCart(info));
                          toastSuccess(
                            info.name,
                            "Thêm vào giỏ hàng thành công",
                            `Đã thêm ${info.name} vào giỏ hàng`
                          );
                        }}
                      >
                        <FaCartShopping className="icon-shop" size={22} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        }
      >
        <NavLink to={`/course/${info.slug || ''}`}>
          <div className="card-course">
            <div className="content h-full">
              <h3 className="mb-2">{info.name}</h3>
              <Typography.Paragraph
                className="mb-2"
                ellipsis={
                  ellipsis
                    ? {
                      rows: ellipsisRow,
                      suffix: "",
                    }
                    : false
                }
              >
                {info.title || "Khóa học chưa có mô tả"}
              </Typography.Paragraph>

              <div className="flex flex-wrap items-center justify-between gap-2">
                {isPurchased ? (
                  <Typography.Title className='!mb-0' level={3} type='success'>Đã mua</Typography.Title>
                ) : (
                  <Typography.Title className='!mb-0' level={3} type='danger'> {FormatPrice(FormatPriceSale(info.price, info.sale))}</Typography.Title>
                )}
                <div
                  className="evaluate flex gap-1"
                  style={{ color: "#ffce3d", fontSize: 16 }}
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  <FaRegStar />
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </Card>

      <Drawer width={450} title="Giỏ hàng" onClose={() => setOpenCart(false)} open={openCart}>
        <div className='p-4'>
          {carts.length > 0 ? (
            <div className='flex flex-col'>
              <ListCart
                carts={carts}
              />
              <Button size='large' onClick={() => navigate("/checkout")}>Tiến Hành Thanh Toán!</Button>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              <Empty description='Chưa có khóa học nào trong giỏ hàng' />
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default CardCourse;
