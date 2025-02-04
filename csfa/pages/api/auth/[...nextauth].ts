import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth/nextAuth";

export default NextAuth(authOptions);
