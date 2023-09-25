const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewController.getOverview);

router.get("/login", authController.isLoggedIn, viewController.getLoginForm);

router.get("/profile", authController.protect, viewController.showProfile);

router.get("/pib-main-functions", viewController.getPibMainFunctions);
router.get(
    "/pib-organizationsal-setup",
    viewController.getPibOrganizationalSetup
);
//setting view routes
// app.get("/", (req, res) => {
//     res.status(200).render("index.pug");
// });
module.exports = router;
