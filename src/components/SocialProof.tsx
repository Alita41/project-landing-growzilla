import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import mnVenturesLogo from "@/assets/mn-ventures-logo.png";
import growthGuildLogo from "@/assets/growth-guild-logo.png";
import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";
import clientLogo5 from "@/assets/client-logo-5.png";

const clients = [
  { name: "MN Ventures", logo: mnVenturesLogo },
  { name: "Growth Guild", logo: growthGuildLogo },
  { name: "Client 1", logo: clientLogo1 },
  { name: "Client 2", logo: clientLogo2 },
  { name: "Client 3", logo: clientLogo3 },
  { name: "Client 4", logo: clientLogo4 },
  { name: "Client 5", logo: clientLogo5 },
];

const SocialProof = () => {
  return (
    <section className="py-12 bg-secondary/50">
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
                delay: 2000,
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
