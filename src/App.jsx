import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMain from "./components/contactMeSection/contactMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
