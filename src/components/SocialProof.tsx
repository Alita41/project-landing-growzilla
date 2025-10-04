import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import mnVenturesLogo from "@/assets/mn-ventures-logo.png";
import growthGuildLogo from "@/assets/growth-guild-logo.png";

const clients = [
  { name: "MN Ventures", logo: mnVenturesLogo, color: "#3B82F6" },
  { name: "Growth Guild", logo: growthGuildLogo, color: "#10B981" },
  { name: "TrafficWave", logo: "https://via.placeholder.com/150x60/8B5CF6/FFFFFF?text=TrafficWave", color: "#8B5CF6" },
  { name: "Reflexion", logo: "https://via.placeholder.com/150x60/F59E0B/FFFFFF?text=Reflexion", color: "#F59E0B" },
  { name: "BrightPath", logo: "https://via.placeholder.com/150x60/EC4899/FFFFFF?text=BrightPath", color: "#EC4899" },
  { name: "LeadHive", logo: "https://via.placeholder.com/150x60/06B6D4/FFFFFF?text=LeadHive", color: "#06B6D4" },
  { name: "Nexel", logo: "https://via.placeholder.com/150x60/14B8A6/FFFFFF?text=Nexel", color: "#14B8A6" },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by Fast-Growing Digital Companies
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                playOnInit: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4 flex">
              {[...clients, ...clients].map((client, index) => (
                <CarouselItem key={`${client.name}-${index}`} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center p-6 rounded-lg bg-background hover:bg-background/80 transition-all hover:shadow-lg h-24 border border-border/50">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-h-12 max-w-full object-contain transition-all hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-muted-foreground text-sm">
            Rated 5★ for reliability and performance by top B2B founders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
