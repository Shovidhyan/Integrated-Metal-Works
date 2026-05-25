import { Construction, Zap, Cog, Users, Factory, Package } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Construction,
    title: "Construction Works",
    description: "Complete building construction, civil works, structural steel erection, and infrastructure development projects.",
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Installation of electrical systems, power distribution, cable laying, panel boards, and lighting solutions.",
  },
  {
    icon: Cog,
    title: "Electro-Mechanical Works",
    description: "HVAC systems, plumbing, fire fighting systems, and integrated mechanical-electrical installations.",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled and unskilled labor supply for industrial, commercial, and residential projects across the Kingdom.",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Specialized industrial construction, maintenance services, and plant support operations.",
  },
  {
    icon: Package,
    title: "General Trading",
    description: "Supply of construction materials, electrical equipment, and mechanical components.",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark font-semibold text-sm rounded-full mb-6">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Solutions for
            <span className="text-gradient-gold"> Every Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From construction to electrical works, we deliver end-to-end solutions tailored to meet the diverse needs of our clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-card border border-border rounded-lg hover-lift hover-glow-gold transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-green-deep/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-gold group-hover:text-gold-dark transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
