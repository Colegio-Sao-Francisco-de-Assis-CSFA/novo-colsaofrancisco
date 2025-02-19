
import SectionHeroCarousel from "@/components/views/index-page/Hero/SectionHero";
import SectionCourses from "@/components/views/index-page/Courses/SectionCourses";
import SectionAbout from "@/components/views/index-page/About/About";
import SectionNews from "@/components/views/index-page/News/SectionNews";
import SectionContact from "@/components/views/index-page/Contact/SectionContact";
import SectionFeatures from "@/components/views/index-page/Features/SectionFeatures";



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