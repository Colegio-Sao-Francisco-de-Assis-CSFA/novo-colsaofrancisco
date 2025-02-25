const express = require("express");
const authController = require("../../controllers/authController");
const router = express.Router();

router.post("/magic-link", authController.enviarEmail);

module.exports = router;