import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./style/App.css";
import "./style/index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
