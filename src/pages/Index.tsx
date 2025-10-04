import Navbar from "@/components/Navbar";
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
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <SocialProof />
      <Problem />
      <div id="features">
        <Value />
      </div>
      <Process />
      <div id="testimonials">
        <Testimonials />
      </div>
      <FAQ />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
