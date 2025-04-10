const express = require("express");
const router = express.Router();
const {
    createTask,
    readAllTask,
    readTask,
    deleteAllTask,
    deleteTask,
    updateTask,
} = require("../controllers/task.controller");

router.get("/", readAllTask);
router.delete("/", deleteAllTask);
router.post("/", createTask);
router.get("/:id", readTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
