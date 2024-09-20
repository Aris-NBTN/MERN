import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

// Antd
import { ConfigProvider, FloatButton, theme, Tooltip } from 'antd';
import vi_VN from 'antd/locale/vi_VN';
import themeConfig from '~/json/Theme.json';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '~/redux/slices/themeSlice';
import { toggleCompact } from "~/redux/slices/compactSlice";

// Icons
import { BsStars, BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { AiOutlineCompress, AiOutlineExpand } from "react-icons/ai";

// Routes
import PrivateRoute from "~/routes/PrivateRoute";
import PublicRoute from "~/routes/PublicRoute";

// Loading
import SkeletonAdmin from '~/components/loading/SkeletonAdmin';
import SkeletonPublic from '~/components/loading/SkeletonPublic';

// Logout
import LogoutPage from '~/routes/LogoutRoute';

// Public
const HomePage = lazy(() => import('~/pages/public/Pages/Pages'));
const Login = lazy(() => import('Public/Login/Login'));
const Cart = lazy(() => import('Public/Cart/Cart'));
const CoursesPublic = lazy(() => import('Public/Courses/Courses'));
const CoursePublic = lazy(() => import('Public/Course/Course'));
const CheckOut = lazy(() => import('Public/CheckOut/CheckOut'));
const Payment = lazy(() => import('Public/Payment/Payment'));
const TestPublic = lazy(() => import('Public/Test/Test'));
const Success = lazy(() => import('Public/Status/Success'));
const Cancel = lazy(() => import('Public/Status/Cancel'));

// Admin
const Dashboard = lazy(() => import('Admin/Dashboard/Dashboard'));
const Info = lazy(() => import('Admin/Info/Info'));
const Users = lazy(() => import('Admin/Users/Users'));
const Courses = lazy(() => import('Admin/Courses/Courses'));
const Course = lazy(() => import('Admin/Course/Course'));
const Orders = lazy(() => import('Admin/Orders/Orders'));
const FileManger = lazy(() => import('Admin/FileManager/FileManager'));
const KeyBank = lazy(() => import('Admin/KeyBank/KeyBank'));
const Layout = lazy(() => import('Admin/Layout/Layout'));
const Pages = lazy(() => import('Admin/Pages/Pages'));
const Page = lazy(() => import('Admin/Page/Page'));
const Menu = lazy(() => import('Admin/Menu/Menu'));
const EmailPage = lazy(() => import('Admin/Email/Email'));
const Plugins = lazy(() => import('Admin/Plugins/Plugins'));
const Data = lazy(() => import('Admin/Data/Data'));

// Custom
const Masonry = lazy(() => import('~/components/grapeJs/Custom/Block/Masonry/Masonry'));

// User
const Home = lazy(() => import('User/Home/Home'));
const User = lazy(() => import('User/Profile/Profile'));
const CoursesUser = lazy(() => import('User/Courses/Courses'));
const CourseUser = lazy(() => import('User/Course/Course'));
const OrdersUser = lazy(() => import('User/Orders/Orders'));
const ChangePassword = lazy(() => import('~/pages/user/Password/ChangePassword'));
const ForgotPassword = lazy(() => import('~/pages/user/Password/ForgotPassword'));

// Error
const Page404 = lazy(() => import('~/pages/errors/Page404'));
const Page403 = lazy(() => import('~/pages/errors/Page403'));

// Test
const Test = lazy(() => import('~/pages/test'));

// Utils
import { TYPE_EMPLOYEE } from "~/utils";
import { floatRoute } from './utils/route';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const darkMode = useSelector((state) => state.theme.darkMode);
  const compact = useSelector((state) => state.compact.compactMode);
  const { darkAlgorithm, defaultAlgorithm, compactAlgorithm } = theme;

  const isAdminRoute = (pathname) => {
    return pathname.startsWith('/admin');
  };

  useEffect(() => {
    if (isAdminRoute(location.pathname)) {
      document.body.className = darkMode ? 'dark overflow-hidden' : 'overflow-hidden';
    } else {
      document.body.className = darkMode ? 'dark' : '';
    }
  }, [darkMode, location.pathname]);

  return (
    <>
      <ConfigProvider
        locale={vi_VN}
        theme={{
          algorithm: darkMode
            ? compact
              ? [darkAlgorithm, compactAlgorithm]
              : [darkAlgorithm]
            : compact
              ? [defaultAlgorithm, compactAlgorithm]
              : [defaultAlgorithm],
          ...themeConfig
        }}
      >
        {!floatRoute(location.pathname) && (
          <FloatButton.Group
            trigger="click"
            type="primary"
            style={{ right: 25, bottom: 15, zIndex: 5 }}
            icon={<BsStars />}
          >
            <Tooltip placement="left" title={compact ? 'Compact On' : 'Compact off'}>
              <FloatButton icon={compact ? <AiOutlineExpand /> : <AiOutlineCompress />} onClick={() => dispatch(toggleCompact())} />
            </Tooltip>

            <Tooltip placement="left" title={darkMode ? 'Light Mode' : 'Dark Mode'}>
              <FloatButton icon={darkMode ? <BsMoonStars /> : <BsMoonStarsFill />} onClick={() => dispatch(toggleTheme())} />
            </Tooltip>
          </FloatButton.Group>
        )}

        <FloatButton.BackTop duration={700} visibilityHeight={100} style={{ right: 25, bottom: 70, zIndex: 4 }} />

        <Suspense fallback={isAdminRoute(location.pathname) ? <SkeletonAdmin /> : <SkeletonPublic />}>
          <Routes>

            {/* Publish */}
            <Route path="/" element={<PublicRoute />}>
              <Route path="" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="courses" element={<CoursesPublic />} />
              <Route path="course/:slug" element={<CoursePublic />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="payment" element={<Payment />} />
              <Route path="logout" element={<LogoutPage />} />
              <Route path="test" element={<TestPublic />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Route>

            {/* Error */}
            <Route path="/404" element={<Page404 />} />
            <Route path="/403" element={<Page403 />} />

            {/* Admin */}
            <Route path="/admin" element={<PrivateRoute requiredPermission={[TYPE_EMPLOYEE.admin]} />}>
              <Route path="" element={<Dashboard />} />
              <Route path="menu" element={<Menu />} />
              <Route path="email" element={<EmailPage />} />
              <Route path="info" element={<Info />} />
              <Route path="users" element={<Users />} />
              <Route path="courses" element={<Courses />} />
              <Route path="course/:slug" element={<Course />} />
              <Route path="orders" element={<Orders />} />
              <Route path="file-manager" element={<FileManger />} />
              <Route path="plugins" element={<Plugins />} />
              <Route path="data" element={<Data />} />
              <Route path="key-payment" element={<KeyBank />} />
              <Route path="layout" element={<Layout />} />
              <Route path="pages" element={<Pages />} />
              <Route path="page/:slug" element={<Page />} />
              <Route path="test" element={<Test />} />

              <Route path="page-custom/masonry/:slug" element={<Masonry />} />
            </Route>

            {/* User */}
            <Route path="/user" element={<PrivateRoute requiredPermission={[TYPE_EMPLOYEE.user]} />}>
              <Route path="" element={<Home />} />
              <Route path="info" element={<User />} />
              <Route path="courses" element={<CoursesUser />} />
              <Route path="course/:slug" element={<CourseUser />} />
              <Route path="orders" element={<OrdersUser />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </Suspense>
      </ConfigProvider>
    </>
  )
}

export default App
