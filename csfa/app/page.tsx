
import SectionHeroCarousel from "../components/site/Hero/SectionHero";
import SectionCourses from "../components/site/Courses/SectionCourses";
import SectionAbout from "../components/site/About/About";
import SectionNews from "../components/site/News/SectionNews";
import SectionContact from "../components/site/Contact/SectionContact";
import SectionFeatures from "../components/site/Features/SectionFeatures";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";


export default function PaginaInicial() {
  return (
      <>
        <Header />
        {/* <SectionHeroCarousel/> */}
        {/* <SectionCourses /> */}
        {/* <SectionAbout/> */}
        {/* <SectionFeatures/> */}
        {/* <SectionNews/> */}
        <SectionContact/>
        <Footer/>
      </>    
  );
}