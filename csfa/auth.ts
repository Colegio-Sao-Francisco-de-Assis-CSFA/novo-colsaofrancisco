
  import NextAuth  from "next-auth"
  import Google from 'next-auth/providers/google';
  
  // You'll need to import and pass this
  // to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
  export const {handlers, signIn, signOut, auth} = NextAuth({

    providers: [Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GLOOGLE_CLIENT_SECRET!
    })],

  }) 
