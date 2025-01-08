'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel () {

  const [activeItem, setActiveItem] = useState(0);

  const images = [
    "/images/herobanner/banner1.webp",
    "/images/herobanner/banner2.webp",
    "/images/herobanner/banner3.webp",
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
    <div className="relative w-full h-full bg-orange-300">
      <div className="relative w-full h-56 overflow-hidden md:h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full duration-700 ease-in-out transform bg-purple-500 ${
              activeItem === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full"
            />
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

