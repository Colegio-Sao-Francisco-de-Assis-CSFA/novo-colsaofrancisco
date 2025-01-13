'use client';

import { createContext, useContext, ReactNode, HTMLAttributes } from 'react';
import {carouselItems} from './CarouselItem'; 


const carouselClasses = {
  slideItem: "hidden duration-700 ease-in-out",
  slideImage: "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
  slideContainer: "relative h-56 overflow-hidden rounded-lg md:h-96",
  indicators: {
    wrapper: "absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse",
    button: "w-3 h-3 rounded-full"
  },
  controls: {
    button: "absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
    previous: "start-0",
    next: "end-0",
    buttonWrapper: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",
    icon: "w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
  }
} as const;

// Root Element
interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
function Root({ children, className, ...props }: RootProps) {
  
  interface CarouselContextType {}
  const CarouselContext = createContext<CarouselContextType>({});

  return (
    <CarouselContext.Provider value={{}}>
      <div className={className} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );

}

// Container Element
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
// Class : slideContainer
function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={carouselClasses.slideContainer}>
      {children}
    </div>
  );
}

// Item Element
interface ItemProps {
  src: string;
  id: number;
}
function Item({ src, id }: ItemProps) {
  return (
    <div className={carouselClasses.slideItem} data-carousel-item>
      <img src={src} className={carouselClasses.slideImage} alt={`Slide ${id}`} />
    </div>
  );
}

// Indicators Element
interface IndicatorProps{
  className?: string;
}
function Indicators({ className, ...props }: IndicatorProps) {
  return (
    <div className={carouselClasses.indicators.wrapper} >

      {carouselItems.map((_, index) => (
        <button
          key={index}
          type="button"
          className={carouselClasses.indicators.button}
          aria-current={index === 0}
          aria-label={`Slide ${index + 1}`}
          data-carousel-slide-to={index}
        />
      ))}

    </div>
  );
}

function ButtonLeft() {
  return (
    <button 
      type="button" 
      className={`${carouselClasses.controls.button} ${carouselClasses.controls.previous}`} 
      data-carousel-prev
    >
      <span className={carouselClasses.controls.buttonWrapper}>
        <svg 
          className={carouselClasses.controls.icon} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 6 10"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );
}
function  ButtonRight() {
  return (
    <button 
      type="button" 
      className={`${carouselClasses.controls.button} ${carouselClasses.controls.next}`} 
      data-carousel-next
    >
      <span className={carouselClasses.controls.buttonWrapper}>
        <svg 
          className={carouselClasses.controls.icon} 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 6 10"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  );
}

export default {
  Root,
  Container,
  Item,
  Indicators,
  ButtonLeft,
  ButtonRight
};