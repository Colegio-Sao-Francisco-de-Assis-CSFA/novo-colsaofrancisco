import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  console.log("Middleware: Verificando usuário...");
  console.log("Token recebido:", token);

  // Permitir acesso livre à página de login e API
  if (pathname.startsWith("/sistema/login") || pathname.startsWith("/api/auth")) {
    console.log("Permissão concedida para login ou API.");
    return NextResponse.next();
  }

  // Se o usuário não estiver autenticado e não estiver tentando acessar o login
  if (!token) {
    console.log("Usuário não autenticado. Redirecionando para login...");
    // Verifica se o usuário já está tentando acessar a página de login, para evitar redirecionamento infinito
    if (pathname !== "/sistema/login") {
      return NextResponse.redirect(new URL("/sistema/login", req.url));
    }
  }

  // Se não tem setor cadastrado e não estiver tentando acessar o dashboard
  if (token && !token.setor) {
    console.log("Usuário sem setor. Redirecionando...");
    // Verifica se o usuário está tentando acessar a página de dashboard, para evitar redirecionamento infinito
    if (!pathname.startsWith("/sistema/dashboard")) {
      return NextResponse.redirect(new URL("/sistema/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

// Aplica o middleware apenas às rotas protegidas do sistema
export const config = {
  matcher: ["/sistema/:path*"],
};
