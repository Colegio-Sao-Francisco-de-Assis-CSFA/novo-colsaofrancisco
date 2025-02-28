import prisma from "../config/database";

export const authModel = {
  async buscarUsuarioPorEmail(email: string) {
    return await prisma.usuario.findUnique({ where: { email } });
  },

  async criarUsuario(name: string, email: string, password: string) {
    return await prisma.usuario.create({ data: { name, email, password } });
  },
};
