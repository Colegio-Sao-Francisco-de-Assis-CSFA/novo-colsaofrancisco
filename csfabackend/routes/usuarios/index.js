const express = require("express");
const usuariosController = require("../../controllers/usuariosController");
const authMiddleware = require("../../middlewares/authMiddleware");

const router = express.Router();

// Rotas públicas
router.get("/", usuariosController.listarUsuarios);
router.get("/email", usuariosController.buscarUsuarioPorEmail);

// Rotas protegidas
router.use(authMiddleware);
router.get("/:id", usuariosController.buscarUsuarioPorId);
router.post("/", usuariosController.criarUsuario);
router.put("/:id", usuariosController.atualizarUsuario);
router.delete("/:id", usuariosController.excluirUsuario);

module.exports = router;
