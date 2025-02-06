import type { Metadata } from "next";
import React from "react";
import "../../styles/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/apadges/SideBar/SideBar";


export const metadata: Metadata = {
  title: "Apadges", 
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
        <body className="bg-white overflow-hidden relative">
          <div className="container h-auto max-w-screen-2xl flex flex-col items-center justify-center overflow-hidden">
            {children}
          </div>
        </body>
    </html>
  );
}
