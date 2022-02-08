import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ROUTES - define um conjunto de rotas a serem encapsulados
// ROUTE - define as rotas individuais

const routes = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default Routes;