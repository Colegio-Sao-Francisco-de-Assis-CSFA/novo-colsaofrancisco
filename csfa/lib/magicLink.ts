import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendMagicLinkEmail(email: string, url: string) {
  if (!process.env.EMAIL_FROM) {
    throw new Error("A variável de ambiente EMAIL_FROM não está definida.");
  }

  if (!email || !url) {
    throw new Error("Email e URL são obrigatórios para enviar o Magic Link.");
  }

  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Seu link de login",
      html: `<p>Clique no link para entrar: <a href="${url}">${url}</a></p>`,
    });

    console.log("📨 Resend Response:", response);
    console.log(`✅ Magic link enviado para ${email}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Erro inesperado ao enviar e-mail:", error.message);
    } else {
      console.error("❌ Erro desconhecido ao enviar e-mail:", error);
    }
    throw new Error("Erro ao enviar o e-mail.");
  }
}
