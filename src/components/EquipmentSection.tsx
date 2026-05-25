import { Truck, Zap, Wrench, HardHat, Disc, Hammer } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const equipment = [
  {
    icon: Truck,
    category: "Fleet & Transport",
    items: [
      { name: "Service Car", count: "04 Units" },
      { name: "Pick-Up Car", count: "02 Units" },
      { name: "Service Truck", count: "01 Unit" },
    ],
  },
  {
    icon: Zap,
    category: "Power Generation",
    items: [
      { name: "250 KVA Generator", count: "01 Unit" },
      { name: "Small Generator", count: "02 Units" },
      { name: "Air Compressor", count: "01 Unit" },
    ],
  },
  {
    icon: Hammer,
    category: "Heavy Construction",
    items: [
      { name: "Pneumatic Compactor", count: "01 Unit" },
      { name: "Concrete Vibrators", count: "01 Unit" },
      { name: "Water Pump", count: "01 Unit" },
    ],
  },
  {
    icon: HardHat,
    category: "Drilling & Demolition",
    items: [
      { name: "Jackhammer Drill", count: "05 Units" },
      { name: "Electric Drill", count: "05 Units" },
    ],
  },
  {
    icon: Disc, // Changed icon for cutting tools
    category: "Cutting Tools",
    items: [
      { name: "Cutting Machine", count: "05 Units" },
      { name: "Sheet Cutter", count: "05 Units" },
      { name: "Circular Wood Saw", count: "03 Units" },
    ],
  },
  {
    icon: Wrench,
    category: "Welding & Joining",
    items: [
      { name: "Welding Machine", count: "02 Units" },
      { name: "Soldering Gun", count: "03 Units" },
    ],
  },
];

export function EquipmentSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-green-deep/10 text-green-deep font-semibold text-sm rounded-full mb-6">
            Resources
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Equipment &
            <span className="text-gradient-gold"> Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive inventory of modern equipment enables us to handle projects of any scale with efficiency and precision.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((category, index) => (
            <div
              key={index}
              className={`group p-6 bg-card border border-border rounded-lg hover-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <category.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                  {category.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((tool, tIndex) => (
                  <li
                    key={tIndex}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                      <span>{tool.name}</span>
                    </div>
                    <span className="text-muted-foreground font-mono text-xs bg-muted px-2 py-1 rounded">
                      {tool.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}