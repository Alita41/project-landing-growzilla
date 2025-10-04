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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process — Simple and Predictable
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
