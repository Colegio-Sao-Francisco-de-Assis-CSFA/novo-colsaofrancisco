import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-dvw h-auto flex overflow-hidden items-center justify-center p-6 bg-slate-800 md:max-h-96' >
        <div className="flex flex-col items-center w-full h-fit text-white">
            {/* Footer Content */}
            <div className="flex flex-col items-center md:flex-row gap-20">
                {/* Left Section */}
                <div className="flex flex-col gap-6 justify-center w-[35%]">
                  
                  <div className="flex items-center justify-center w-full gap-4">
                      <img className="w-32" alt="Logo Preview" src="/logo.webp" />
                  </div>

                  <div className="flex w-full gap-4 items-center justify-center">
                    {/* Instagram */}
                      <a href="#" className="text-white hover:text-pink-500">
                          <Icon className="text-3xl" icon={'ri:instagram-fill'} />
                      </a>
                    {/* Facebook */}
                      <a href="#" className="text-white hover:text-blue-500">
                          <Icon className="text-3xl"  icon={'mingcute:facebook-fill'} />
                      </a>
                    {/* Youtube */}
                      <a href="#" className="text-white hover:text-red-600">
                         <Icon className="text-3xl"  icon={'simple-icons:youtubeshorts'} />
                      </a>
                    {/* Linkedin */}
                      <a href="#" className="text-white hover:text-blue-700">
                          <Icon className="text-3xl"  icon={'pajamas:linkedin'} />
                      </a>

                  </div>

                </div>

                {/* Center Section */}
                <div className="flex flex-col w-full justify-center items-center gap-20 text-nowrap">
                    <div className="flex flex-col items-center p-6 md:flex-row gap-16 ">
                        {/* Explore Section */}
                        <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-blue-400 pb-3">Explore</div>
                        <a href="#xxx" className="hover:underline">Features</a>
                        <a href="#xxx" className="hover:underline">Docs</a>
                        <a href="#xxx" className="hover:underline">Pricing</a>
                        <a href="#xxx" className="hover:underline">Security</a>
                        </div>

                        {/* Company Section */}
                        <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-blue-400 pb-3">Company</div>
                        <a href="#xxx" className="hover:underline">About Us</a>
                        <a href="#xxx" className="hover:underline">Contact</a>
                        <a href="#xxx" className="hover:underline">Support</a>
                        <a href="#xxx" className="hover:underline">News</a>
                        </div>

                        {/* Legal Section */}
                        <div className="flex flex-col gap-2">
                        <div className="font-bold uppercase text-blue-400 pb-3">Legal</div>
                        <a href="#xxx" className="hover:underline">Imprint</a>
                        <a href="#xxx" className="hover:underline">Privacy Policy</a>
                        <a href="#xxx" className="hover:underline">Terms of Use</a>
                        </div>
                    </div>
                </div>
                
                {/* Right Section */}
                <div className='w-full'>
                    <p className='text-center'>
                      © 2025 <br /> Colégio São Francisco De Assis <br /> All rights reserved.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-500 my-8"></div>

            {/* Footer Reference */}
            <div className="text-center w-full flex flex-col gap-4">
              <p className="text-sm text-slate-500">
              
              <a 
                  href="http://devneto.com.br" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white transition-all"
                >
                  Design e Programação - Desenvolvido por {" "}
                
                  Cloves Neto
                </a>
              </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

