
import HeroCarousel from "./Hero"

export default function SectionHero(){
    return(
        <section id="hero" className="w-full h-96 
                                     md:h-[80dvh]
                                     lg:h-dvh">
            <HeroCarousel />
        </section>
    )
}