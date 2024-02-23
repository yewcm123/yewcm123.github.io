import React from "react";
import Footer from "../features/layout/Footer";
import { RouteProps, Outlet } from "react-router-dom";
import Header from "../features/layout/Header";

const Layout: React.FC<RouteProps> = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
