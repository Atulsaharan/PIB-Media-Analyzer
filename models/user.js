const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required for creating a account"],
        unique: [
            true,
            "Another user is using the same username please try again",
        ],
    },
    password: {
        type: String,
        required: [true, "password is required for creating a account"],
    },
});
module.exports = mongoose.model("user", userSchema);
