import React from 'react';
import { Outlet, RouteProps } from 'react-router-dom';
import Footer from '../features/layout/Footer';
import Header from '../features/layout/Header';

const Layout: React.FC<RouteProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
