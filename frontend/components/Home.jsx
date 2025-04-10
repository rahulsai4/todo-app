import React, { useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";

const Home = () => {
    const { token, setToken, tasks, setTasks } = useContext(Context);
    useEffect(() => {
        // fetch tasks
    }, [])
    return <div></div>;
};

export default Home;
