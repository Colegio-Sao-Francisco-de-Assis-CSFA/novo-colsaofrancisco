'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      // Redireciona o usuário com base no setor
      switch (session.user?.setor) {
        case 'admin':
          router.push('/sistema/dashboard/admin');
          break;
        case 'designer':
          router.push('/sistema/dashboard/designer');
          break;
        case 'professor':
          router.push('/sistema/dashboard/professor');
          break;
        default:
          router.push('/sistema/dashboard');
      }
    }
  }, [status, session, router]);

  // Aguardar o carregamento de status
  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login no Sistema</h1>
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Login com Google
      </button>
    </div>
  );
}
