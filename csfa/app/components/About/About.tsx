import React from 'react';
import { Icon } from '@iconify/react';


export default function About() {
  return (
    <>
    {/* Content */}
      <div className="w-full h-auto p-12 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 mx-auto flex flex-col md:items-center gap-12 xl:flex-row">
        
        {/* Wrap-Left about colegio são francisco */}
        <div className="w-full flex flex-col justify-center gap-4
                        sm:px-4 
                        sm:gap-6 py-6
                        xl:w-[50%]">

          {/* Title */}
          <h1 className="relative w-[85%] mx-auto mb-4 font-extrabold tracking-tight leading-none text-white
                        text-3xl 
                        sm:text-start
                        md:w-full
                        md:text-5xl">
            Educação com Propósito: Valores que Transformam
          </h1>

          {/* Description */}
          <p className="mb-4 min-w-56 text-md font-normal text-white/90 text-center 
                        sm:w-auto
                        lg:text-xl 
                        lg:text-start">
            No Colégio São Francisco de Assis, nossa missão é unir tradição e 
            inovação para oferecer uma educação de excelência, fundamentada nos 
            valores cristãos e franciscanos. Formamos jovens líderes comprometidos
            com a transformação da sociedade, preparados para enfrentar desafios
            com ética, empatia e sabedoria. Aqui, cada aluno é inspirado a 
            alcançar seu potencial máximo, cultivando conhecimento, 
            espiritualidade e responsabilidade social.
          </p>

          {/* Wrap-Button action link */}
          <div className="flex flex-col justify-center items-center gap-2 
                          sm:gap-4 
                          sm:flex-row
                          lg:justify-start">
            
            {/* btn - contact */}
            <a
              href="#"
              className="transition-all border inline-flex justify-center items-center p-2 text-[1rem] w-60
                        hover:text-white hover:bg-blue-700 hover:border hover:border-white 
                        sm:w-full py-3 px-5 gap-4 text-lg font-medium text-center text-blue-600 rounded-lg bg-white  
                        md:w-56"
            >
              <Icon className="text-2xl" icon="ic:outline-email" />
              Entre em contato
            </a>

            {/* btn - see more */}
            <a
              href="#"
              className="transition-all border inline-flex justify-center items-center p-2 text-[1rem] w-60
                        hover:text-white hover:bg-blue-700 hover:border hover:border-white 
                        sm:w-full py-3 px-5 gap-4 text-lg font-medium text-center text-blue-600 rounded-lg bg-white  
                        md:w-56"
            >
              <Icon className="text-2xl" icon="material-symbols:account-balance-outline-rounded" />
              Saiba mais
            </a>
          </div>
        </div>

        {/* Wrap-Right video colegio são francisco */}
        <div className='w-full flex items-center justify-center 
                        md:w-[70%]
                        md|:p-6
                        xl:w-[50%]'>
          <video className="aspect-video w-full min-w-[300px] border border-gray-200 rounded-lg" muted controls autoPlay>
              <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};
