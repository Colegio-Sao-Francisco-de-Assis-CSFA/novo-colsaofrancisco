import React from 'react';
import { Icon } from '@iconify/react';


export default function About() {
  return (
    <>
    {/* Content */}
      <div className="w-full h-auto bg-blue-700 mx-auto flex flex-col md:items-center gap-12 xl:flex-row">
        
        {/* Wrap-Left about colegio são francisco */}
        <div className="w-full flex flex-col justify-center gap-6 py-6 px-4 xl:w-[50%]">

          {/* Title */}
          <h1 className="relative text-start mb-4 font-extrabold tracking-tight text-5xl leading-none text-white md:text-6xl">
            Educação com Propósito: Valores que Transformam
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg font-normal sm:text-center text-white/90 lg:text-xl lg:text-start">
            No Colégio São Francisco de Assis, nossa missão é unir tradição e 
            inovação para oferecer uma educação de excelência, fundamentada nos 
            valores cristãos e franciscanos. Formamos jovens líderes comprometidos
            com a transformação da sociedade, preparados para enfrentar desafios
            com ética, empatia e sabedoria. Aqui, cada aluno é inspirado a 
            alcançar seu potencial máximo, cultivando conhecimento, 
            espiritualidade e responsabilidade social.
          </p>

          {/* Wrap-Button action link */}
          <div className="flex flex-row justify-center items-center gap-4 lg:justify-start">
            
            {/* btn - contact */}
            <a
              href="#"
              className="transition-all border inline-flex justify-center items-center py-3 px-5 gap-4 text-lg font-medium text-center text-blue-600 rounded-lg bg-white w-56 hover:text-white hover:bg-blue-700 hover:border hover:border-white"
            >
              <Icon className="text-2xl" icon="ic:outline-email" />
              Entre em contato
            </a>

            {/* btn - see more */}
            <a
              href="#"
              className="transition-all border inline-flex justify-center items-center py-3 px-5 gap-4 text-lg font-medium text-center text-blue-600 rounded-lg bg-white w-56 hover:text-white hover:bg-blue-700 hover:border hover:border-white"
            >
              <Icon className="text-2xl" icon="material-symbols:account-balance-outline-rounded" />
              Saiba mais
            </a>
          </div>
        </div>

        {/* Wrap-Right video colegio são francisco */}
        <div className='w-full flex items-center justify-center p-6 md:w-[70%] xl:w-[50%]'>
          <video className="aspect-video w-full border border-gray-200 rounded-lg" muted controls autoPlay>
              <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};
