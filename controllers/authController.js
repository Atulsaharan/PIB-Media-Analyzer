const User = require("./../models/user");
const JWT = require("jsonwebtoken");
const signToken = (id) => {
    return JWT.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
//register a new user
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const data = await User.create({
            username: username,
            password: password,
        });
        const token = signToken(data._id);
        res.status(200).json({
            status: "success",
            message: "registration successful",
            token,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
        console.log(err, "wtf");
    }
};

//logging in a user
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        //1)check if email and password exist
        if (!username || !password) {
            throw new Error("Please provide email and password");
        }
        //2)check if user exist and password is correct
        const user = await User.findOne({ username });
        if (!user || !(password === user.password)) {
            throw new Error("Incorrect username or password");
        }
        //3)if everything ok send the token to the client
        const token = signToken(user._id);
        res.status(200).json({ status: "success", token });
    } catch (err) {
        res.status(400).json({
            result: "fail",
            error: err.message,
        });
    }
};
