import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "GrowZilla booked us 10 high-value meetings in 6 weeks — and 3 became clients. Absolute game-changer.",
    author: "Adam Rhodes",
    title: "CEO, TrafficWave",
  },
  {
    quote: "They brought predictability to our sales process — something we've struggled with for years.",
    author: "Lina Patel",
    title: "Founder, Growth Guild",
  },
  {
    quote: "The AI integration saved our SDR team 40+ hours monthly. We've never had this level of consistency.",
    author: "Daniel Cruz",
    title: "Director, Reflexion",
  },
  {
    quote: "Everything just works. We wake up to new meetings on the calendar.",
    author: "Sarah Miles",
    title: "CEO, MN Ventures",
  },
  {
    quote: "A system that truly scales. From data to booked meetings — flawless execution.",
    author: "Jordan Lee",
    title: "Co-Founder, Gray Dots",
  },
  {
    quote: "Professional, transparent, and performance-driven — highly recommended.",
    author: "Mike Williams",
    title: "CEO, Win Academy",
  },
  {
    quote: "Best ROI from any sales partner we've worked with.",
    author: "Sophia Grant",
    title: "COO, BrightPath",
  },
  {
    quote: "Every meeting they booked was with someone who genuinely needed our service.",
    author: "Noah Brown",
    title: "Head of Sales, 30Second Group",
  },
  {
    quote: "They helped us go from unpredictable sales to a steady pipeline.",
    author: "Emma Collins",
    title: "CEO, LeadHive",
  },
  {
    quote: "One of the best investments we've made for growth.",
    author: "Lucas Hayes",
    title: "Director, Nexel",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Real Founders
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="pt-4 border-t">
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
