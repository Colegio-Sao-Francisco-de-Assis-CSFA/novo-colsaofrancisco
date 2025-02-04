import { prisma } from "../lib/prisma/prisma";

class UserService {
  async getUserByEmail(email: string) {
    return await prisma.usuario.findUnique({
      where: { email },
      include: { perfil: true },
    });
  }

  async getUserById(id: number) {
    return await prisma.usuario.findUnique({
      where: { id },
      include: { perfil: true, posts: true },
    });
  }
}

export const userService = new UserService();
