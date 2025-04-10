import React, { createContext } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
const UserContext = createContext();
const tasksContext = createContext();

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/login" element/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
