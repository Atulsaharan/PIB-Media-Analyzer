const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

<<<<<<< HEAD
router.get("/", viewController.getOverview);
router.get("/about-PIB-media-analyzer",viewController.getPIBmediaAbout)
router.get("/login", viewController.getLoginForm);
=======
router.get("/", authController.isLoggedIn, viewController.getOverview);

router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
>>>>>>> 1c3ba06b67195e291d81d2adb0e0bf410c945a2c

router.get("/department-info",viewController.showDepInfo)

router.get("/profile", authController.protect, viewController.showProfile);
//setting view routes
// app.get("/", (req, res) => {
//     res.status(200).render("index.pug");
// });
module.exports = router;
