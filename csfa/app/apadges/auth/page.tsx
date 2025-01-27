'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function PageAuth() {

  const { user } = useUser();

  return (
    
    <div>

      {user ? (
        <div>
          <span>Bem-vindo, {user.name}</span>

          <a href="/api/auth/logout">Logout {user.name}</a>
        </div>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}

    </div>
  );
}