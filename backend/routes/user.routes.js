const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/user.controller");
const User = require("../models/user.model");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.delete("/deleteAll", async (req, res) => {
    await User.deleteMany();
    res.status(200).json({ msg: "all users deleted" });
});
router.get("/getAll", async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users });
});

module.exports = router;
