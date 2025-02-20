const express = require("express");
const usuariosController = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", usuariosController.listarUsuarios); // Listar usuários
router.get("/:id", usuariosController.buscarUsuarioPorId); // Buscar usuário por ID
router.post("/", usuariosController.criarUsuario); // Criar um novo usuário
router.put("/:id", usuariosController.atualizarUsuario); // Atualizar um usuário
router.delete("/:id", usuariosController.excluirUsuario); // Deletar um usuário

module.exports = router;
