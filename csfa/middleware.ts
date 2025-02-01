import { NextRequest, NextResponse, type MiddlewareConfig } from "next/server";

const publicRoutes = [
  { rpath : '/sign-in', whenAuthenticated : 'redirect' },
  { rpath : '/about', whenAuthenticated : 'open' },
] as const;

const REDIRECT_WHEN_NOT_AURHENTICATE_ROUTE = '/sig-in';


export function middleware(request: NextRequest){
  
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.rpath === path);
  const authToken = request.cookies.get('token');

  // Se o usuario acessa 'não autenticado = (!authToken)' uma 'rota publica = (publicRoute)' então:
  if(!authToken && publicRoute){
    return NextResponse.next();
  }

  // Se o usuario acessa 'não autenticado = (!authToken)' uma 'rota privada = (!publicRoute)' então:
  if(!authToken && !publicRoute){

    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AURHENTICATE_ROUTE;

    return NextResponse.redirect( redirectUrl );

  }

  // Se o usuario authenticado tenta acessar uma rota publica que não deveria então:
  // EX: se ele já esta autenticado não precisa acessar novamente pagina de sign-in.
  if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
  
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = '/dashboard';

    return NextResponse.redirect( redirectUrl );

  }

  if(authToken && !publicRoute){
    
  }


  
  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
      /*
      * Match all request paths except for the ones starting with:
      * - api (API routes)
      * - _next/static (static files)
      * - _next/image (image optimization files)
      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
      */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}


// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const { pathname } = req.nextUrl;

//   console.log("Middleware: Verificando usuário...");
//   console.log("Token recebido:", token);

//   // Permitir acesso livre à página de login e API
//   if (pathname.startsWith("/sistema/login") || pathname.startsWith("/api/auth")) {
//     console.log("Permissão concedida para login ou API.");
//     return NextResponse.next();
//   }

//   // Se o usuário não estiver autenticado e não estiver tentando acessar o login
//   if (!token) {
//     console.log("Usuário não autenticado. Redirecionando para login...");
//     // Verifica se o usuário já está tentando acessar a página de login, para evitar redirecionamento infinito
//     if (pathname !== "/sistema/login") {
//       return NextResponse.redirect(new URL("/sistema/login", req.url));
//     }
//   }

//   // Se não tem setor cadastrado e não estiver tentando acessar o dashboard
//   if (token && !token.setor) {
//     console.log("Usuário sem setor. Redirecionando...");
//     // Verifica se o usuário está tentando acessar a página de dashboard, para evitar redirecionamento infinito
//     if (!pathname.startsWith("/sistema/dashboard")) {
//       return NextResponse.redirect(new URL("/sistema/dashboard", req.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Aplica o middleware apenas às rotas protegidas do sistema
// export const config = {
//   matcher: ["/sistema/:path*"],
// };
