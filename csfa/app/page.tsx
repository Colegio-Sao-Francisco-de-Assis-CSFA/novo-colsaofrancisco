
import SectionHeroCarousel from "./components/csfa/Hero/SectionHero";
import SectionCourses from "./components/csfa/Courses/SectionCourses";
import SectionAbout from "./components/csfa/About/About";
import SectionNews from "./components/csfa/News/SectionNews";
import SectionContact from "./components/csfa/Contact/SectionContact";
import SectionFeatures from "./components/csfa/Features/SectionFeatures";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";


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