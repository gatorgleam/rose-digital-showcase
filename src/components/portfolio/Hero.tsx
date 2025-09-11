import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

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
        <div className="grid gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
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
                <span>Digital Marketing Strategist</span>
                <span>•</span>
                <span>Lead Generation Expert</span>
                <span>•</span>
                <span>Agency Founder</span>
              </div>
            </div>

            <p className="text-xl text-portfolio-muted leading-relaxed max-w-2xl">
              I drive digital marketing campaigns that generate qualified leads and convert prospects into customers. 
              Specializing in multi-channel strategies, social media management, and performance-driven campaigns.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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

            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-1" />
              <span className="text-portfolio-muted text-sm">Carlsbad, CA</span>
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