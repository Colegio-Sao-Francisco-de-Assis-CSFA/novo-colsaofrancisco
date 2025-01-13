import CarouselFeature from "./Caroussel/CarouselFeature"
import {carouselItems} from './Caroussel/CarouselItem'; 

export default function SectionFeatures(){
    return(
        <section className='w-full h-80vh flex items-center justify-center'>
            <CarouselFeature.Root >
                <CarouselFeature.Container>
                    
                {carouselItems.map((item) => (
                        <CarouselFeature.Item 
                            key={item.id} 
                            {...item} 
                        />
                     ))}
                </CarouselFeature.Container>

                <CarouselFeature.Indicators />

                <CarouselFeature.ButtonLeft/>
                <CarouselFeature.ButtonRight/>
            </CarouselFeature.Root>
        </section>
    )
}