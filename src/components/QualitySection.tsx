import { Check, Shield, Award, Target, Users, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const qualityPoints = [
  {
    icon: Target,
    title: "Client Satisfaction",
    description: "Meeting and exceeding client expectations through quality deliverables and responsive service.",
  },
  {
    icon: Shield,
    title: "Compliance & Regulations",
    description: "Strict adherence to Saudi Arabian construction codes, safety standards, and regulatory requirements.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Continuous training and development of our team to maintain highest skill levels.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Regular review and enhancement of our processes, methods, and quality standards.",
  },
  {
    icon: Award,
    title: "Project Monitoring",
    description: "Strong supervision and quality control throughout every phase of project execution.",
  },
];

export function QualitySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-green-deep text-primary-foreground">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-semibold text-sm rounded-full mb-6">
              Quality Policy
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Committed to
              <span className="text-gradient-gold"> Excellence</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              At Integrated Metal Works, quality is not just a goal – it's our foundation. We are committed to delivering projects that meet the highest standards of excellence, safety, and sustainability.
            </p>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-4 p-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg">
              <div className="w-16 h-16 bg-gold rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Certified Excellence</div>
                <div className="text-primary-foreground/70 text-sm">Government Approved Contractor</div>
              </div>
            </div>
          </div>

          {/* Right Content - Quality Points */}
          <div className="space-y-4">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{point.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
