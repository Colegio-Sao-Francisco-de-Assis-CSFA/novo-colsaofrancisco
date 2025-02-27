const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/sign-in", authController.signIn);
router.get("/check-session", authMiddleware, authController.checkSession);
router.post("/logout", authMiddleware, authController.logout);

// Protege todas as rotas dentro de `/dashboard`
router.use("/dashboard", authMiddleware);

module.exports = router;