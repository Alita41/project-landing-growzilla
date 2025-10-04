import { Target, Bot, TrendingUp, Clock, Shield, Zap } from "lucide-react";

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
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Get started in just 3-5 days with campaigns live and generating meetings within the first week.",
  },
];

const Value = () => {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why Companies Choose GrowZilla
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
