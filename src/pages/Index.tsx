import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DivisionsSection } from "@/components/DivisionsSection";
import { QualitySection } from "@/components/QualitySection";
import { ManpowerSection } from "@/components/ManpowerSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeamSection } from "@/components/TeamSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DivisionsSection />
      <QualitySection />
      <ManpowerSection />
      <EquipmentSection />
      <ProjectsSection />
      <TeamSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
