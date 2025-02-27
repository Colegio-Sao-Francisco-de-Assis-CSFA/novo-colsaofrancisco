import type { Metadata } from "next";
import React from "react";
import "@/app/styles/globals.css";
import Footer from "@/components/views/Footer/Footer";
import Header from "@/components/views/Header/Header";
import SessionProvider from "@/components/views/SessionProvider/SessionProvider";

export const metadata: Metadata = {
  title: "Colégio São Francisco de Assis",
  description:
            `Colégio São Francisco De Assis – Formando Jovens Transformadores da Sociedade
            No Colégio São Francisco De Assis, a educação vai além do ensino
            acadêmico: cultivamos valores cristãos, promovemos a excelência
            e incentivamos nossos alunos a serem agentes de transformação no
            mundo. Com uma base sólida na fé católica e no compromisso com a
            justiça social, preparamos os jovens para enfrentar desafios, construir
            um futuro melhor e impactar positivamente a sociedade. Aqui, cada
            estudante é chamado a desenvolver seu potencial intelectual, humano
            e espiritual, guiado por princípios de amor, respeito e solidariedade.
            Nossa missão é formar líderes éticos e comprometidos, que promovam
            a paz, a verdade e o bem comum.Venha fazer parte desta missão e
            transforme o mundo com a força da educação e da fé!`,
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/logo.webp" type="image/webp" />
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </head>
      <body className="bg-blue-900">
        {/* Envolvendo o conteúdo com o SessionProvider para que a sessão esteja acessível em toda a aplicação */}
              <div className="container h-auto max-w-screen-2xl flex flex-col items-center justify-center overflow-hidden">
                  <SessionProvider>
                    {children}
                  </ SessionProvider>
              </div>
          <Footer />
      </body>
    </html>
  );
}
