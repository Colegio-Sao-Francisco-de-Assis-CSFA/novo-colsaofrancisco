'use client';

import React from 'react';
import { Icon } from '@iconify/react';


export default function SignIn(){
    return(
        <section className="w-dvw h-dvh bg-white flex justify-center items-center">
            <form className="w-80 h-96 m-auto p-4 flex flex-col gap-8 justify-center items-center"  action="/dashboard">
                
                <div className="text-blue-800 text-4xl mb-10 w-44 h-44">
                    <img src="/logo.webp" alt="logo col sao frnacisco" />
                </div>

                <div className="flex flex-col gap-6 text-center">

                    <h2 className="text-gray-800 text-3xl font-semibold">Bem vindo!</h2>

                    <button type="submit" className="bg-white border border-gray-400/30 text-gray-700 text-lg p-4 flex items-center justify-center gap-4 rounded-full transition-all hover:border-blue-500">
                        <Icon fontSize={"25"} icon={"flat-color-icons:google"} />
                        Continue com Google
                    </button>

                </div>

                <a className="text-sm font-light text-gray-400 transition-all hover:text-gray-700 hover:underline " href="/">
                    
                    voltar para a página inicial
                </a>
                

            </form>
        </section>  
    )
}