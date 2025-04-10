import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import axios from "axios";

const Todos = () => {
    const { tasks, setTasks, token } = useContext(Context);

    const handleDeleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${id}`, {
                headers: {
                    authorization: token,
                },
            });
            setTasks((prev) => prev.filter((t) => t._id !== id));
        } catch (error) {
            console.log("error fetching tasks", error.message);
        }
    };
    return (
        <ul>
            {tasks &&
                tasks.map((task) => {
                    return (
                        <div>
                            <p>{task.description}</p>
                            <button onClick={() => handleDeleteTask(task._id)}>
                                delete
                            </button>
                            <br></br>
                        </div>
                    );
                })}
        </ul>
    );
};

export default Todos;
