import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

export default async function middleware(req) {
  const session = await getSession(req, new Response());
  const { pathname } = req.nextUrl;

  if (!session?.user && pathname.startsWith('/dashboard')) {
    // Se não estiver logado, redireciona para o login
    return NextResponse.redirect(new URL('/api/auth/login', req.url));
  }

  // Verifica se o usuário tem permissão para acessar o dashboard
  if (pathname.startsWith('/dashboard/administrativo') && session.user.setor !== 'administrativo') {
    return NextResponse.redirect(new URL('/403', req.url)); // Acesso negado
  }

  if (pathname.startsWith('/dashboard/designer') && session.user.setor !== 'designer') {
    return NextResponse.redirect(new URL('/403', req.url)); // Acesso negado
  }

  if (pathname.startsWith('/dashboard/professor') && session.user.setor !== 'professor') {
    return NextResponse.redirect(new URL('/403', req.url)); // Acesso negado
  }

  return NextResponse.next();
}
