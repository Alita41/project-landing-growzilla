import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const CALENDAR_LINK = "https://api.leadconnectorhq.com/widget/bookings/growzilla";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-xs sm:text-sm font-medium text-primary">
              🚀 AI-Powered Lead Generation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Get 20+ Qualified B2B Meetings Every Month Without Lifting a Finger
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              GrowZilla helps B2B service agencies and digital companies consistently fill their sales calendars through fully automated lead generation systems powered by AI and expert strategy.
            </p>
            <div className="pt-2">
              <Button 
                size="lg"
                className="w-full sm:w-auto"
                variant="cta"
                onClick={() => window.open(CALENDAR_LINK, '_blank')}
              >
                Get Qualified Meetings This Month
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-64 sm:h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/50 hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
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
