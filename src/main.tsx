import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./style/App.css";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
              </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
