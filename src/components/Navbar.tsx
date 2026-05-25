import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/image-removebg-preview.png"; // 1. Imported the logo

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Divisions", href: "#divisions" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <a
              href="#"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* 2. Replaced the CSS div with the Image tag */}
              <img 
                src={logo} 
                alt="Integrated Metal Works" 
                className="h-10 w-auto object-contain rounded-sm" 
              />
              
              <span className={`font-heading font-bold text-lg hidden sm:block ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Integrated Metal Works
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 font-medium transition-colors rounded-md hover:bg-accent/10 ${
                    isScrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="ml-4 bg-gold hover:bg-gold-dark text-charcoal font-semibold"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 border-t border-border" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 bg-background">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 bg-gold hover:bg-gold-dark text-charcoal font-semibold"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted">
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-light to-green-deep transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}