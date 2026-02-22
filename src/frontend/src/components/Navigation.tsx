import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tournament Schedule', path: '/schedule' },
    { name: 'Standings', path: '/top10' },
    { name: 'Photo Gallery', path: '/gallery' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex md:items-center md:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wildwearamerica.com/benningbassclub2021/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Merchandise
            </a>
            <a 
              href="https://www.facebook.com/share/18DXqNzVGb/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <Link to="/join">
              <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Join
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wildwearamerica.com/benningbassclub2021/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Merchandise
            </a>
            <a 
              href="https://www.facebook.com/share/18DXqNzVGb/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Facebook
            </a>
            <div className="px-3 pt-2">
              <Link to="/join" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Join
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
