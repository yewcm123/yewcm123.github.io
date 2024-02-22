import React from "react";
import Footer from "../features/layout/Footer";
import { RouteProps } from "react-router-dom";
import Header from "../features/layout/Header";

const Layout: React.FC<RouteProps> = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
