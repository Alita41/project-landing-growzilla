import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import growzillaLogo from "@/assets/growzilla-logo.png";
import mnVenturesLogo from "@/assets/mn-ventures-logo.png";
import growthGuildLogo from "@/assets/growth-guild-logo.png";

const clients = [
  { name: "TrafficWave", logo: growzillaLogo },
  { name: "MN Ventures", logo: mnVenturesLogo },
  { name: "Growth Guild", logo: growthGuildLogo },
  { name: "Reflexion", logo: growzillaLogo },
  { name: "Win Academy", logo: mnVenturesLogo },
  { name: "Gray Dots", logo: growthGuildLogo },
  { name: "30Second Group", logo: growzillaLogo },
  { name: "LeadHive", logo: mnVenturesLogo },
  { name: "BrightPath", logo: growthGuildLogo },
  { name: "Nexel", logo: growzillaLogo },
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
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name} className="md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center p-6 rounded-lg bg-background hover:bg-background/80 transition-all hover:shadow-lg h-24">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
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
