
import SectionHeroCarousel from "@/components/views/index-page/Hero/SectionHero";
import SectionCourses from "@/components/views/index-page/Courses/SectionCourses";
import SectionAbout from "@/components/views/index-page/About/About";
import SectionNews from "@/components/views/index-page/News/SectionNews";
import SectionContact from "@/components/views/index-page/Contact/SectionContact";
import SectionFeatures from "@/components/views/index-page/Features/SectionFeatures";
import Header from "@/components/views/Header/Header";
import Footer from "@/components/views/Footer/Footer";




export default function PaginaInicial() {
  return (
    <div>
      <Header />
      <SectionHeroCarousel />
      <SectionCourses />
      <SectionAbout />
      <SectionFeatures />
      <SectionNews />
      <SectionContact />
      <Footer />
    </div>
  );
}