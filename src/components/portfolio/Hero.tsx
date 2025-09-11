import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import abigailHeadshot from "@/assets/abigail-headshot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 via-background to-portfolio-secondary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-portfolio-neutral">Abigail</span>
                <br />
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"
                  style={{ backgroundImage: 'var(--gradient-primary)' }}
                >
                  Lehr
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-2 text-portfolio-muted text-lg">
                <span>Design-Forward Marketer</span>
                <span>•</span>
                <span>Web Developer</span>
                <span>•</span>
                <span>Agency Founder</span>
              </div>
            </div>

            <p className="text-xl text-portfolio-muted leading-relaxed max-w-2xl">
              I run end-to-end event marketing, from RSVP to recap. I build on-brand creative, 
              handle vendors and logistics, and drive outreach that converts.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View My Work
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-1" />
              <span className="text-portfolio-muted text-sm">Carlsbad, CA</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
                style={{ background: 'var(--gradient-primary)' }}
              />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl">
                <img
                  src={abigailHeadshot}
                  alt="Abigail Lehr - Professional Portrait"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-portfolio-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;