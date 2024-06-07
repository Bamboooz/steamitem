import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Item from "./pages/Item";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/item" Component={Item} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
