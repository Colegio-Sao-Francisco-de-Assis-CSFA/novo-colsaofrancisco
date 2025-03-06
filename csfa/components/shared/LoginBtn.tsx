import { Icon } from '@iconify/react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

export default function Component() {
  return (
    <Button onClick={() => signIn('google', {callbackUrl: '/dashboard'})} className="bg-white text-lg font-normal text-slate-700 border transition-all border-slate-600/30 hover:border-blue-400 hover:bg-white">
      <Icon icon="logos:google-icon" className="mr-2 h-4 w-4" />
      Login com Google
    </Button>
  );
}
