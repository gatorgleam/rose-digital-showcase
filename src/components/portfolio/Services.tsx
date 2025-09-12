import { Code, Megaphone, PenTool, BarChart3, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Lead Generation Campaigns",
      description: "Multi-channel outreach strategies that consistently deliver 10+ qualified prospect meetings per week through targeted campaigns.",
      features: ["Email Marketing Automation", "LinkedIn Outreach", "Social Media Advertising", "Lead Scoring & Nurturing"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Data-driven campaign optimization using advanced tracking, UTM parameters, and conversion analysis to maximize ROI.",
      features: ["Google Analytics Setup", "UTM Campaign Tracking", "Conversion Rate Analysis", "Monthly Performance Reports"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive qualified traffic to your business.",
      features: ["Content Strategy & Creation", "Community Management", "Paid Social Advertising", "Social Media Analytics"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Compelling content that positions your brand as an industry leader while driving organic traffic and lead generation.",
      features: ["Blog Content Strategy", "Email Newsletter Creation", "Marketing Copy & Messaging", "Content Calendar Planning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO & Local Search",
      description: "Comprehensive search engine optimization to improve your visibility and attract high-intent prospects organically.",
      features: ["On-page SEO Optimization", "Local Business Optimization", "Keyword Strategy", "Technical SEO Audits"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Marketing Technology",
      description: "Strategic implementation of marketing tools and automation systems to streamline operations and improve campaign effectiveness.",
      features: ["HubSpot CRM Integration", "Marketing Automation Setup", "Landing Page Development", "Conversion Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              Services & Expertise
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              Comprehensive digital marketing solutions that drive qualified leads, increase brand awareness,
              and deliver measurable ROI for growing businesses.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
                  <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
                </div>
                <div className="absolute inset-[1px] rounded-3xl bg-white" />
                {/* Icon */}
                <div className="mb-6">
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-2xl flex items-center justify-center text-white" whileHover={{ scale: 1.08 }}>
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative space-y-5">
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
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-12 text-white">
              <div className="absolute inset-0" style={{ background: 'var(--gradient-primary)' }} />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Digital Marketing?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Let's create a data-driven marketing strategy that generates qualified leads and grows your business.
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
              <div className="absolute -inset-10 opacity-30 blur-3xl" style={{ background: 'var(--gradient-secondary)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;