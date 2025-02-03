'use client';

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/(frontend)/app/components/shared/Loading/Loading";

export default async function Dashboard() {

  // const { data: session, status } = useSession(); // UseSession para obter a sessão do cliente
  const session = await getServerSession();
  // const router = useRouter();
  const userName = session?.user.name;
  const userEmail = session?.user.email;
  const userImage = session?.user.image;

  // Se ainda estiver carregando a sessão
  // if (status === "loading") {
  //   return <Loading />; // Exibe o componente de loading até a sessão ser carregada
  // }
  if (!session) {
    redirect('/sign-in');
  }

  // Se não houver sessão, redireciona para a página de login
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/sign-in"); // Redireciona para login se não estiver autenticado
  //     return; // Sai do useEffect para evitar mais execuções
  //   }

  //   // Lógica de redirecionamento com base no setor do usuário
  //   const { setor } = session.user;

  //   if (setor === "admin") {
  //     router.push("/dashboard/admin");
  //   } else if (setor === "professor") {
  //     router.push("/dashboard/professor");
  //   } else if (setor === "designer") {
  //     router.push("/dashboard/designer");
  //   } else {
  //     router.push("/dashboard"); // Para usuários sem setor definido, redireciona para o painel padrão
  //   }
  // }, [session, status, router]); // Dependências incluem session, status e router

  // Renderiza as informações do usuário
  return (
    <div>
      <header>
        <div className="flex flex-row gap-4">
          <Image
            title="Imagem do usuário"
            alt="Imagem do usuário autenticado do Google"
            src={userImage ?? "/default-avatar.jpg"} // Usa imagem padrão caso não tenha imagem
            width={50}
            height={50}
          />
          <div className="Flex flex-col gap-2">
            <p>{userName}</p>
            <p>{userEmail}</p>
          </div>
        </div>
      </header>

      <main>
        {/* Aqui pode vir o conteúdo do dashboard */}
      </main>
    </div>
  );
}

