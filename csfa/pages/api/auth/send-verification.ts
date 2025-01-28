import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma/prisma'; // Conexão com o Prisma
import { sendVerificationEmail } from '@/lib/nodemailer/email';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email } = req.body;

  // Verifique se o e-mail pertence ao domínio permitido
  if (!email.endsWith('@colsaofrancisco.com.br')) {
    return res.status(400).json({ message: 'Somente e-mails institucionais são permitidos.' });
  }

  try {
    // Verificar se o usuário já existe
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado. Contate o administrador.' });
    }

    // Gerar token de verificação
    const token = crypto.randomBytes(32).toString('hex');

    // Salvar token no banco de dados
    await prisma.usuario.update({
      where: { email },
      data: { token },
    });

    // Enviar e-mail com o token
    await sendVerificationEmail(email, token);

    res.status(200).json({ message: 'E-mail de verificação enviado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail de verificação.' });
  }
}

