'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      const setor = (session?.user as { setor?: string })?.setor;

      if (!setor) {
        router.push('/sistema/solicite-ao-administrador');
      } else {
        const setorRoutes: Record<string, string> = {
          'Informática': '/sistema/dashboard/admin',
          'Designer': '/sistema/dashboard/designer',
          'Professor': '/sistema/dashboard/professor',
        };

        router.push(setorRoutes[setor] || '/sistema/dashboard');
      }
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div>
        <img title="image-logo" src="/logo.webp" className="w-11" alt="Logo" />
      </div>

      <p className="text-lg font-semibold">CSFA - Sistema Apadges</p>

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Fazer Login no Sistema</h1>

        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login com Google
        </button>
      </div>
    </div>
  );
}
