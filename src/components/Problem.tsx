import { X, CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-destructive rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block animate-fade-in">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Tired of Cold Outreach That <span className="text-destructive">Never Converts?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Stop wasting time and money on outreach that doesn't work. Choose the proven path instead.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Old Way - Negative */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border-2 border-destructive/30 rounded-2xl p-8 transition-all duration-500 hover:border-destructive/50 hover:shadow-2xl hover:shadow-destructive/10 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-destructive/10 rounded-xl">
                    <TrendingDown className="h-8 w-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-destructive">
                    The Old Way
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 italic">(Doesn't Work)</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-destructive/10 rounded-lg mt-0.5">
                      <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Wasting countless hours chasing prospects who never reply</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-destructive/10 rounded-lg mt-0.5">
                      <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Hiring expensive SDRs with inconsistent results</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-destructive/10 rounded-lg mt-0.5">
                      <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Struggling to consistently fill your sales pipeline</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-destructive/10 rounded-lg mt-0.5">
                      <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Unpredictable revenue and empty calendars</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* GrowZilla Way - Positive */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    The GrowZilla Way
                  </h3>
                </div>
                <p className="text-sm text-primary font-semibold mb-6">(Actually Works!)</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-primary/10 rounded-lg mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">Fully automated system that books qualified meetings</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-primary/10 rounded-lg mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">AI-powered outreach that personalizes at scale</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-primary/10 rounded-lg mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">Self-sustaining pipeline that fills week after week</span>
                  </li>
                  <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-1 bg-primary/10 rounded-lg mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">Predictable revenue with guaranteed results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
