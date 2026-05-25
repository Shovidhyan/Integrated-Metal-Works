import { useState } from "react";
import { MapPin, Building, ZoomIn, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import project images
import image6 from "@/assets/Picture6.jpg";
import image8 from "@/assets/Picture8.jpg";
import image9 from "@/assets/Picture9.jpg";
import image10 from "@/assets/Picture10.jpg";
import image11 from "@/assets/Picture11.jpg"; // The big image

// UPDATED DATA: 20 Completed Projects
const completedProjects = [
  { name: "All type of Electrical works", location: "Al Waja Housing", client: "Al Hakmiah" },
  { name: "Gypsum Ceiling & Gypsum Board Partition works", location: "Al Waja Housing", client: "Al Hakmiah" },
  { name: "All type of Electrical works", location: "The Move Project Jubail", client: "Focus Arabia" },
  { name: "Industrial Electric works", location: "Jubail", client: "East Tower Holding Company" },
  { name: "Installation of MD Panel", location: "Jubail", client: "East Tower Holding Company" },
  { name: "Cable Pulling to SCECO Transformer", location: "Jubail", client: "East Tower Holding Company" },
  { name: "Supply All Type Of Manpower", location: "STC Project Riyadh", client: "Zamil Steel Construction Co" },
  { name: "Construction of Duct Bank", location: "Jubail", client: "KABCON" },
  { name: "All type of Manpower Supply", location: "KFU Al Hassa", client: "MEC" },
  { name: "Cleaning works", location: "Al Khobar", client: "Al Falak Compound" },
  { name: "Construction of Electrical Substation", location: "ICDOC Dammam", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "ICDOC Al Hassa", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "Lucy Switchgear Dammam", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "Abdullah Foud Dammam", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "Weatherford Dammam", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "Ideal Food Dammam", client: "KABCON" },
  { name: "Construction of Electrical Substation", location: "Jubail", client: "KABCON" },
  { name: "All Electrical & Plumbing works", location: "Al Khobar", client: "Hotel Skoot" },
  { name: "All Electrical works", location: "Al Khobar", client: "Al Qusse" },
  { name: "Manpower Supply", location: "Veola Project Jubail", client: "Saudi Amana" },
];

// UPDATED DATA: 6 Ongoing Projects
const ongoingProjects = [
  { name: "Construction, Electrical and Plumbing works", location: "Riyadh", client: "Hotel Al Ruwaida" },
  { name: "All types of Manpower Supply", location: "The move Project Jubail", client: "ZAMIL STEEL CONSTRUCTION CO" },
  { name: "Manpower Supply", location: "Jubail", client: "GULF DEVELOPMENT CONTRACTING" },
  { name: "Manpower Supply", location: "SANAD DAMMAM", client: "SAUDI AMANA CONTRACTING CO" },
  { name: "Manpower Supply", location: "JUBAIL", client: "FOCUS ARABIA" },
  { name: "Manpower Supply", location: "Dammam", client: "INCO FACTORY FOR PRECAST" },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  
  // State for Zoom Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Grouping secondary images for cleaner mapping
  const sideImages = [image6, image8, image9, image10];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark font-semibold text-sm rounded-full mb-6">
            Our Portfolio
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Featured
            <span className="text-gradient-gold"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our track record of successful projects across the Eastern Province.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="completed" className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-muted p-1 rounded-lg">
            <TabsTrigger value="completed" className="font-semibold data-[state=active]:bg-gold data-[state=active]:text-charcoal rounded-md">
              Completed ({completedProjects.length})
            </TabsTrigger>
            <TabsTrigger value="ongoing" className="font-semibold data-[state=active]:bg-gold data-[state=active]:text-charcoal rounded-md">
              Ongoing ({ongoingProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="completed">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isCompleted />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isCompleted={false} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Images Gallery - Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          
          {/* Big Feature Image (Image 11) - Spans 2 cols & 2 rows */}
          <div 
            className="sm:col-span-2 sm:row-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
            onClick={() => setSelectedImage(image11)}
          >
            <img 
              src={image11} 
              alt="Featured Project Construction" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Side Images - Filling the remaining grid */}
          {sideImages.map((image, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Project snapshot ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-white/20 p-2 rounded-full backdrop-blur-md border border-white/30">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* ZOOM MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}

    </section>
  );
}

function ProjectCard({ project, index, isCompleted }: { project: { name: string; location: string; client: string }; index: number; isCompleted: boolean }) {
  return (
    <div
      className="group p-5 bg-card border border-border rounded-lg hover-lift transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Status Badge */}
      <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium mb-3 ${
        isCompleted
          ? "bg-green-deep/10 text-green-deep"
          : "bg-gold/10 text-gold-dark"
      }`}>
        <div className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-green-deep" : "bg-gold animate-pulse"}`} />
        {isCompleted ? "Completed" : "In Progress"}
      </div>

      <h3 className="font-heading font-semibold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
        {project.name}
      </h3>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-gold" />
          <span>{project.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Building className="w-4 h-4 text-green-deep" />
          <span className="line-clamp-1">{project.client}</span>
        </div>
      </div>
    </div>
  );
}