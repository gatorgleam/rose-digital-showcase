import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "1031 Capital Solutions",
      type: "Marketing Coordinator - Lead Generation",
      period: "Jun 2024 - Sep 2025",
      description: "Consistently generated 10+ qualified prospect meetings per week through strategic email campaigns, LinkedIn outreach, and multi-channel lead nurturing. Managed comprehensive marketing operations including event planning and cross-team communications.",
      tags: ["Lead Generation", "Email Marketing", "LinkedIn Strategy", "Event Marketing"],
      category: "B2B Lead Generation",
      results: "40+ meetings/month • 85% email open rate • 15% meeting conversion rate"
    },
    {
      title: "Gator Gleam Marketing Agency",
      type: "Founder & Digital Marketing Lead",
      period: "Sep 2021 - Present",
      description: "Built and scaled a digital marketing agency serving 15+ clients with comprehensive social media management, content strategy, and lead generation campaigns. Developed systematic processes for client onboarding and campaign optimization.",
      tags: ["Agency Management", "Social Media Strategy", "Content Marketing", "Client Success"],
      category: "Agency Operations",
      results: "15+ active clients • 200% average social growth • 95% client retention"
    },
    {
      title: "Toothpicks Catering Digital Transformation",
      type: "Digital Marketing Manager",
      period: "2015 - Present",
      description: "Complete digital marketing overhaul resulting in 300% increase in social media following and 150% boost in online inquiries. Managed social platforms, developed content strategy, and coordinated marketing for events serving 500+ guests.",
      tags: ["Social Media Growth", "Content Strategy", "Event Marketing", "Brand Positioning"],
      category: "Food & Hospitality",
      results: "300% social growth • 150% inquiry increase • 500+ event attendees"
    },
    {
      title: "Real Estate Marketing Campaigns",
      type: "Digital Marketing Specialist",
      period: "2023 - 2024",
      description: "Developed and executed comprehensive digital marketing strategies for real estate professionals, including Michael Nucci Real Estate. Implemented lead capture systems, social media advertising, and email nurturing campaigns.",
      tags: ["Real Estate Marketing", "Lead Capture", "Social Advertising", "CRM Integration"],
      category: "Real Estate",
      results: "40+ leads/month • 25% conversion rate • 180% social engagement"
    },
    {
      title: "Beauty & Wellness Brand Growth",
      type: "Social Media & Content Marketing",
      period: "2023 - 2024", 
      description: "Multi-brand campaign management for Amazing Grace Salon, Lux Wellness, and Luxe Wellness. Created cohesive content strategies, managed booking systems integration, and developed visual brand identities that increased client bookings.",
      tags: ["Multi-Brand Management", "Visual Content", "Booking Optimization", "Brand Identity"],
      category: "Beauty & Wellness",
      results: "250% booking increase • 400% Instagram growth • 90% client satisfaction"
    },
    {
      title: "Service Business Marketing Optimization",
      type: "Digital Strategy Consultant",
      period: "2023 - 2024",
      description: "Comprehensive marketing support for service-based businesses including People MVR, CA Notary Dynamics, and The Social Affair. Focused on local SEO, social media management, and conversion optimization.",
      tags: ["Local SEO", "Service Marketing", "Conversion Optimization", "Multi-Channel Strategy"],
      category: "Service Business",
      results: "60% local search improvement • 35% conversion rate • 50+ monthly leads"
    }
  ];

  const categories = ["All", "B2B Lead Generation", "Agency Operations", "Real Estate", "Beauty & Wellness", "Food & Hospitality", "Service Business"];

  return (
    <section id="projects" className="py-20 bg-portfolio-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              Project Portfolio
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              Proven digital marketing campaigns that have generated thousands of qualified leads, 
              increased brand visibility, and delivered measurable ROI across diverse industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-portfolio-primary/5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-portfolio-neutral mb-2">
                      {project.title}
                    </h3>
                    <p className="text-portfolio-primary font-medium">
                      {project.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-portfolio-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium rounded-full">
                    <Tag className="w-3 h-3" />
                    {project.category}
                  </span>
                </div>

                {/* Results Badge */}
                {project.results && (
                  <div className="mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-green-800 text-sm font-medium">Campaign Results:</div>
                      <div className="text-green-700 text-sm">{project.results}</div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-portfolio-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-portfolio-light text-portfolio-neutral text-xs font-medium rounded-full border border-portfolio-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 1031 Capital Solutions link and note */}
                {index === 0 && (
                  <div className="border-t border-portfolio-primary/10 pt-4">
                    <a
                      href="https://1031capitalsolutions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-primary font-medium inline-flex items-center gap-2 hover:underline"
                    >
                      Visit 1031capitalsolutions.com
                    </a>
                    <div className="text-sm text-portfolio-muted mt-1">
                      I custom developed their website.
                    </div>
                  </div>
                )}

                {/* Hover Effect removed per request */}
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">500+</div>
              <div className="text-portfolio-muted">Qualified Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">15+</div>
              <div className="text-portfolio-muted">Active Marketing Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">85%</div>
              <div className="text-portfolio-muted">Average Email Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">250%</div>
              <div className="text-portfolio-muted">Average Social Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;