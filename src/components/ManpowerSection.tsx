import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const manpowerData = [
  { count: 2, label: "Engineers", color: "from-gold to-gold-dark" },
  { count: 6, label: "Supervisors", color: "from-green-deep to-green-light" },
  { count: 5, label: "Foremen", color: "from-charcoal-light to-charcoal" },
  { count: 65, label: "Skilled Labor", color: "from-gold-dark to-green-deep" },
  { count: 98, label: "Non-Skilled Labor", color: "from-green-light to-gold" },
];

function CountUpNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const count = useCountUp(target, 2000, isVisible);
  return <>{count.toString().padStart(2, "0")}</>;
}

export function ManpowerSection() {
  const { ref, isVisible } = useScrollReveal();

  const totalManpower = manpowerData.reduce((sum, item) => sum + item.count, 0);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark font-semibold text-sm rounded-full mb-6">
            Our Team
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Manpower
            <span className="text-gradient-gold"> Strength</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our dedicated workforce of <span className="font-bold text-foreground">{totalManpower}+</span> professionals ensures successful project delivery across all divisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {manpowerData.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 lg:p-8 bg-card border border-border rounded-lg text-center hover-lift transition-all duration-500 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`relative font-heading font-bold text-4xl lg:text-5xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                <CountUpNumber target={item.count} isVisible={isVisible} />
              </div>
              <div className="relative text-muted-foreground font-medium text-sm lg:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Total Badge */}
        <div className={`flex justify-center mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "500ms" }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-deep to-charcoal rounded-lg">
            <div className="text-primary-foreground">
              <span className="font-heading font-bold text-3xl text-gold">
                <CountUpNumber target={totalManpower} isVisible={isVisible} />+
              </span>
              <span className="ml-3 text-lg">Total Workforce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
