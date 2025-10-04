import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Tired of Cold Outreach That Never Converts?
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Most agencies struggle to consistently fill their pipeline. They waste countless hours chasing prospects who never reply — or hire expensive SDRs with inconsistent results. GrowZilla solves this by building a self-sustaining system that books qualified meetings for you — week after week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
