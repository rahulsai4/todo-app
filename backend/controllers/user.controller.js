const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../jwt/jwt");
// register
const registerUser = async (req, res) => {
    const { name, username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ msg: "requires, username, password" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            username,
            password: hashedPassword,
        });
        const token = await generateToken(user);
        res.status(200).json({ token, user, msg: "user has registered." });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// login
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ msg: "User not found" });
    }

    try {
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ msg: "Invalid password" });
        }

        const token = await generateToken(user);
        res.status(200).json({ token, user, msg: "user logged in" });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

module.exports = { loginUser, registerUser };
