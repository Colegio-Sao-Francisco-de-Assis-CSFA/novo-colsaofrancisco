
"use client";

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
        <section className=" w-dvw h-dvh flex justify-center space-x-4 gap-4 p-6">
            {courses.map((item) => (
                <Card className="w-72 h-72 relative flex items-end justify-start">
                    <img src={item.src} alt={item.alt} className="absolute left-0 top-0 w-full h-full object-cover"/>
                    
                    <div className="absolute flex items-center justify-center z-10 top-2 right-2 rounded-full w-12 h-12 bg-white">
                        <Icon className="rotate-90 text-2xl" icon="material-symbols:arrow-insert-rounded" />
                    </div>

                    <div className="absolute left-0 bottom-0 w-full flex-col gap-2 p-2 text-white">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="font-normal">{item.description}</p>
                    </div>
                </Card>
            ))}
        </section>
        
    </>
    
  );
}
