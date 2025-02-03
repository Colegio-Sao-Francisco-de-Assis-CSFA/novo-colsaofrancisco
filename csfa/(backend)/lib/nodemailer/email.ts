import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail ou outro serviço como Outlook, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Endereço de e-mail do remetente
    pass: process.env.EMAIL_PASS, // Senha ou app password
  },
});

// Função para enviar o e-mail de verificação
export async function sendVerificationEmail(email: string, token: string) {
  const url = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verificação de Cadastro',
    html: `
      <p>Olá,</p>
      <p>Por favor, clique no link abaixo para completar seu cadastro:</p>
      <a href="${url}" target="_blank">Verificar Cadastro</a>
      <p>Se você não realizou esta solicitação, ignore este e-mail.</p>
    `,
  });
}
