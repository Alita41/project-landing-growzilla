import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const CALENDAR_LINK = "https://calendly.com/growzilla";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Get 20+ Qualified B2B Meetings Every Month — Without Lifting a Finger.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              GrowZilla helps B2B service agencies and digital companies consistently fill their sales calendars through fully automated lead generation systems powered by AI and expert strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="cta"
                onClick={() => window.open(CALENDAR_LINK, '_blank')}
                className="group"
              >
                Get Qualified Meetings This Month
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Business growth and automation visualization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
