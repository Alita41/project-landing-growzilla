import { Button } from "@/components/ui/button";
import growzillaLogo from "@/assets/growzilla-logo.png";

const CALENDAR_LINK = "https://calendly.com/growzilla";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src={growzillaLogo} 
              alt="GrowZilla Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">GrowZilla</span>
          </div>
          
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button 
              variant="cta"
              size="default"
              onClick={() => window.open(CALENDAR_LINK, '_blank')}
            >
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
