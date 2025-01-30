"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Loading from "../../components/shared/Loading/Loading";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("Session status:", status);
    console.log("Session data:", session);

    if (status === "authenticated" && session?.user?.setor) {
      router.push(`/sistema/dashboard/${session.user.setor}`);
    } 
    else if (status === "authenticated" && !session?.user?.setor) {
      router.push("/sistema/solicite-ao-administrador");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-dvw h-dvh bg-white overflow-hidden">
      {/* Conteúdo do login */}
      <div className="w-full max-w-[400px] p-12 bg-slate-50/10 gap-4 border border-slate-400/20 shadow-sm-light rounded-lg flex flex-col items-center justify-center">
        {/* Logo */}
        <figure className="w-full flex flex-col items-center justify-center gap-2">
          <Image src="/logo.webp" alt="Logo CSFA" width={128} height={128} />
          <figcaption className="text-sm text-center text-slate-500 w-full">
            CSFA - Sistema Apadges
          </figcaption>
        </figure>

        {/* Área de login */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-slate-600">
            Fazer Login no Sistema
          </h1>

          <button
            onClick={() => signIn("google")}
            className="bg-white text-slate-800 px-4 py-2 flex items-center gap-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          >
            <Icon icon="flat-color-icons:google" width={24} height={24} />
            Login com Google
          </button>
        </div>
      </div>
    </div>
  );
}
