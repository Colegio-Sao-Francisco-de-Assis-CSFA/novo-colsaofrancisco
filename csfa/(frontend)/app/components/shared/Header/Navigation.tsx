'use client';
import React, { useState, useEffect } from 'react';
import { Dropdown } from "flowbite-react";
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navRestrict = [
    { name: 'Email Aluno', icon: '', href:'#', bg: 'bg-orange-500'},
    { name: 'Classroom', icon: '', href:'#', bg: 'bg-green-500' },
    { name: 'SAS Educação', icon: '', href:'#', bg: 'bg-red-500' },
    { name: 'Diário Eletrônico', icon: '', href:'#', bg: 'bg-purple-500' },
    { name: 'Email Coorporativo', icon: '', href:'#', bg: 'bg-yellow-500' },
    { name: 'Apadges', icon: '', href:'/sign-in', bg: 'bg-blue-500' }
  ];

  const navMenu = [
    { name: 'Inicio', href: '/'},
    { name: 'Segmentos', href: '/courses'},
    { name: 'Sobre nós', href: '/about'},
    { name: 'Diferenciais', href: '/features'},
    { name: 'Contato', href: '/contact'}
  ];

  // Controla o overflow do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsTransitioning(true);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border border-slate-600/30 rounded-full shadow-md">
        <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto p-2 space-x-4">
          <a href="#" className="flex items-center space-x-3 ml-4 rtl:space-x-reverse">
            <img src="/logo.webp" className="w-16" alt="Logo" />
          </a>

          <div className='w-full space-x-4 px-4 flex justify-end items-center lg:justify-between'>
            <div className="hidden w-full lg:flex items-center justify-center" id="navbar-user">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                {navMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block py-2 px-3 text-white bg-blue-700 font-medium md:bg-transparent md:text-slate-400 md:p-0 hover:text-blue-600" aria-current="page">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Dropdown className="mt-2.5 hidden 
                                lg:flex items-center space-x-1 
                                lg:space-x-0" 
                                label="" 
                                dismissOnClick={false} 
                                renderTrigger={() => 
              <span className='hidden bg-blue-600 min-w-36 rounded-md lg:flex flex-row justify-center items-center gap-2 text-white p-2 font-medium hover:to-blue-800'>
                <Icon icon="mdi-lock" />
                Área restrita
              </span>}>

                  {navRestrict.map((btn, index) => (
                    <Dropdown.Item key={index} as={Link} href={btn.href}>
                      {btn.icon}
                      {btn.name}
                    </Dropdown.Item>
                  ))}
            </Dropdown>

            {/* Botão Hamburguer */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Icon 
                icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} 
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`fixed top-0 right-0 h-full w-full lg:hidden z-50 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={toggleMenu}
        />
        
        {/* Menu Sliding Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleMenu} className="p-2 text-gray-500 hover:text-gray-800">
                <Icon icon="mdi:close" className="text-2xl" />
                <span className="hidden">button close</span>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4">
              <ul className="space-y-4">
                {navMenu.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Área Restrita no Menu Mobile */}
              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Área Restrita</h3>
                <ul className="space-y-3">
                  {navRestrict.map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href}
                        className={`block py-2 px-4 rounded-md text-white ${item.bg} hover:opacity-90 transition-opacity`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}