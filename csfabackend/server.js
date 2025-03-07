require("dotenv").config();
const expresss = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");

const app = expresss();
const PORT = process.env.PORT || 8800;

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 8801;

// const provasRouter = require("./routes/provas");
// const usuariosRouter = require("./routes/usuarios");
// const questoesRouter = require("./routes/questoes");


// // Middleware para permitir JSON e CORS
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// // Rotas


// app.use("/provas", provasRouter);
// app.use("/questoes", questoesRouter);
// app.use("/usuarios", usuariosRouter);


// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
