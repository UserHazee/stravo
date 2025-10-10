// components/RootLayout.jsx
import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default RootLayout;