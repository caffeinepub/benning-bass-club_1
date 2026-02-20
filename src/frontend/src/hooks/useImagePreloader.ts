import { useEffect, useState } from 'react';

const HOME_PAGE_IMAGES = [
  '/assets/left_flag.png',
  '/assets/right_flag.png',
  '/assets/image-2.png',
];

let preloadedImages: HTMLImageElement[] = [];
let isPreloaded = false;

export function useImagePreloader() {
  const [isLoading, setIsLoading] = useState(!isPreloaded);

  useEffect(() => {
    if (isPreloaded) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === HOME_PAGE_IMAGES.length && isMounted) {
        isPreloaded = true;
        preloadedImages = images;
        setIsLoading(false);
      }
    };

    HOME_PAGE_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Still mark as loaded even on error to prevent hanging
      img.src = src;
      images.push(img);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading };
}
