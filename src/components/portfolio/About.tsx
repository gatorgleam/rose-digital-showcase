import { CheckCircle, Zap, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Marketing",
      description: "End-to-end event marketing from concept to execution"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Custom web development with modern tools and frameworks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Building lasting relationships through exceptional results"
    }
  ];

  const skills = [
    "Web Development", "Social Media Marketing", "Event Management", 
    "SEO & Analytics", "Brand Strategy", "Project Management",
    "Figma & Design Tools", "HubSpot CRM", "Content Creation"
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              About Me
            </h2>
            <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
              A passionate marketer and developer who believes in the power of 
              combining creative strategy with technical excellence.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                My Story
              </h3>
              <div className="space-y-4 text-portfolio-muted">
                <p className="leading-relaxed">
                  Based in Carlsbad, CA, I'm the founder of Gator Gleam Digital Marketing Agency, 
                  where I help businesses create meaningful connections with their audiences through 
                  strategic marketing and beautiful web experiences.
                </p>
                <p className="leading-relaxed">
                  From my full-time role as Marketing Coordinator at 1031 Capital Solutions to 
                  managing diverse freelance projects, I've developed a unique perspective on what 
                  it takes to drive real results in today's digital landscape.
                </p>
                <p className="leading-relaxed">
                  I specialize in creating cohesive brand experiences that not only look amazing 
                  but actually convert visitors into customers.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                What I Bring
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-neutral mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-portfolio-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-portfolio-neutral mb-6 text-center">
              Core Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-portfolio-light px-4 py-2 rounded-full border border-portfolio-primary/10"
                >
                  <CheckCircle className="w-4 h-4 text-portfolio-primary" />
                  <span className="text-portfolio-neutral font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;