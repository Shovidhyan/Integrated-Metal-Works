import { useState } from "react"; // 1. Import useState
import { Building2, FileCheck, CreditCard, Landmark, X, ZoomIn } from "lucide-react"; // Added X and ZoomIn icons
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import your images
import image1 from "@/assets/Picture2.jpg";
import image2 from "@/assets/Picture3.jpg";
import image3 from "@/assets/Picture5.jpg";
import image4 from "@/assets/Picture4.jpg";

const certifications = [
  { 
    icon: FileCheck, 
    name: "VAT Registration", 
    number: "300XXXXXXXXX",
    image: image1 
  },
  { 
    icon: Building2, 
    name: "Chamber of Commerce", 
    number: "License Active",
    image: image2 
  },
  { 
    icon: FileCheck, 
    name: "Commercial Activity", 
    number: "Approved",
    image: image3 
  },
  { 
    icon: Landmark, 
    name: "Municipality Approval", 
    number: "Certified",
    image: image4 
  },
];

const bankDetails = {
  bank: "Riyad Bank",
  accountNumber: "3372135019940",
  iban: "SA4020000003372135019940",
  swift: "RIBLSARI",
  BRANCH: "DOHA", 
  BRANCH_CODE: "337"
};

export function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal();
  
  // 2. State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 lg:py-32 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-green-deep/10 text-green-deep font-semibold text-sm rounded-full mb-6">
            Credentials
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Certifications &
            <span className="text-gradient-gold"> Approvals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fully licensed and government-approved for construction operations across Saudi Arabia.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
          
          {/* Certifications Grid */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              Government Approvals
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-4 bg-card border border-border rounded-lg hover-lift transition-all duration-300 flex flex-col"
                >
                  {/* Image Container - Clickable */}
                  <div 
                    className="w-full h-40 bg-muted rounded-md mb-4 overflow-hidden relative cursor-pointer"
                    onClick={() => cert.image && setSelectedImage(cert.image)}
                  >
                    {cert.image ? (
                      <>
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                        {/* Overlay Icon on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <cert.icon className="w-10 h-10 text-muted-foreground group-hover:text-gold transition-colors" />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">{cert.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Reference */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              Bank Reference
            </h3>
            <div className="p-6 bg-gradient-to-br from-charcoal to-green-deep rounded-lg text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-charcoal" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl">{bankDetails.bank}</h4>
                  <p className="text-primary-foreground/70 text-sm">Banking Partner</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-primary-foreground/10 rounded-lg">
                  <div className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-1">
                    Account Number
                  </div>
                  <div className="font-mono text-sm break-all">{bankDetails.accountNumber}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-1">
                      IBAN
                    </div>
                    <div className="font-mono text-sm break-all">{bankDetails.iban}</div>
                  </div>
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-1">
                      SWIFT Code
                    </div>
                    <div className="font-mono text-sm">{bankDetails.swift}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-1">
                      Branch
                    </div>
                    <div className="font-mono text-sm">{bankDetails.BRANCH}</div>
                  </div>
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-wide mb-1">
                      Branch Code
                    </div>
                    <div className="font-mono text-sm">{bankDetails.BRANCH_CODE}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Modal / Popup Implementation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)} // Close on background click
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Large Image */}
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          >
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}