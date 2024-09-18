import { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, removeFromCart } from "~/redux/slices/cartSlice";
import Layout from "~/components/layout/Public/Layout";

// import Course from "~/components/course/CardCourse";
import { FormatPrice, FormatPriceSale } from '~/components/table/Format'

import SkeletonCategory from '~/components/loading/SkeletonCategory'
import SkeletonCourse from '~/components/loading/SkeletonCourse'

import "./Course.css";
import {
  Col,
  Collapse,
  Row,
  Slider,
  theme,
  Card,
  Button,
  Radio,
  Space,
  Empty,
} from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { getCategoryCouresApi } from "~/redux/slices/Data/categoryCourseSlice";

import { courseApi } from "~/apis/courseApi";
import { toastError } from "~/components/toast";
import useCartData from "~/hooks/Cart";

const CardCourse = lazy(() => import('~/components/course/CardCourse'));

const Courses = () => {
  const dispatch = useDispatch();
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: "10px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const [loading, setLoading] = useState(true);
  const { courses, status } = useSelector((state) => state.cart);
  const { categoryCourses: categories, loading: loadingCategory } = useSelector((state) => state.categoryCourses);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ priceCourse: "0-40000000" });

  const carts = useCartData();

  const onChangeCategory = (checkedValues) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      "categoryCourse": checkedValues,
    }));
  };

  const onChangePrice = (value) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      "priceCourse": value.join("-"),
    }));
  };

  const selectCategory = (panelStyle) => [
    {
      key: "category",
      label: "Danh mục khóa học",
      children: (
        <>
          <Radio.Group defaultValue="" onChange={(e) => onChangeCategory(e.target.value)}>
            <Space direction="vertical">
              <Radio value="">
                Tất cả
              </Radio>

              {categories.map((item) => (
                <Radio key={item.slug} value={item._id}>
                  {item.category}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "price",
      label: "Giá tiền",
      children: (
        <Slider
          range
          onChange={onChangePrice}
          defaultValue={[0, 40000000]}
          min={0}
          max={40000000}
          tooltip={{
            formatter: (value) => FormatPrice(value),
          }}
          step={100000}
          styles={{
            track: {
              background: "transparent",
            },
            tracks: {
              background: "linear-gradient(to right, #ffbe00, #ffbe00)",
            },
          }}
        />
      ),
      style: panelStyle,
    },
  ];

  const fetchData = () => {
    if (search && Object.keys(search).length > 0) {
      setLoading(true);
      courseApi.search(search).then((res) => {
        setData(res)
        setLoading(false);
      });
    } else {
      toastError("", "Chưa chọn thông tin!", "Vui lòng chọn điều kiện tìm kiếm")
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems())
    }
    if (status === "succeeded") {
      setLoading(false);
    }
  }, [dispatch, status]);

  useEffect(() => {
    setData(courses);
  }, [courses]);

  useEffect(() => {
    if (loadingCategory) {
      dispatch(getCategoryCouresApi());
    }
  }, []);

  return (
    <Layout>
      <section>
        <Row gutter={[18, 18]}>
          <Col md={{ span: 7 }} lg={{ span: 5 }} xl={{ span: 4 }} span={24}>
            <Card className="sticky top-24 card-p2">
              {loadingCategory ? (
                <SkeletonCategory />
              ) : (
                <>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={["category", "price"]}
                    expandIcon={({ isActive }) => (
                      <CaretRightOutlined rotate={isActive ? 90 : 0} />
                    )}
                    style={{ background: token.colorBgContainer }}
                    items={selectCategory(panelStyle)}
                  />
                  <Button className="w-full" loading={loading} onClick={fetchData}>Tìm kiếm</Button>
                </>
              )}
            </Card>
          </Col>

          <Col md={{ span: 17 }} lg={{ span: 19 }} xl={{ span: 20 }} span={24}>
            {loading ? (
              <SkeletonCourse
                quantity={8}
                loading={loading}
              />
            ) : (
              <Row gutter={[18, 18]}>
                {data.length === 0 ? (
                  <div className="size-full">
                    <Empty />
                  </div>
                ) : (
                  data.map(
                    (course, index) =>
                      course.status !== "Chưa bán" && (
                        <Col
                          key={index}
                          sm={{ span: 12 }}
                          md={{ span: 12 }}
                          lg={{ span: 8 }}
                          xl={{ span: 6 }}
                          span={24}
                        >
                          <Suspense fallback={<div>Loading...</div>}>
                            <CardCourse
                              carts={carts.carts}
                              openList={true}
                              ellipsisRow={1}
                              loading={loading}
                              info={course}
                            />
                          </Suspense>
                        </Col>
                      )
                  )
                )}
              </Row>
            )}
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export default Courses;
