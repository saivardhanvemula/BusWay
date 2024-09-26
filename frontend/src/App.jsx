import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { CityServices } from "./Components/CityServices";
import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<CityServices />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
