const clients = [
  "TrafficWave",
  "MN Ventures",
  "Growth Guild",
  "Reflexion",
  "Win Academy",
  "Gray Dots",
  "30Second Group",
  "LeadHive",
  "BrightPath",
  "Nexel",
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by Fast-Growing Digital Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
            {clients.map((client) => (
              <div 
                key={client}
                className="flex items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Rated 5★ for reliability and performance by top B2B founders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
