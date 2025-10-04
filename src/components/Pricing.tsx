import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CALENDAR_LINK = "https://calendly.com/growzilla";

const packages = [
  {
    name: "Email Campaigns",
    description: "Focused, high-performing outreach campaigns that fill your pipeline with ready-to-talk prospects.",
    ideal: "Companies testing outbound or scaling new offers.",
    features: [
      "Custom ICP targeting",
      "Multi-touch email sequences",
      "A/B testing and optimization",
      "Weekly performance reports",
    ],
  },
  {
    name: "AI Integrations",
    description: "Smart automation systems to enhance and sustain your lead generation flow.",
    ideal: "Agencies ready to scale with less manual work.",
    features: [
      "Everything in Email Campaigns",
      "AI-powered personalization",
      "CRM integration",
      "Advanced analytics dashboard",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Fully Autonomous Sales Systems",
    description: "Complete done-for-you setup: targeting, outreach, qualification, and scheduling.",
    ideal: "Businesses seeking predictable, scalable revenue.",
    features: [
      "Everything in AI Integrations",
      "Full automation setup",
      "Dedicated success manager",
      "Custom integrations",
      "White-glove service",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Plans for Every Growth Stage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you need simple campaigns or a fully autonomous sales system — GrowZilla has a tailored solution to fit your goals and budget.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Flexible, results-driven packages starting at $1,200/month, scaling up to $5,000/month depending on campaign complexity.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={pkg.featured ? "border-primary border-2 shadow-xl relative flex flex-col" : "shadow-sm flex flex-col"}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col flex-grow">
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-1">✅ Ideal for:</p>
                  <p className="text-sm text-muted-foreground">{pkg.ideal}</p>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-auto" 
                  variant={pkg.featured ? "cta" : "default"}
                  size="lg"
                  onClick={() => window.open(CALENDAR_LINK, '_blank')}
                >
                  Book a Meeting
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
