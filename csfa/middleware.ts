import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Permitir acesso público às rotas de login e API
  if (pathname.startsWith('/sistema/login') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Bloquear acesso a rotas protegidas sem um token
  if (!token) {
    const loginUrl = new URL('/sistema/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Adicione lógica para redirecionar com base no setor, se necessário
  if (pathname.startsWith('/sistema/dashboard')) {
    const setor = token?.setor;

    if (setor === 'admin') {
      return NextResponse.rewrite(new URL('/sistema/dashboard/admin', req.url));
    }
    if (setor === 'designer') {
      return NextResponse.rewrite(
        new URL('/sistema/dashboard/designer', req.url)
      );
    }
    if (setor === 'professor') {
      return NextResponse.rewrite(
        new URL('/sistema/dashboard/professor', req.url)
      );
    }
  }

  // Se a lógica do setor não se aplicar, apenas continue com a resposta padrão
  return NextResponse.next();
}

export const config = {
  matcher: ['/sistema/:path*'], // Aplica o middleware apenas a rotas dentro de `/sistema`
};
