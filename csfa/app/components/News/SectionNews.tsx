import Title from '../Title/Title';
import News from './News';

export default function SectionNews(){
    return(
        <section id='news' className='w-dvw h-auto bg-white flex flex-col p-12 items-center justify-center gap-6'>
            <Title title='Noticías'  className='text-blue-700'/>
            <News />
        </section>
    )
}