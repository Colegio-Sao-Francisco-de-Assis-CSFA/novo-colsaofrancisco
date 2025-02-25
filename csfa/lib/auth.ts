import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { CustomAdapter } from "@/lib/customAdapter"; // <- Importando o Adapter

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions = {
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier: email, url }) {
        try {
          console.log(`📩 Enviando Magic Link para: ${email} - URL: ${url}`);
          await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            subject: "Seu link de login",
            html: `<p>Use este link para acessar: <a href="${url}">${url}</a></p>`,
          });
        } catch (error) {
          console.error("❌ Erro ao enviar e-mail de login:", error);
        }
      },
    }),
  ],
  pages: { signIn: "/sign-in" },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: CustomAdapter(),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
