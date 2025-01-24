
'use client';

import { Card } from "flowbite-react";
import { Icon } from '@iconify/react';



export default function Cards() {

const courses = [
    
    {
        src:'/images/courses/infantil.webp', 
        alt:'ensino-infantil', 
        href:'#', 
        title:'Ensino Infantil', 
        description:'Nossos alunos terminam esta etapa preparados para o ingresso no Ensino Fundamental.'
    },
    {
        src:'/images/courses/iniciais.webp', 
        alt:'anos-iniciais', 
        href:'#', 
        title:'Anos Finais', 
        description:'Nossos alunos terminam esta etapa preparados para o ingresso no Ensino Fundamental.' 
    },
    {
        src:'/images/courses/finais.webp', 
        alt:'anos-finais', 
        href:'#', 
        title:'Anos Finais', 
        description:'Nossos alunos terminam esta etapa preparados para o ingresso no Ensino Fundamental.'
    },
    {
        src:'/images/courses/medio.webp',
        alt:'ensino-médio', 
        href:'#',
        title:'Ensino Médio', 
        description:'Nossos alunos terminam esta etapa preparados para o ingresso no Ensino Fundamental.'
    },
] 
  return (

    <>
        {courses.map((item, index) => (
                <Card key={index} className= "relative bg-blue-600 w-64 h-64 flex items-end justify-start overflow-hidden md:w-[65%] max-w-[500px] xl:w-64 xl:h-64">
                    <img src={item.src} alt={item.alt} className="absolute left-0 top-0 w-full h-full object-cover 
                                                                md:w-[50%]
                                                                xl:w-full
                                                                "/>
                    
                    <div className="absolute flex items-center justify-center z-10 top-2 right-2 rounded-full w-12 h-12 bg-white border">
                        <Icon className="rotate-90 text-2xl text-blue-600" icon="material-symbols:arrow-insert-rounded" />
                    </div>

                    <div className="absolute left-0 bottom-0 w-full flex-co gap-2 p-2.5 text-white bg-gradient-to-t from-blue-900 via-blue-700/80 to-blue-800/rounded-b-lg 
                                    md:w-[50%] 
                                    md:h-full 
                                    md:flex-col
                                    md:left-[50%] 
                                    md:rounded-none 
                                    md:justify-center md:flex 
                                    md:p-8 
                                    xl:p-2.5
                                    xl:object-cover
                                    xl:absolute 
                                    xl:left-0 
                                    xl:bottom-0 
                                    xl:w-full 
                                    xl:flex-col 
                                    xl:h-auto"
                                    >
                        <h2 className="font-bold text-xl">{item.title}</h2>
                        <p className="font-light">{item.description}</p>
                    </div>
                </Card>
            ))}
        
    </>
    
  );
}
