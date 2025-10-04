import { Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import growzillaLogo from "@/assets/growzilla-logo.png";

const CALENDAR_LINK = "https://api.leadconnectorhq.com/widget/bookings/growzilla";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Scale Your Pipeline?
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's turn your outreach into a predictable revenue engine. Book a strategy call today.
          </p>
          <Button 
            size="lg"
            variant="cta"
            onClick={() => window.open(CALENDAR_LINK, '_blank')}
          >
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="grid md:grid-cols-12 gap-8 mb-6">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src={growzillaLogo} 
                alt="GrowZilla Logo" 
                className="h-7 w-auto"
              />
              <h3 className="text-xl font-bold">GrowZilla</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered lead generation that fills your calendar with qualified B2B meetings.
            </p>
            <Button 
              size="default"
              variant="cta"
              onClick={() => window.open(CALENDAR_LINK, '_blank')}
              className="mb-4"
            >
              Book a Call
            </Button>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@growzilla.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@growzilla.com
              </a>
              <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 GrowZilla. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
