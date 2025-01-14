'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [activeItem, setActiveItem] = useState(0);

  interface ItemProps {
    id: number;
    src: string;
    title: string;
    description: string;
  }

  const items: ItemProps[] = [
    {
      id: 1,
      src: '/images/courses/infantil.webp',
      title: 'Ensino infantil',
      description: 'Desenvolvendo habilidades essenciais e promovendo o aprendizado por meio de atividades lúdicas e interativas.',
    },
    {
      id: 2,
      src: '/images/courses/iniciais.webp',
      title: 'Ensino iniciais',
      description: 'Foco na alfabetização e construção de uma base sólida em leitura, escrita e matemática.',
    },
    {
      id: 3,
      src: '/images/courses/finais.webp',
      title: 'Ensino finais',
      description: 'Preparação para os desafios futuros com ênfase em pensamento crítico e resolução de problemas.',
    },
    {
      id: 4,
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
    <div className="relative w-full max-w-[1000px] h-full bg-orange-300">
      <div className="relative w-full h-full overflow-hidden md:h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full flex duration-700 ease-in-out transform bg-purple-500 ${
              activeItem === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <aside className="w-[50%] h-full flex items-center justify-center text-white">
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </aside>
            <div className="w-[50%] h-full">
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
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronLeft className="w-4 h-4 text-white dark:text-gray-800" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronRight className="w-4 h-4 text-white dark:text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
