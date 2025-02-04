import type { Metadata } from "next";
import React from "react";
import "@/app/styles/globals.css";


export const metadata: Metadata = {
  title: "CSFA | Sign-In", 
  description: 
            `Página de acesso ao sistema - Sign-In`,
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <head>
        <link rel="shortcut icon" href="/logo.webp" type="image/webp" />
      </head>
      <body className="bg-white">
        {/* Envolvendo o conteúdo com o SessionProvider para que a sessão esteja acessível em toda a aplicação */}
            <div className="container h-auto max-w-screen-2xl flex flex-col items-center justify-center overflow-hidden">
              {children}
            </div>
      </body>
    </html>
  );
}
