'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel () {

  const [activeItem, setActiveItem] = useState(0);

  // Definindo as imagens para diferentes tamanhos de tela
  const images = [
    {
      sm: "/images/courses/finais.webp",
      md: "/images/courses/finais.webp",
      lg: "/images/herobanner/banner1.webp",
    },
    {
      sm: "/images/courses/iniciais.webp",
      md: "/images/courses/iniciais.webp",
      lg: "/images/herobanner/banner2.webp",
    },
    {
      sm: "/images/courses/medio.webp",
      md: "/images/courses/medio.webp",
      lg: "/images/herobanner/banner3.webp",
    },
  ];

  const nextSlide = () => {
    setActiveItem((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveItem((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative full h-full lg:h-[80dvh]">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((imageSet, index) => (
          <div
            key={index}
            className={`absolute w-full h-full duration-700 ease-in-out transform ${activeItem === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <picture>
              {/* Imagem para telas pequenas */}
              <source
                media="(max-width: 580px)"
                srcSet={imageSet.sm}
                className="w-full h-full object-cover"
              />
              {/* Imagem para telas médias */}
              <source
                media="(max-width: 960px)"
                srcSet={imageSet.md}
                className="w-full h-full object-cover"
              />
              {/* Imagem para telas grandes */}
              <img 
                src={imageSet.lg} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronLeft className="w-4 h-4 text-white dark:text-gray-800" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronRight className="w-4 h-4 text-white dark:text-gray-800" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
