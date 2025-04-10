import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
const UserContext = createContext();
const tasksContext = createContext();

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
