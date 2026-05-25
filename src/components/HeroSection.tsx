import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-green-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-green-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold-light font-medium text-sm">100% Saudi Owned Company</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Integrated Metal Works
            <span className="block text-gradient-gold">Engineering Excellence Since 2014</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Manpower Supply Construction & Electrical • Electro-Mechanical • General trading!!!
          </p>

          <p className="text-base text-primary-foreground/70 max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Delivering premium industrial solutions across Saudi Arabia's Eastern Province with competitive pricing, quality workmanship, and timely delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-6 text-lg group"
            >
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "10+", label: "Years Experience" },
              { value: "170+", label: "Team Members" },
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Saudi Owned" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-gold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
