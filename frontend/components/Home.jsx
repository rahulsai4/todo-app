import React, { useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import axios from "axios";

const Home = () => {
    const { token, setToken, tasks, setTasks } = useContext(Context);
    useEffect(() => {
        // fetch tasks
        if (token) {
            fetchTasks();
        }
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await axios.get("http://localhost:8000/tasks/", {
                headers: {
                    authorization: token,
                },
            });

            setTasks(res.data.tasks);
        } catch (error) {
            console.log("error fetching tasks", error.message);
        }
    };

    return (
        <div>
            <AddTodo />
            <Todos />
        </div>
    );
};

export default Home;
