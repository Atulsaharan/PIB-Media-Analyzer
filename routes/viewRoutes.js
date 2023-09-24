const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewController.getOverview);

router.get("/login", authController.isLoggedIn, viewController.getLoginForm);

router.get("/department-info",viewController.showDepInfo)

router.get("/profile", authController.protect, viewController.showProfile);
//setting view routes
// app.get("/", (req, res) => {
//     res.status(200).render("index.pug");
// });
module.exports = router;
