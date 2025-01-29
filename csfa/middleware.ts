import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Permitir acesso livre a login e API
  if (pathname.startsWith('/sistema/login') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Se o usuário não estiver autenticado, redireciona para login
  if (!token?.email) {
    return NextResponse.redirect(new URL('/sistema/login', req.url));
  }

  // Se o usuário não está cadastrado, redireciona para a página de solicitação
  if (!token.setor) {
    return NextResponse.redirect(new URL('/sistema/solicite-ao-administrador', req.url));
  }

  // Redirecionamento com base no setor
  const setorRoutes: Record<string, string> = {
    'Informática': '/sistema/dashboard/admin',
    'Designer': '/sistema/dashboard/designer',
    'Professor': '/sistema/dashboard/professor',
  };

  if (pathname.startsWith('/sistema/dashboard')) {
    return NextResponse.redirect(new URL(setorRoutes[token.setor] || '/sistema/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sistema/:path*'],
};
