import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma/prisma';

interface VerificationResponse {
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerificationResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { token } = req.body;

    if (!token || typeof token !== 'string') {
      return res.status(400).json({ error: 'Token de verificação não encontrado' });
    }

    // Verifica o token no banco de dados
    const user = await prisma.usuario.findFirst({
      where: {
        token,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Token inválido ou expirado' });
    }

    // Atualiza o usuário para marcar o e-mail como verificado
    await prisma.usuario.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: new Date(),
        token: null, // Remove o token após a verificação
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({ message: 'Cadastro concluído com sucesso' });
  } catch (error) {
    console.error('Erro ao verificar email:', error);
    return res.status(500).json({ error: 'Erro interno ao processar a verificação do email' });
  }
}
