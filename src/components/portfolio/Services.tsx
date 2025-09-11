import { Code, Megaphone, PenTool, BarChart3, Globe, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and landing pages built with modern frameworks like React, HTML5/CSS3, and JavaScript.",
      features: ["Responsive Design", "Custom CSS/HTML", "Squarespace 7.1", "Performance Optimization"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive engagement and convert visitors into customers.",
      features: ["Social Media Management", "Content Strategy", "Email Marketing", "Lead Generation"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Brand & Design",
      description: "On-brand creative design that captures your unique voice and resonates with your audience.",
      features: ["Brand Identity", "Figma Design", "Canva Templates", "Marketing Materials"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "SEO & Analytics",
      description: "Data-driven optimization to improve your search rankings and track performance.",
      features: ["On-page SEO", "Google Analytics", "UTM Tracking", "Performance Reports"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Event Marketing",
      description: "End-to-end event management from RSVP systems to post-event recap and analysis.",
      features: ["Event Planning", "Vendor Coordination", "RSVP Management", "Post-Event Analysis"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      description: "Streamlined operations using modern tools like Trello, Slack, and HubSpot for maximum efficiency.",
      features: ["Team Coordination", "Client Communication", "Timeline Management", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              Services & Expertise
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              From concept to execution, I provide comprehensive digital solutions 
              that help businesses thrive in today's competitive landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-portfolio-primary/5"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-portfolio-neutral">
                    {service.title}
                  </h3>
                  
                  <p className="text-portfolio-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how I can help bring your vision to life with strategic marketing and beautiful design.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-portfolio-primary px-8 py-4 rounded-full font-semibold hover:bg-portfolio-light transition-colors duration-300 hover:scale-105 transform"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;