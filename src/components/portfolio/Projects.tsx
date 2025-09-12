import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "1031 Capital Solutions",
      type: "Marketing Coordinator - Lead Generation",
      period: "",
      description: "Acted as a de facto CMO to architect and execute an end-to-end demand engine. Built the annual marketing plan and go-to-market for priority ICPs, defined positioning and messaging, selected the channel mix, and owned the campaign calendar and budget. Shipped multi-channel programs across email, LinkedIn, events, and the website; created brand guidelines and a lightweight design system; produced conversion-ready assets (graphics, flyers, landing pages) and rebuilt the website for speed, accessibility, and lead capture. Implemented lifecycle automation and CRM hygiene, instrumented analytics (GA4/UTM, dashboards, attribution), aligned with sales on SLAs and handoffs, and drove ongoing CRO and A/B testing to lift conversion rates.",
      tags: [
        "Lead Generation",
        "Email Marketing",
        "LinkedIn Strategy",
        "Event Marketing",
        "CMO Strategy",
        "GTM Planning",
        "Positioning & Messaging",
        "Brand & Design System",
        "Website Development",
        "Lifecycle Automation",
        "CRM & Sales Ops",
        "GA4 & UTM Tracking",
        "CRO & A/B Testing",
        "Content Strategy",
      ],
      category: "B2B Lead Generation",
      services: [
        "Lead Generation",
        "Email Marketing",
        "Social Media",
        "Events",
        "Content Marketing",
        "Design",
        "Website Development",
        "Marketing Technology",
        "Performance Analytics",
      ],
      scope: [
        "Annual GTM plan, budget and ICP segmentation",
        "Multi-channel programs (email, LinkedIn, events, website)",
        "Brand system, sales collateral, and conversion assets",
        "Website redesign, landing pages, lead capture & routing",
        "Lifecycle automation, CRM hygiene, sales SLAs",
        "Analytics dashboards, attribution, CRO and A/B testing",
      ],
      outcomes: [
        "2.3× increase in MQLs within 90 days",
        "40+ qualified meetings per month sustained",
        "Email: 42% open, 10% reply, 4.8% booked meeting rate",
        "Landing page conversion rate +31%",
        "Cost per lead reduced by 28%",
        "Time-to-first-touch reduced by 22%",
      ],
      results: "40+ meetings/month • 42% open rate • 15% meeting rate"
    },
    {
      title: "Gator Gleam Marketing Agency",
      type: "Founder & Digital Marketing Lead",
      period: "",
      description: "Built and scaled a digital marketing agency serving 15+ clients with comprehensive social media management, content strategy, and lead generation campaigns. Developed systematic processes for client onboarding and campaign optimization.",
      tags: ["Agency Management", "Social Media Strategy", "Content Marketing", "Client Success"],
      category: "Agency Operations",
      services: ["Social Media", "Content Marketing", "Lead Generation"],
      scope: [
        "Agency operations, client onboarding and playbooks",
        "Editorial calendars, creative production, paid social",
        "Content strategy (blogs, newsletters, landing pages)",
        "Reporting cadence, insights and optimization",
        "Martech stack selection and automations",
      ],
      outcomes: [
        "15+ active clients; 92% annual client retention",
        "Average social audience growth +140% YoY",
        "Engagement rate +65% across managed brands",
        "Inbound leads +58% from organic and paid social",
      ],
      results: "15+ active clients • 140% social growth • 92% retention"
    },
    {
      title: "Toothpicks Catering Digital Transformation",
      type: "Digital Marketing Manager",
      period: "",
      description: "Complete digital marketing overhaul resulting in 300% increase in social media following and 150% boost in online inquiries. Managed social platforms, developed content strategy, and coordinated marketing for events serving 500+ guests.",
      tags: ["Social Media Growth", "Content Strategy", "Event Marketing", "Brand Positioning"],
      category: "Food & Hospitality",
      services: ["Social Media", "Content Marketing"],
      scope: [
        "Brand refresh and offer positioning",
        "Always-on social, UGC sourcing and creative",
        "Website updates, menu UX and local SEO",
        "Event campaigns and promotional collateral",
        "Email promos and seasonal campaigns",
      ],
      outcomes: [
        "Social audience +200%",
        "Website inquiries +120% YoY",
        "Organic sessions +62% and GMB views +74%",
        "Event RSVPs +80% across key dates",
      ],
      results: "200% social growth • 120% more inquiries • 500+ event attendees"
    },
    {
      title: "Real Estate Marketing Campaigns",
      type: "Digital Marketing Specialist",
      period: "",
      description: "Developed and executed comprehensive digital marketing strategies for real estate professionals, including Michael Nucci Real Estate. Implemented lead capture systems, social media advertising, and email nurturing campaigns.",
      tags: ["Real Estate Marketing", "Lead Capture", "Social Advertising", "CRM Integration"],
      category: "Real Estate",
      services: ["Lead Generation", "Social Media", "Marketing Technology"],
      scope: [
        "Lead capture funnels and landing pages",
        "Meta ads for listings and brand awareness",
        "Email nurturing and CRM automation",
        "Local SEO and listings management",
        "Content (video, reels) and posting cadence",
      ],
      outcomes: [
        "40+ leads per month sustained",
        "Cost per lead reduced by 22%",
        "Lead→appointment conversion at 24%",
        "Email open rate 36% and click‑through 7%",
        "Avg response time down 35% via automation",
      ],
      results: "40+ leads/month • 25% lead→appt • 80% social engagement"
    },
    {
      title: "Beauty & Wellness Brand Growth",
      type: "Social Media & Content Marketing",
      period: "", 
      description: "Multi-brand campaign management for Amazing Grace Salon, Lux Wellness, and Luxe Wellness. Created cohesive content strategies, managed booking systems integration, and developed visual brand identities that increased client bookings.",
      tags: ["Multi-Brand Management", "Visual Content", "Booking Optimization", "Brand Identity"],
      category: "Beauty & Wellness",
      services: ["Social Media", "Content Marketing", "Marketing Technology"],
      scope: [
        "Cross-brand content strategy and visual cohesion",
        "Always-on social and promotion calendars",
        "Booking funnel UX and integrations",
        "Influencer/UGC and review generation",
      ],
      outcomes: [
        "Client bookings +150% across focus services",
        "Instagram audience +180%",
        "Website booking conversion +22%",
        "Customer acquisition cost reduced by 18%",
      ],
      results: "+150% bookings • +180% Instagram • 90% satisfaction"
    },
    {
      title: "Service Business Marketing Optimization",
      type: "Digital Strategy Consultant",
      period: "",
      description: "Comprehensive marketing support for service-based businesses including People MVR, CA Notary Dynamics, and The Social Affair. Focused on local SEO, social media management, and conversion optimization.",
      tags: ["Local SEO", "Service Marketing", "Conversion Optimization", "Multi-Channel Strategy"],
      category: "Service Business",
      services: ["SEO & Local Search", "Social Media", "Performance Analytics"],
      scope: [
        "Local SEO (citations, reviews, on-page) and GMB",
        "Website CRO and form/event tracking",
        "Content calendars for social and email",
        "High-intent paid search pilots",
      ],
      outcomes: [
        "Local search impressions +62%",
        "Qualified leads +55% YoY",
        "Lead→booked appointment conversion +33%",
        "Cost per lead reduced by 21%",
      ],
      results: "+60% local search • 35% conversion • 50+ leads/month"
    }
  ];

  const mapServiceToGroup = (service: string): string => {
    const s = service.toLowerCase();
    if (s.includes("lead") || s.includes("email") || s.includes("event")) return "Lead Generation";
    if (s.includes("social") || s.includes("content") || s.includes("design") || s.includes("brand")) return "Social & Content";
    if (s.includes("web") || s.includes("site") || s.includes("crm") || s.includes("tech") || s.includes("seo") || s.includes("local") || s.includes("booking")) return "Web & SEO";
    if (s.includes("analytic") || s.includes("ga4") || s.includes("utm") || s.includes("cro") || s.includes("a/b") || s.includes("conversion")) return "Analytics & Ops";
    return "Social & Content";
  };

  const condensedCategories = useMemo(
    () => ["All", "Lead Generation", "Social & Content", "Web & SEO", "Analytics & Ops"],
    [],
  );

  return (
    <section id="projects" className="py-20 bg-portfolio-light/30">
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
              Project Portfolio
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              Proven digital marketing campaigns that have generated thousands of qualified leads,
              increased brand visibility, and delivered measurable ROI across diverse industries.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-portfolio-primary/10 rounded-full p-1 text-portfolio-muted">
              {condensedCategories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-4 py-1.5 data-[state=active]:text-portfolio-primary data-[state=active]:bg-white"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {condensedCategories.map((cat) => {
              const visible = cat === "All" ? projects : projects.filter((p) => p.services.some((s) => mapServiceToGroup(s) === cat));
              return (
                <TabsContent key={cat} value={cat} className="mt-8">
                  <motion.div
                    className="grid lg:grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                  >
                    {visible.map((project, index) => (
                      <motion.div
                        key={`${project.title}-${index}`}
                        className="group bg-white rounded-3xl p-8 shadow-sm border border-transparent relative"
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 120, damping: 16 }}
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
                          <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
                        </div>
                        <div className="absolute inset-[1px] rounded-3xl bg-white pointer-events-none" />

                        <div className="relative z-10">
                        {/* Header */}
                        <div className="relative flex items-start justify-between mb-5">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-portfolio-neutral mb-2">
                              {project.title}
                            </h3>
                            <p className="text-portfolio-primary font-medium">
                              {project.type}
                            </p>
                          </div>
                          {project.period && (
                            <div className="flex items-center gap-2 text-portfolio-muted text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{project.period}</span>
                            </div>
                          )}
                        </div>

                        {/* Category Badge */}
                        <div className="relative mb-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm font-medium rounded-full">
                            <Tag className="w-3 h-3" />
                            Industry: {project.category}
                          </span>
                        </div>

                        {/* Services */}
                        <div className="relative flex flex-wrap gap-2 mb-4">
                          {project.services.map((service, sIdx) => (
                            <span key={sIdx} className="px-3 py-1 text-xs font-medium rounded-full bg-portfolio-light border border-portfolio-primary/10 text-portfolio-neutral">
                              {service}
                            </span>
                          ))}
                        </div>

                        {/* Results Badge */}
                        {project.results && (
                          <div className="relative mb-2">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="text-green-800 text-sm font-medium">Campaign Results</div>
                              <div className="text-green-700 text-sm">{project.results}</div>
                            </div>
                          </div>
                        )}

                        {/* Collapsible Details (native) */}
                        <details className="group">
                          <summary className="flex items-center gap-2 py-2 cursor-pointer text-portfolio-neutral hover:underline">
                            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                            Read more
                          </summary>
                          <div className="mt-2">
                            {/* Description */}
                            <p className="text-portfolio-muted leading-relaxed mb-4">
                              {project.description}
                            </p>

                            {/* Scope of Work */}
                            {Array.isArray((project as any).scope) && (
                              <div className="mb-4">
                                <div className="text-sm text-portfolio-muted font-medium mb-2">Scope of Work</div>
                                <div className="space-y-2">
                                  {(project as any).scope.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                                      <span className="text-sm text-portfolio-muted">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Key Outcomes */}
                            {Array.isArray((project as any).outcomes) && (
                              <div className="mb-4">
                                <div className="text-sm text-portfolio-muted font-medium mb-2">Key Outcomes</div>
                                <div className="space-y-2">
                                  {(project as any).outcomes.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500" />
                                      <span className="text-sm text-portfolio-neutral">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 bg-portfolio-light text-portfolio-neutral text-xs font-medium rounded-full border border-portfolio-primary/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </details>

                        {/* 1031 Capital Solutions link and note */}
                        {project.title === "1031 Capital Solutions" && (
                          <div className="relative border-t border-portfolio-primary/10 pt-4">
                            <a
                              href="https://1031capitalsolutions.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-portfolio-primary font-medium inline-flex items-center gap-2 hover:underline"
                            >
                              Visit 1031capitalsolutions.com
                            </a>
                          </div>
                        )}

                        </div>

                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.06), rgba(34,211,238,0.06))' }} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {[
              { value: '15+', label: 'Active Marketing Campaigns' },
              { value: '42%', label: 'Average Email Open Rate' },
              { value: '140%', label: 'Average Social Growth' },
            ].map((stat, i) => (
              <motion.div key={i} className="text-center" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                <div className="text-4xl font-bold text-portfolio-primary mb-2">{stat.value}</div>
                <div className="text-portfolio-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Notes & Disclosures */}
          <div className="mt-6 text-xs text-portfolio-muted">
            <div className="border-t border-portfolio-primary/10 pt-4">
              <ul className="space-y-2 text-left max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                  <span>Metrics are aggregated across selected client projects; not a single engagement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                  <span>Average email open rate reflects opted-in campaigns and varies by list quality, offer, and segment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                  <span>Social growth is driven by consistent content, creative, and promotions; baselines differ by account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                  <span>Qualified leads are counted using agreed criteria and exclude spam/duplicates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-portfolio-primary" />
                  <span>Results depend on budget, product–market fit, sales SLAs, and external market conditions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;