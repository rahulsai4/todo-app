const Task = require("../models/task.model");

// read all tasks
const readAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId }).sort("createdAt");
        res.status(200).json({ tasks });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};
// delete all tasks
const deleteAllTask = async (req, res) => {
    await Task.deleteMany({});
    res.status(200).json({ msg: "all tasks deleted." });
};
// create
const createTask = async (req, res) => {
    try {
        const { description, complete } = req.body;
        if (!description) {
            return res.status(400).json({ msg: "requires description" });
        }

        const task = await Task.create({ ...req.body, userId: req.userId });
        res.status(200).json({ task, msg: "created task." });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};
// read
const readTask = async (req, res) => {
    const taskId = req.params.id;

    try {
        const task = await Task.findById({ _id: taskId });
        if (!task) {
            res.status(404).json({ msg: "not found" });
        }
        res.status(200).json({ task });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

// update
const updateTask = async (req, res) => {
    const { description, complete } = req.body;
    const taskId = req.params.id;
    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId },
            { description, complete },
            { new: true }
        );
        res.status(200).json({ task, msg: "updated task." });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
// delete
const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await Task.deleteOne({ _id: taskId });
        res.status(200).json({ msg: "deleted" });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

module.exports = {
    createTask,
    readTask,
    readAllTask,
    updateTask,
    deleteTask,
    deleteAllTask,
};
