'use client';
import CarouselFeature from "./Caroussel/CarouselFeature";
import {carouselItems} from './Caroussel/CarouselItem'; 

export default function SectionFeatures(){
    return(
        <section id="feature" className='w-full h-[80vh] flex items-center justify-center p-6 bg-blue-500'>
            <CarouselFeature />
        </section>
    )
}