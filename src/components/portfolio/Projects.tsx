import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "1031 Capital Solutions",
      type: "Full-time Marketing Coordinator",
      period: "Jun 2024 - Sep 2025",
      description: "Led comprehensive marketing initiatives including day-to-day business development, cross-team communication, and event planning. Managed lead outreach campaigns that booked ~10 prospect meetings per week.",
      tags: ["Marketing Strategy", "Lead Generation", "Event Planning", "Business Development"],
      category: "Corporate Marketing"
    },
    {
      title: "Gator Gleam Marketing Agency",
      type: "Founder & Marketing Lead",
      period: "Sep 2021 - Present",
      description: "Founded and operate a full-service digital marketing agency serving local small businesses. Developed service offerings for web design, social media, and content packages.",
      tags: ["Agency Management", "Web Development", "Social Media", "Content Strategy"],
      category: "Agency Work"
    },
    {
      title: "Toothpicks Catering",
      type: "CMO & Event Manager",
      period: "2015 - Present",
      description: "Comprehensive digital presence overhaul including social platform management, website development, and on-site event coordination. Created marketing materials and managed day-of logistics.",
      tags: ["Social Media", "Website Development", "Event Management", "Brand Identity"],
      category: "Food & Hospitality"
    },
    {
      title: "Amanda Rose Consulting",
      type: "Website Developer & Social Media Manager",
      period: "2023 - 2024",
      description: "Complete website development and ongoing social media management for consulting business. Focus on professional brand positioning and lead generation.",
      tags: ["Web Development", "Social Media Management", "Professional Services"],
      category: "Consulting"
    },
    {
      title: "Michael Nucci Real Estate",
      type: "Website Developer & Social Media Manager", 
      period: "2023 - 2024",
      description: "Custom website development and social media strategy for real estate professional. Implemented lead capture systems and property showcase features.",
      tags: ["Real Estate Marketing", "Lead Generation", "Web Development"],
      category: "Real Estate"
    },
    {
      title: "Amazing Grace Salon",
      type: "Website Developer & Social Media Consultant",
      period: "2023 - 2024", 
      description: "Modern website redesign and social media consultation for beauty salon. Focused on online booking integration and visual content strategy.",
      tags: ["Beauty Industry", "Online Booking", "Visual Content", "Website Development"],
      category: "Beauty & Wellness"
    },
    {
      title: "Lux Wellness & Luxe Wellness",
      type: "Website Developer",
      period: "2023 - 2024",
      description: "Multiple wellness brand website projects focusing on clean, modern design and appointment booking functionality.",
      tags: ["Wellness Industry", "Clean Design", "Appointment Systems"],
      category: "Beauty & Wellness"
    },
    {
      title: "People MVR",
      type: "Website Developer & Social Media Manager",
      period: "2023 - 2024",
      description: "Comprehensive digital marketing support including website development and social media management for service-based business.",
      tags: ["Service Business", "Digital Marketing", "Web Development"],
      category: "Service Business"
    }
  ];

  const categories = ["All", "Agency Work", "Corporate Marketing", "Real Estate", "Beauty & Wellness", "Food & Hospitality", "Consulting", "Service Business"];

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
              A showcase of successful collaborations across diverse industries, 
              from startup consulting to established businesses looking to grow their digital presence.
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

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="border-t border-portfolio-primary/10 pt-4">
                    <Button variant="portfolio" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">8+</div>
              <div className="text-portfolio-muted">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">15+</div>
              <div className="text-portfolio-muted">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">100%</div>
              <div className="text-portfolio-muted">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-portfolio-primary mb-2">4+</div>
              <div className="text-portfolio-muted">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;