const express = require("express");
const path = require("path");
const pug = require("pug");

const app = express();
app.use(express.json());

//allowing expreses to use static file
app.use(express.static(`${__dirname}/public`));

//setting pug ans view renderer
app.set(path.join(__dirname, "./views"));
app.set("view engine", "pug");

//setting view routes
app.get("/", (req, res) => {
    res.status(200).render("index.pug");
});
//routes
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
app.use("/api/v1/auth", authRoutes);
app.use("/apt/v1", authRoutes);
// app.use("/protected", protectedRoutes);



module.exports = app;
