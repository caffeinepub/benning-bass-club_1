import { Link } from '@tanstack/react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Benning Bass Club</h3>
            <p className="text-sm text-muted-foreground">
              A B.A.S.S.-affiliated club serving military personnel and their families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.facebook.com/share/18DXqNzVGb/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Proud Sponsor Support</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-center items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Benning Bass Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
