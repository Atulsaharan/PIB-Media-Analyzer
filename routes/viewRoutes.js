const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", viewController.getOverview);

router.get("/login", viewController.getLoginForm);

router.get("/profile", authController.protect, viewController.showProfile);
//setting view routes
// app.get("/", (req, res) => {
//     res.status(200).render("index.pug");
// });
module.exports = router;
