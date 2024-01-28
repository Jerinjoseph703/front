import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/panel'; // Adjust the path as needed

  if (isHomePage) {
    // Don't render header and footer on the home page
    return (
      <>
        <div >
          <Outlet />
        </div>
      </>
    );
  }

  // Render header, outlet, and footer for other pages
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
