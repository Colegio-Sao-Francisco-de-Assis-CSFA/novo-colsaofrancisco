const express = require("express");

const provasRouter = require("./routes/provas");
const questoesRouter = require("./routes/questoes");
const usuariosRouter = require("./routes/usuarios");

const app = express();
const PORT = process.env.PORT || 8801;

// Middleware para permitir JSON e CORS
app.use(express.json());

// Rotas
app.use("/provas", provasRouter);
app.use("/questoes", questoesRouter);
app.use("/usuarios", usuariosRouter);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
