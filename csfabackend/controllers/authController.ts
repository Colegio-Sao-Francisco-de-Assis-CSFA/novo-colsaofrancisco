import { Request, Response } from "express";
import { authService } from "../services/authService";

export const authController = {
  async registrar(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      await authService.registrar(name, email, password);
      res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token } = await authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
