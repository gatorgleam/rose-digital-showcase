import { Mail, MapPin, Globe, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abbyjane@gatorgleamagency.com",
      href: "mailto:abbyjane@gatorgleamagency.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(262) 210-2921",
      href: "tel:+12622102921"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "gatorgleamagency.com",
      href: "https://www.gatorgleamagency.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Carlsbad, CA",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
              Ready to elevate your brand with strategic marketing and beautiful web design? 
              I'd love to discuss your project and how I can help bring your vision to life.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-portfolio-neutral mb-6">
                  Get In Touch
                </h3>
                <p className="text-portfolio-muted leading-relaxed mb-8">
                  Whether you're a startup looking to establish your digital presence or an 
                  established business ready to take your marketing to the next level, 
                  I'm here to help you succeed.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-portfolio-muted">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-portfolio-neutral font-medium hover:text-portfolio-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-portfolio-neutral font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('mailto:abbyjane@gatorgleamagency.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="portfolio" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://www.gatorgleamagency.com', '_blank')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Agency Website
                </Button>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              {/* Background decoration */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
                style={{ background: 'var(--gradient-primary)' }}
              />
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-portfolio-primary/10">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white mx-auto">
                    <Linkedin className="w-10 h-10" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-neutral mb-4">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-portfolio-muted leading-relaxed">
                      Let's schedule a consultation to discuss your goals, timeline, 
                      and how I can help transform your digital presence.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm text-portfolio-muted">
                      <strong>What you can expect:</strong>
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Free initial consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Custom strategy proposal</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Transparent project timeline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Ongoing support & maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center">
            <div className="border-t border-portfolio-primary/10 pt-8">
              <p className="text-portfolio-muted">
                © 2024 Abigail Lehr. Proudly serving clients from Carlsbad, CA and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;