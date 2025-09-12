import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Navbar from "@/components/portfolio/Navbar";
import MyWork from "@/components/portfolio/MyWork";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Index;
