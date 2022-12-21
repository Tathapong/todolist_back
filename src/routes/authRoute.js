const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/username", authController.username);
router.get("/email", authController.email);
module.exports = router;
