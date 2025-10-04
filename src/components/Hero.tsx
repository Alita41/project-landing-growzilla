import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const CALENDAR_LINK = "https://calendly.com/growzilla";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              🚀 AI-Powered Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Get 20+ Qualified B2B Meetings Every Month Without Lifting a Finger
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              GrowZilla helps B2B service agencies and digital companies consistently fill their sales calendars through fully automated lead generation systems powered by AI and expert strategy.
            </p>
            <div className="pt-2">
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
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
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
