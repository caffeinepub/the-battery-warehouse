import { Battery } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname || 'battery-warehouse');
    } catch {
      return 'battery-warehouse';
    }
  };

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/generated/logo-icon.dim_120x120.png" 
                alt="The Battery Warehouse Logo" 
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">The Battery Warehouse</span>
                <span className="text-xs text-muted-foreground">Authorized Eastman Dealer</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Your trusted source for premium Eastman inverters and high-quality batteries 
              for cars and trucks at unbeatable prices.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Eastman Inverters</li>
              <li className="text-sm text-muted-foreground">Car Batteries</li>
              <li className="text-sm text-muted-foreground">Truck Batteries</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} The Battery Warehouse. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Battery className="h-4 w-4 text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
