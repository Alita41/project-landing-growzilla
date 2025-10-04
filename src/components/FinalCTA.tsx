import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDAR_LINK = "https://calendly.com/growzilla";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Fill Your Calendar with Sales-Ready Meetings?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's turn outreach into a predictable growth engine for your agency.
          </p>
          <div className="pt-4">
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
      </div>
    </section>
  );
};

export default FinalCTA;
