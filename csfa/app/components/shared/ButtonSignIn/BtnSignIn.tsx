import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";



export default function BtnSignIn(){


    return(
        <button
            onClick={() => signIn('google', {callbackUrl: '/dashboard'})}
            className="bg-white text-slate-800 px-4 py-2 flex items-center gap-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
          >
            <Icon icon="flat-color-icons:google" width={24} height={24} />
            Login com Google
         </button>
    
    );
}