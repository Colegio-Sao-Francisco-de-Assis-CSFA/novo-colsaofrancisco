import Title from "../Title/Title";
import '@/styles/Title.css';
import Courses from "./Courses";


export default function SectionCourses(){
   return(
        <section className="w-full h-auto bg-blue-600 flex flex-col justify-center items-center p-12 space-y-4">
            
            <Title title="Segmentos" className="text-white" />

            <div className="w-dvw h-auto flex flex-col flex-wrap items-center justify-center p-6 space-y-6 md:space-y-0 md:gap-4 md:p-6 xl:flex-row">
                <Courses />
            </div>
            
        </section>
   )
}