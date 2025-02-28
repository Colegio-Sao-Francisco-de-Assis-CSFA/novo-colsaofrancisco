import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authModel } from "../models/authModel";

export const authService = {
  async registrar(name: string, email: string, password: string) {
    const senhaCriptografada = await bcrypt.hash(password, 10);
    return await authModel.criarUsuario(name, email, senhaCriptografada);
  },

  async login(email: string, password: string) {
    const usuario = await authModel.buscarUsuarioPorEmail(email);
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      throw new Error("Credenciais inválidas");
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET!, { expiresIn: "12h" });
    return { token };
  },
};
