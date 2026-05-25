import { Users, HardHat, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const divisions = [
  {
    icon: Users,
    title: "Manpower Supply Division",
    description: "Providing skilled and unskilled workforce for various industrial sectors including construction, oil & gas, manufacturing, and commercial projects. Our rigorous screening process ensures you get qualified, reliable personnel.",
    features: ["Skilled Technicians", "Labor Force", "Supervisory Staff", "Quick Deployment"],
  },
  {
    icon: HardHat,
    title: "Construction & Electrical Division",
    description: "Complete construction and electrical contracting services from planning to execution. We handle building construction, civil works, power systems installation, and comprehensive electrical solutions.",
    features: ["Building Construction", "Electrical Installation", "Power Distribution", "Civil Works"],
  },
  {
    icon: Settings,
    title: "Mechanical & General Trading Division",
    description: "Specialized mechanical works including HVAC, plumbing, and fire systems, complemented by our general trading services for construction materials and equipment supply.",
    features: ["HVAC Systems", "Plumbing Works", "Material Supply", "Equipment Trading"],
  },
];

export function DivisionsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="divisions" className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-green-deep/10 text-green-deep font-semibold text-sm rounded-full mb-6">
            Our Divisions
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Three Specialized Divisions
            <span className="text-gradient-gold"> One Unified Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our integrated approach allows us to deliver comprehensive solutions through our specialized divisions.
          </p>
        </div>

        {/* Divisions Cards */}
        <div className="space-y-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className={`group p-8 lg:p-10 bg-card border border-border rounded-lg hover-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-gold">
                  <division.icon className="w-10 h-10 text-charcoal" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {division.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {division.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
