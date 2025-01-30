import type { Metadata } from "next";
import React from "react";
import "./styles/globals.css";
import { ThemeModeScript } from "flowbite-react";
import NextSessionProvider from "./components/shared/NextSessionProvider/NextSessionProvider";

export const metadata: Metadata = {
  title: "Colégio São Francisco de Assis", 
  description: "",
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <head>
        <ThemeModeScript />
        <link rel="shortcut icon" href="/logo.webp" type="image/webp" />
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </head>
      <body className="bg-blue-900">
        {/* Envolvendo o conteúdo com o SessionProvider para que a sessão esteja acessível em toda a aplicação */}
        <NextSessionProvider>
            <div className="container h-auto max-w-screen-2xl flex flex-col items-center justify-center overflow-hidden">
              {children}
            </div>
        </NextSessionProvider>
      </body>
    </html>
  );
}
