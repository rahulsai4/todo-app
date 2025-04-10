const jwt = require("jsonwebtoken");

const authMW = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ msg: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token", msg: error.message });
    }
};

module.exports = authMW;
