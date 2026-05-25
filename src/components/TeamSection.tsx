import { User } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamMembers = [
  { name: "Mohammad Al-Herz", role: "Vice President", department: "Executive" },
  { name: "Ahmed Al-Rashid", role: "Contracting Manager", department: "Operations" },
  { name: "Khalid Al-Otaibi", role: "Operations Manager", department: "Projects" },
  { name: "Fahad Al-Qahtani", role: "HR Manager", department: "Human Resources" },
  { name: "Saeed Al-Harbi", role: "Finance Manager", department: "Finance" },
  { name: "Omar Al-Shehri", role: "Senior Accountant", department: "Finance" },
];

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-green-deep/10 text-green-deep font-semibold text-sm rounded-full mb-6">
            Leadership
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Key
            <span className="text-gradient-gold"> Personnel</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our experienced leadership team drives excellence across all operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group p-6 bg-card border border-border rounded-lg hover-lift text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold/20 to-green-deep/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <User className="w-10 h-10 text-gold" />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
                {member.name}
              </h3>
              <p className="text-gold-dark font-medium text-sm mb-2">{member.role}</p>
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {member.department}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
