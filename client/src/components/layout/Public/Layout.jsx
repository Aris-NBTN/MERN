import { useEffect, useRef, useState } from 'react';
import { Drawer, Menu } from 'antd';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '~/redux/slices/menuSlice';

import './Layout.css';
import 'animate.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const LayoutPublic = ({
    title = "Wood 3D",
    description = "Wood 3D",
    keywords = "3D",
    author = "Wood 3D",
    children
}) => {
    const { '*': path } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const menuItems = useSelector((state) => state.menu);
    const menuStatus = useSelector((state) => state.menu.status);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleLinkClick = (event) => {
            const target = event.target.closest('a');
            if (target && target.href) {
                const url = new URL(target.href);
                const relativePath = url.pathname + url.search + url.hash;
                if (url.origin === window.location.origin) {
                    event.preventDefault();
                    navigate(relativePath);
                }
            }
        };

        const container = document.getElementById('root');
        if (container) {
            container.addEventListener('click', handleLinkClick);
        }

        return () => {
            if (container) {
                container.removeEventListener('click', handleLinkClick);
            }
        };
    }, [navigate]);

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(fetchMenu());
        }
    }, [dispatch, menuStatus]);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                {/* <link rel="icon" type="image/svg+xml" href={`${inFo?.icon[0]?.url}`} /> */}
                <title>{title}</title>
            </Helmet>

            {menuItems?.menuItems?.css && (
                <>
                    <style dangerouslySetInnerHTML={{ __html: menuItems?.menuItems?.css }} />
                </>
            )}

            {menuItems?.menuItems?.header && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500 }} >
                        <div dangerouslySetInnerHTML={{ __html: menuItems?.menuItems?.header }} />
                    </div>
                </>
            )}

            <div style={{ minHeight: 'calc(93vh - 6rem)' }}>
                {children}
            </div>
            <div dangerouslySetInnerHTML={{ __html: menuItems?.menuItems?.footer }} />

            <Drawer
                placement='left'
                // title={inFo?.info?.websiteName}
                onClose={() => setOpen(false)}
                open={open}
                width={256} >

                <div className="flex flex-column justify-between" style={{ height: "100%" }}>
                    {/* <Menu
                        mode="inline"
                        onClick={(item) => {
                            setOpen(false);
                            setTimeout(() => {
                                navigate(`/${item.subtitle}`);
                            }, 500);
                        }}
                        style={{
                            width: 256,
                        }}
                        items={menu}
                    /> */}

                    {/* <div className="p-2">
                        <div className="flex items-center gap-2 my-2">
                            <FaMailBulk size={22} />
                            {inFo?.info?.email}
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <FaPhoneAlt size={22} />
                            {inFo?.info?.phoneNumber}
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <FaLocationDot size={22} />
                            {inFo?.info?.address}
                        </div>
                    </div> */}
                </div>

            </Drawer>
        </HelmetProvider>
    );
};
export default LayoutPublic;