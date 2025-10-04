import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Value from "@/components/Value";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <Problem />
      <Value />
      <Process />
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
