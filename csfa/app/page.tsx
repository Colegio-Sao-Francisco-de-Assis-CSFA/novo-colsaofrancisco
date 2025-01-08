
import SectionHeroCarousel from "./components/Hero/SectionHero";
import SectionCourses from "./components/Courses/Courses";
import SectionAbout from "./components/About/About";
import SectionNews from "./components/News/News";
import SectionContact from "./components/Contact/Form";

export default function PaginaInicial() {
  return (
      <>
        <SectionHeroCarousel/>
        <SectionCourses />
        <SectionAbout/>
        <SectionNews/>
        <SectionContact/>
      </>    
  );
}