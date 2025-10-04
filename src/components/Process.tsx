import { Search, Zap, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & Strategy",
    description: "We assess your ICP and sales funnel to craft a laser-focused outreach plan.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Launch Smart Campaigns",
    description: "Our systems execute multi-channel outreach (email, voice, and automation) that connects you directly with ready-to-talk prospects.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "You Get Booked Calls",
    description: "Qualified meetings appear on your calendar. You show up and close deals.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process — Simple and Predictable
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="text-center space-y-4 p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 border border-transparent hover:border-primary/20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
                  <step.icon className="h-10 w-10 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:scale-110" />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2 transition-all duration-500 group-hover:text-primary/40 group-hover:scale-110">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-500 group-hover:from-primary group-hover:h-1 group-hover:shadow-lg group-hover:shadow-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
