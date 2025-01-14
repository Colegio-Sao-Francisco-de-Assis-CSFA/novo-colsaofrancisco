'use client';
import React, { useState } from 'react';
import { Dropdown } from "flowbite-react";
import { Icon } from '@iconify/react';
import Link from "next/link";



export default function Component() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRestrict = [
    { name: 'Email Institucional', icon: '', href:'#'},
    { name: 'Classroom', icon: '', href:'#'  },
    { name: 'SAS Educação', icon: '', href:'#' },
    { name: 'Activesoft Siga', icon: '', href:'#' },
    { name: 'Coorporativo', icon: '', href:'#' },
    { name: 'Apadges', icon: '', href:'#' }
  ];

  const navMenu = [
    { name: 'Inicio', href: '/'},
    { name: 'Segmentos', href: '/courses'},
    { name: 'Sobre nós', href: '/about'},
    { name: 'Diferenciais', href: '/features'},
    { name: 'Contato', href: '/contact'}
  ];

  return (
    <nav className="bg-white border border-slate-600/30 rounded-full shadow-md">

      <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto p-2 space-x-4">
        
        <a href="#" className="flex items-center space-x-3 ml-4 rtl:space-x-reverse">
          <img src="/logo.webp" className="h-14" alt="Logo" />
        </a>

      

        <div className='w-full space-x-4 px-4 flex justify-end items-center md:justify-between'>

          <div className="hidden  w-full md:flex items-center justify-center" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              
              {navMenu.map((item)=>(
                  <li>
                    <Link href={item.href} className="block py-2 px-3 text-white bg-blue-700 font-medium md:bg-transparent md:text-slate-400 md:p-0 hover:text-blue-600" aria-current="page">
                       {item.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          <Dropdown className="mt-2.5 flex items-center space-x-1 md:space-x-0" label="" dismissOnClick={false} renderTrigger={() => 
            <span className='bg-blue-600 min-w-36 rounded-md flex flex-row justify-center items-center gap-2 text-white p-2 font-medium hover:to-blue-800'>
                <Icon icon="mdi-lock" />
                Área restrita
            </span>}>

            {navRestrict.map((btn) => (
                <Dropdown.Item as={Link} href={btn.href}>
                    {btn.icon}
                    {btn.name}
                </Dropdown.Item>
            ))}
          </Dropdown>

          
        </div>

        

      </div>

     
    
    </nav>
  );


   
  
}
