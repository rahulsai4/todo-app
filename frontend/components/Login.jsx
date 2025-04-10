import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const { token, setToken } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
            navigate("/");
        }
    }, []);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/users/login", // API endpoint
                {
                    username: formData.username,
                    password: formData.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setToken(response.data.token);
            navigate("/home");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "2rem" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
