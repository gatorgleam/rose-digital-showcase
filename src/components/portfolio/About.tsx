import { CheckCircle, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Multi-channel campaigns that consistently book 10+ qualified prospect meetings per week"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Data-driven optimization using UTM tracking, Google Analytics, and conversion metrics"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Campaign Management",
      description: "End-to-end digital marketing from strategy development through execution and reporting"
    }
  ];

  const skills = [
    "Digital Marketing Strategy", "Lead Generation Campaigns", "Social Media Management", 
    "Google Analytics & UTM Tracking", "Email Marketing Automation", "Content Marketing",
    "HubSpot CRM & Sales Funnels", "Paid Advertising (Social/Search)", "SEO & Local Search"
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              About Me
            </h2>
            <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
              A results-driven digital marketing strategist who combines data analytics
              with creative campaigns to drive measurable business growth.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                My Story
              </h3>
              <div className="space-y-4 text-portfolio-muted">
                <p className="leading-relaxed">
                  Based in Carlsbad, CA, I'm the founder of Gator Gleam Digital Marketing Agency,
                  where I develop and execute comprehensive digital marketing strategies that drive
                  qualified leads and measurable ROI for growing businesses.
                </p>
                <p className="leading-relaxed">
                  At 1031 Capital Solutions, I consistently generate 10+ qualified prospect meetings per week
                  through strategic lead outreach campaigns, cross-team communication, and performance-optimized
                  marketing funnels that convert prospects into clients.
                </p>
                <p className="leading-relaxed">
                  My approach combines data-driven insights with creative execution - from social media campaigns
                  and email automation to SEO optimization and paid advertising that delivers results you can measure.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral">
                What I Bring
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div key={index} className="flex gap-4" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 shadow-sm border border-transparent"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
              <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
            </div>
            <div className="absolute inset-[1px] rounded-3xl bg-white" />
            <h3 className="text-2xl font-semibold text-portfolio-neutral mb-6 text-center">
              Core Skills & Technologies
            </h3>
            <motion.div
              className="relative flex flex-wrap gap-3 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-portfolio-light px-4 py-2 rounded-full border border-portfolio-primary/10"
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                >
                  <CheckCircle className="w-4 h-4 text-portfolio-primary" />
                  <span className="text-portfolio-neutral font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;