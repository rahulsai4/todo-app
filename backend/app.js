require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

// routers
const authMW = require("./middleware/auth");
const userRouter = require("./routes/user.routes");
const taskRouter = require("./routes/task.routes");
app.use("/users", userRouter);
app.use("/tasks", authMW, taskRouter);

const start = async () => {
    try {
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`);
        });
        await mongoose.connect(process.env.MONGO);
        console.log("connected to db.");
    } catch (error) {
        console.error(error);
    }
};
start();
