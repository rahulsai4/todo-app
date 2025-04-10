import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [tasks, setTasks] = useState([]);
    return (
        <Context.Provider value={{ token, setToken, tasks, setTasks }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
