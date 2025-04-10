const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "anon"
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
});
module.exports = mongoose.model("User", userSchema);

