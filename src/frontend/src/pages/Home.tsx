import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { useFishScrollAnimation } from '@/hooks/useFishScrollAnimation';
import { tournaments } from '@/data/tournaments';
import { getNextUpcomingTournament } from '@/utils/tournamentHelpers';
import MembershipCostModal from '@/components/MembershipCostModal';

export default function Home() {
  const { isLoading } = useImagePreloader();
  const nextTournament = getNextUpcomingTournament(tournaments);
  const fishAnimation = useFishScrollAnimation();
  const [costModalOpen, setCostModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoinClick = () => {
    setCostModalOpen(true);
  };

  const handleContinueToForm = () => {
    setCostModalOpen(false);
    navigate({ to: '/join' });
  };

  const handleFAQClick = () => {
    setCostModalOpen(false);
    navigate({ to: '/faq' });
  };

  return (
    <>
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

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                    onClick={handleJoinClick}
                  >
                    Join the Club
                  </Button>
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
                    <p className="text-lg text-muted-foreground text-center">
                      No upcoming tournaments scheduled at this time. Check back soon!
                    </p>
                    <div className="flex justify-center">
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

        {/* Sponsor Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Sponsors
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're grateful for the support of our sponsors who help make our tournaments and club activities possible.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm w-full max-w-md">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Wild Wear America</h3>
                  <p className="text-muted-foreground mb-4">Official merchandise partner</p>
                  <a 
                    href="https://wildwearamerica.com/benningbassclub2021/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="font-semibold">
                      Visit Store
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Join?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're an experienced angler or just getting started, the Benning Bass Club welcomes you. Join us for competitive tournaments, camaraderie, and a shared passion for bass fishing.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={handleJoinClick}
              >
                Join the Club Today
              </Button>
            </div>
          </div>
        </section>
      </div>

      <MembershipCostModal
        isOpen={costModalOpen}
        onOpenChange={setCostModalOpen}
        onContinue={handleContinueToForm}
        onFAQClick={handleFAQClick}
      />
    </>
  );
}
