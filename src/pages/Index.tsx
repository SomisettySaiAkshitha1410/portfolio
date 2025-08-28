import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TopLanguages from "@/components/TopLanguages";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <TopLanguages />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;