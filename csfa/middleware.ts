import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {

      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
      const { pathname } = req.nextUrl;

      // Permitir acesso livre a login e API
      if (pathname.startsWith("/sistema/login") || pathname.startsWith("/api")) {
        return NextResponse.next();
      }

      // Se o usuário não estiver autenticado, redireciona para login
      if (!token?.sub) {
        return NextResponse.redirect(new URL("/sistema/login", req.url));
      }

      // Se não tem setor cadastrado, redireciona para solicitar ao administrador
      if (!token.setor) {
        return NextResponse.redirect(new URL("/sistema/solicite-ao-administrador", req.url));
      }

      // Mapear setores para rotas
      const setorRoutes: Record<string, string> = {
        Admin: "Admin",
        Designer: "Designer",
        Professor: "Professor",
      };

      // Redirecionamento baseado no setor do usuário
      const setorPath = setorRoutes[token.setor] || "solicite-ao-administrador";

      if (pathname.startsWith("/sistema/dashboard")) {
        return NextResponse.redirect(new URL(`/sistema/dashboard/${setorPath}`, req.url));
      }

      return NextResponse.next();
}

// Aplica o middleware apenas às rotas do sistema
export const config = {
     matcher: ["/sistema/:path*"],
};
