import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { nextUrl } = req;
    const isAuth = !!req.nextauth.token;

    if (nextUrl.pathname === "/sign-in" && isAuth) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/sign-in", "/dashboard"],
};

