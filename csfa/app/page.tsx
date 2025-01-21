
import SectionHeroCarousel from "./components/Hero/SectionHero";
import SectionCourses from "./components/Courses/SectionCourses";
import SectionAbout from "./components/About/About";
import SectionNews from "./components/News/SectionNews";
import SectionContact from "./components/Contact/SectionContact";
import SectionFeatures from "./components/Features/SectionFeatures";
import Footer from "./components/Footer/Footer";

export default function PaginaInicial() {
  return (
      <>
        <SectionHeroCarousel/>
        <SectionCourses />
        <SectionAbout/>
        <SectionFeatures/>
        <SectionNews/>
        <SectionContact/>
        <Footer/>
      </>    
  );
}
