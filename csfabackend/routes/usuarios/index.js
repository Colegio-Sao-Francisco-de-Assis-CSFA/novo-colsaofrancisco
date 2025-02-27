const express = require("express");
const usuariosController = require("../../controllers/usuariosController");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

// Rotas públicas
router.get("/", usuariosController.listarUsuarios);
router.get("/email", usuariosController.buscarUsuarioPorEmail);

// Rotas protegidas
router.use(authMiddleware.authDecode);
router.get("/:id", authMiddleware.authDecode, usuariosController.buscarUsuarioPorId);
router.post("/", authMiddleware.authDecode, usuariosController.criarUsuario);
router.put("/:id", authMiddleware.authDecode, usuariosController.atualizarUsuario);
router.delete("/:id", authMiddleware.authDecode, usuariosController.excluirUsuario);

module.exports = router;
