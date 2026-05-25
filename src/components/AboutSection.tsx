import { Building2, MapPin, Users, Calendar, Award, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Calendar, value: "2014", label: "Established" },
  { icon: Award, value: "100%", label: "Saudi Owned" },
  { icon: MapPin, value: "Eastern", label: "Province" },
  { icon: Building2, value: "3+", label: "Divisions" },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-green-deep/10 text-green-deep font-semibold text-sm rounded-full mb-6">
              About Us
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Building the Future of
              <span className="text-gradient-gold"> Saudi Arabia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Integrated Metal Works Trading & Contracting Company Ltd is a 100% Saudi owned enterprise established in 2014, headquartered in Al Khobar, Eastern Province of the Kingdom of Saudi Arabia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in construction, electrical, and electro-mechanical works, backed by a highly qualified engineering team. Our commitment to competitive pricing, on-time delivery, and superior quality has made us a trusted partner for government and industrial clients across the region.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Highly qualified engineering team with extensive experience",
                "Competitive pricing without compromising quality",
                "On-time project delivery with strong monitoring",
                "Comprehensive manpower supply solutions",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 bg-gold/20 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 lg:p-8 bg-card border border-border rounded-lg hover-lift transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}

            {/* Feature Card */}
            <div className="col-span-2 p-6 lg:p-8 bg-gradient-to-br from-green-deep to-charcoal rounded-lg text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Continuous Growth</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Since our establishment, we've consistently expanded our capabilities and project portfolio, becoming a leading contractor in the Eastern Province.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
