import { X, CheckCircle2 } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tired of Cold Outreach That Never Converts?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-destructive">
                <X className="h-6 w-6" />
                The Old Way (Doesn't Work)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Wasting countless hours chasing prospects who never reply</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Hiring expensive SDRs with inconsistent results</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Struggling to consistently fill your sales pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Unpredictable revenue and empty calendars</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-6 w-6" />
                The GrowZilla Way (Works!)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fully automated system that books qualified meetings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">AI-powered outreach that personalizes at scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Self-sustaining pipeline that fills week after week</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Predictable revenue with guaranteed results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
