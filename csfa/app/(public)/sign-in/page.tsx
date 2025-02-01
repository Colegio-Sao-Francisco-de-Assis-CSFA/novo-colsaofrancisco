"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Loading from "../../components/shared/Loading/Loading";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.setor) {
        router.replace(`/sistema/dashboard/${session.user.setor}`);
      } else {
        router.replace("/sistema/dashboard");
      }
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
      <div className="w-full max-w-[400px] p-12 bg-slate-50/10 gap-4 border border-slate-400/20 shadow-sm-light rounded-lg flex flex-col items-center justify-center">
        <figure className="w-full flex flex-col items-center justify-center gap-2">
          <Image src="/logo.webp" alt="Logo CSFA" width={128} height={128} />
          <figcaption className="text-sm text-center text-slate-500 w-full">
            CSFA - Sistema Apadges
          </figcaption>
        </figure>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-slate-600">
            Fazer Login no Sistema
          </h1>

          
        </div>
      </div>
    </div>
  );
}
