const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: "24h",
    });
    return token;
};

module.exports = { generateToken };
