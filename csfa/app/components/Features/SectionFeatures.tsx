'use client';
import Title from "../Title/Title";
import CarouselFeature from "./Caroussel/CarouselFeature";

export default function SectionFeatures(){
    return(
        <section id="feature" className='w-full h-dvh flex flex-col items-center justify-center gap-12 p-16 bg-white  
                                        rounded-tl-[20px]
                                        sm:rounded-tl-[40px]
                                        md:rounded-tl-[60px]
                                        lg:rounded-tl-[80px]    
                                        xl:rounded-tl-[100px]'>
            <Title title="Diferenciais" className="text-blue-700"/>
            <CarouselFeature />
        </section>
    )
}