import { useState, useEffect } from 'react';

interface FishAnimationState {
  opacity: number;
  translateY: number;
  isVisible: boolean;
  scaleX: number;
}

export function useFishScrollAnimation() {
  const [animationState, setAnimationState] = useState<FishAnimationState>({
    opacity: 0,
    translateY: 300,
    isVisible: false,
    scaleX: 1,
  });

  useEffect(() => {
    let flipInterval: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.58; // Approximate hero section height
      const startFadeIn = heroHeight * 0.5; // Start showing fish halfway through hero
      const fullyVisible = heroHeight * 0.9; // Fully visible near end of hero
      
      if (scrollY < startFadeIn) {
        // Hidden in hero section
        setAnimationState(prev => ({
          ...prev,
          opacity: 0,
          translateY: 300,
          isVisible: false,
        }));
      } else if (scrollY >= startFadeIn && scrollY < fullyVisible) {
        // Transitioning - floating upward dramatically
        const progress = (scrollY - startFadeIn) / (fullyVisible - startFadeIn);
        setAnimationState(prev => ({
          ...prev,
          opacity: progress,
          translateY: 300 - (progress * 300),
          isVisible: true,
        }));
      } else {
        // Fully visible and positioned
        setAnimationState(prev => ({
          ...prev,
          opacity: 1,
          translateY: 0,
          isVisible: true,
        }));
      }
    };

    // Time-based flip every 2 seconds
    const startFlipInterval = () => {
      flipInterval = setInterval(() => {
        setAnimationState(prev => ({
          ...prev,
          scaleX: prev.scaleX === 1 ? -1 : 1,
        }));
      }, 2000);
    };

    // Initial check
    handleScroll();
    startFlipInterval();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (flipInterval) {
        clearInterval(flipInterval);
      }
    };
  }, []);

  return animationState;
}
