import React from 'react';
import { Icon } from '@iconify/react';


export default function About() {
  return (
    <>
    {/* Content */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Wrap-Left about colegio são francisco */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            We invest in the world's potential
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>

          {/* Wrap-Button action link */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            
            {/* btn - contact */}
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-blue-600 rounded-lg bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              <Icon className="text-2xl" icon="ic:outline-email" />
              Entre em contato
            </a>

            {/* btn - see more */}
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-blue-600 rounded-lg bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              <Icon className="text-2xl" icon="material-symbols:account-balance-outline-rounded" />
              Saiba mais
            </a>
          </div>
        </div>

        {/* Wrap-Right video colegio são francisco */}
        <div className='aspect-video'>
          
        </div>
      </div>
    </>
  );
};
