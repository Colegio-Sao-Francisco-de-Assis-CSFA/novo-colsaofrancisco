import type { Metadata } from "next";
import React from "react";
import "@/app/styles/globals.css";
import Navigation from "@/components/views/dashboard/Navigation";
import SessionProvider from "@/components/views/SessionProvider/SessionProvider";

export const metadata: Metadata = {
  title: "CSFA | Dashboard",
  description:
            `Sistema administrativo integrado ao siga Apadges`,
};

export default function RootLayout({ children }: Readonly <{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <head>
        <link rel="shortcut icon" href="/logo.webp" type="image/webp" />
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </head>
        <body className="bg-white overflow-hidden overflow-y-scroll relative">
            <SessionProvider>
                <Navigation />
                <div className="container h-auto max-w-screen-2xl flex flex-col items-center justify-center overflow-hidden">
                  {children}
                </div>'
            </SessionProvider>
        </body>
    </html>
  );
}
