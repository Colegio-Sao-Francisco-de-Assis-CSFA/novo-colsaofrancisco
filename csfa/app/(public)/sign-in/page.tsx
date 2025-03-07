'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter as useNavigation } from 'next/navigation';
import { useRouter } from "next/router";
import Image from 'next/image';
import logo from '@/public/logo.webp';
import LoginBtn from '@/components/shared/LoginBtn';
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect( () => {
    const { error } = router.query;

    if (error === "true") {
      toast.error("Falha no Sign In. Tente novamente.");
    }
  }, [router.query]);



  return (
    <section className='w-dvw h-dvh bg-white'>
      <div className='max-w-md p-6 m-auto flex flex-col gap-6 items-center justify-center '>
        {/* Wrap */}
        <div className='flex flex-col items-center justify-center gap-6'>
          <Image className='w-36 h-32' alt="Logo do app de login CSFA" src={logo} />
          <h2 className='text-slate-600/60 font-medium text-lg text-center'>Bem vindo(a) ao CSFA</h2>
        </div>

        {/* Wrap Bottom */}
        <div className='flex flex-col gap-4 items-center justify-center'>
          <LoginBtn />
          <small className='flex flex-col gap-2 items-center justify-center p-2'>
            <a href="#" className='text-slate-600/60 hover:text-blue-600 transition-colors'>Problemas com o acesso? Contate o administrador</a>
            <a href="/" className='text-slate-600/60 hover:text-blue-600 transition-colors'>Voltar para o site do colégio</a>
          </small>
        </div>
      </div>

      
    </section>
  );
}
