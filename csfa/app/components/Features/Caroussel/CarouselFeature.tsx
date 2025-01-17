'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [activeItem, setActiveItem] = useState(0);

  interface ItemProps {
    id: number;
    bg: string;
    src: string;
    title: string;
    description: string;
  }

  const items: ItemProps[] = [
    {
      id: 1,
      bg: 'bg-orange-500',
      src: '/images/courses/infantil.webp',
      title: 'Ensino infantil',
      description: 'Desenvolvendo habilidades essenciais e promovendo o aprendizado por meio de atividades lúdicas e interativas.',
    },
    {
      id: 2,
      bg: 'bg-green-500',
      src: '/images/courses/iniciais.webp',
      title: 'Ensino iniciais',
      description: 'Foco na alfabetização e construção de uma base sólida em leitura, escrita e matemática.',
    },
    {
      id: 3,
      bg: 'bg-purple-500',
      src: '/images/courses/finais.webp',
      title: 'Ensino finais',
      description: 'Preparação para os desafios futuros com ênfase em pensamento crítico e resolução de problemas.',
    },
    {
      id: 4,
      bg: 'bg-red-500',
      src: '/images/courses/medio.webp',
      title: 'Ensino médio',
      description: 'Formação integral para ingresso no ensino superior e desenvolvimento de competências profissionais',
    },
  ];

  const nextSlide = () => {
    setActiveItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-w-[300px] max-w-[1000px] h-full">
      <div className="relative w-full h-full overflow-hidden rounded-md md:h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full flex flex-col duration-700 ease-in-out transform lg:flex-row ${item.bg} ${
              activeItem === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <aside className={`w-full h-full absolute flex items-center justify-center bg-blue-700/50 
                              lg:relative
                              lg:bg-transparent
                              lg:w-[50%] 
                              lg:h-full text-white`
                              }>

                <div className='w-[80%] h-full flex flex-col p-2 items-start justify-center space-y-4'>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className='text-xl font-normal'>{item.description}</p>
                </div>
            </aside>

            <div className="w-full h-full 
                            lg:w-[50%] 
                            lg:h-full">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-white/10"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ">
          <ChevronLeft className="w-8 h-8 text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-white/10"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:outline-none">
          <ChevronRight className="w-8 h-8 text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
