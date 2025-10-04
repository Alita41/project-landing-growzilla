import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens if you don't deliver 5 meetings?",
    answer: "You don't pay. Our performance-based model ensures accountability.",
  },
  {
    question: "Are campaigns tailored to my niche?",
    answer: "Every strategy is customized to your Ideal Customer Profile (ICP) and business goals.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All systems comply with major data privacy laws and security standards.",
  },
  {
    question: "Can I start small?",
    answer: "Absolutely. We have scalable options — from campaign-only plans to full automation.",
  },
  {
    question: "How soon can we start?",
    answer: "Onboarding typically takes 3–5 days before campaigns go live.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions? Let's Clear Them Up.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
