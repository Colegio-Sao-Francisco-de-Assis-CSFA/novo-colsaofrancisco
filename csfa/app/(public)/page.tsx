
import SectionHeroCarousel from "@/components/csfa/Hero/SectionHero";
import SectionCourses from "@/components/csfa/Courses/SectionCourses";
import SectionAbout from "@/components/csfa/About/About";
import SectionNews from "@/components/csfa/News/SectionNews";
import SectionContact from "@/components/csfa/Contact/SectionContact";
import SectionFeatures from "@/components/csfa/Features/SectionFeatures";



export default function PaginaInicial() {
  return (
    <>
      <SectionHeroCarousel />
      <SectionCourses />
      <SectionAbout />
      <SectionFeatures />
      <SectionNews />
      <SectionContact />
    </>
  );
}