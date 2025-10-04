import { Target, Bot, TrendingUp, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "We identify your exact Ideal Customer Profile and reach decision-makers who matter.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Our systems personalize outreach at scale, removing manual work.",
  },
  {
    icon: TrendingUp,
    title: "Proven Performance",
    description: "Helped TrafficWave book 10 high-value meetings in 6 weeks, 3 of which turned into clients — without their team lifting a finger.",
  },
  {
    icon: Clock,
    title: "End-to-End Execution",
    description: "From data to booked calls, we manage it all so you can focus on closing.",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "If we don't deliver at least 5 meetings in a month, you don't pay.",
  },
];

const Value = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Companies Choose GrowZilla
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
