import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { useFishScrollAnimation } from '@/hooks/useFishScrollAnimation';
import { useAverageCatchSize } from '@/hooks/useAverageCatchSize';
import { tournaments } from '@/data/tournaments';
import { getNextUpcomingTournament } from '@/utils/tournamentHelpers';
import { Fish } from 'lucide-react';

export default function Home() {
  const { isLoading } = useImagePreloader();
  const nextTournament = getNextUpcomingTournament(tournaments);
  const fishAnimation = useFishScrollAnimation();
  const { averageCatchSize } = useAverageCatchSize();

  return (
    <div className="flex flex-col">
      {/* Floating Bass Fish - Left Side - Animated on Scroll */}
      <div 
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden lg:block"
        style={{
          opacity: fishAnimation.opacity,
          transform: `translateY(calc(-50% + ${fishAnimation.translateY}px)) scaleX(${fishAnimation.scaleX})`,
          transition: 'transform 0.8s ease-in-out, opacity 0.5s ease-out',
        }}
      >
        <img 
          src="/assets/image-11.png" 
          alt="" 
          className="w-32 xl:w-40 h-auto"
          aria-hidden="true"
        />
      </div>

      {/* Floating Bass Fish - Right Side (Mirrored) - Animated on Scroll */}
      <div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden lg:block"
        style={{
          opacity: fishAnimation.opacity,
          transform: `translateY(calc(-50% + ${fishAnimation.translateY}px)) scaleX(${-fishAnimation.scaleX})`,
          transition: 'transform 0.8s ease-in-out, opacity 0.5s ease-out',
        }}
      >
        <img 
          src="/assets/image-11.png" 
          alt="" 
          className="w-32 xl:w-40 h-auto"
          aria-hidden="true"
        />
      </div>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-background"
        style={{ minHeight: 'clamp(420px, 58vh, 700px)' }}
      >
        {/* Left Flag Motif */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 pointer-events-none">
          <img 
            src="/assets/left_flag.png" 
            alt="" 
            className={`h-full w-full object-cover opacity-15 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-15'}`}
            aria-hidden="true"
          />
        </div>

        {/* Right Flag Motif */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 pointer-events-none">
          <img 
            src="/assets/right_flag.png" 
            alt="" 
            className={`h-full w-full object-cover opacity-15 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-15'}`}
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center py-12">
          <div className="max-w-3xl mx-auto w-full">
            {/* Content Card with Subtle Background */}
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-sm border border-border/50">
              {/* Club Logo */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/Fish Edit.png" 
                  alt="Benning Bass Club" 
                  className={`w-full max-w-xl sm:max-w-2xl h-auto transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
              </div>

              {/* Headline */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center text-foreground mb-4 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Benning Bass Club
              </h1>

              {/* Subtext */}
              <p className={`text-lg sm:text-xl text-center text-muted-foreground leading-relaxed mb-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                A B.A.S.S.-affiliated club in the Georgia B.A.S.S. Nation for active-duty military, retirees, and dependents.
              </p>

              {/* Average Catch Size Statistic */}
              {averageCatchSize && (
                <div className={`flex items-center justify-center gap-3 mb-6 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
                    <Fish className="w-5 h-5 text-primary" />
                    <div className="text-center">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Average Catch Size</p>
                      <p className="text-2xl font-bold text-primary">{averageCatchSize} lbs</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Link to="/join" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                    Join the Club
                  </Button>
                </Link>
                <Link to="/schedule" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold px-8">
                    Tournament Schedule
                  </Button>
                </Link>
                <Link to="/gallery" className="w-full sm:w-auto">
                  <Button size="lg" variant="ghost" className="w-full sm:w-auto font-semibold px-8">
                    Photo Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/assets/Group fish-3.jpg" 
              alt="Benning Bass Club team at tournament" 
              className="w-full h-auto rounded-lg shadow-lg border border-border"
            />
          </div>
        </div>
      </section>

      {/* About the Club Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About the Club
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Benning Bass Club is a proud member of the Georgia B.A.S.S. Nation and welcomes active-duty military personnel, retirees, and their dependents. We're dedicated to promoting bass fishing through competitive tournaments, conservation efforts, and building a strong community of anglers who share a passion for the sport.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Upcoming Tournaments
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
              {nextTournament ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Next Tournament</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Date</p>
                        <p className="text-lg font-medium text-foreground">{nextTournament.date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Lake</p>
                        <p className="text-lg font-medium text-foreground">{nextTournament.lake}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Ramp</p>
                        <p className="text-lg font-medium text-foreground">{nextTournament.ramp}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Draw Date</p>
                        <p className="text-lg font-medium text-foreground">{nextTournament.drawDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link to="/schedule">
                      <Button size="lg" variant="outline" className="font-semibold">
                        View Full Schedule
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Next Tournament</h3>
                    <p className="text-muted-foreground">No upcoming tournaments scheduled at this time. Check back soon!</p>
                  </div>
                  <div className="pt-4">
                    <Link to="/schedule">
                      <Button size="lg" variant="outline" className="font-semibold">
                        View Full Schedule
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Membership
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join our community of passionate anglers! Membership is open to active-duty military, retirees, and dependents. Enjoy competitive tournaments, camaraderie, and the thrill of bass fishing on Georgia's finest lakes.
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Highlights Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Photo Highlights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {['fish 1.jpg', 'fish 2.jpg', 'fish 3.jpg', 'fish 4.jpg', 'fish 5.jpg', 'fish 6.jpg'].map((photo, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={`/assets/${photo}`} 
                    alt={`Fishing highlight ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="font-semibold">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proud Sponsor Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Proud Sponsor
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              We're grateful for the support of our sponsors who help make our tournaments and events possible.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://summerlandoutdoors.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Summerland Outdoors website"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/assets/image-8.png" 
                  alt="Summerland Outdoors" 
                  className="max-w-xs sm:max-w-sm md:max-w-md h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
