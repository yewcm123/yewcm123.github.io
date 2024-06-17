import React from 'react';
import { Outlet, RouteProps } from 'react-router-dom';
import Header from './Header';

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
