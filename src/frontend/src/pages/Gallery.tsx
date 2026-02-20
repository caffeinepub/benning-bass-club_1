import { useState } from 'react';
import Lightbox from '@/components/Lightbox';

const galleryImages = [
  '/assets/fish 1.jpg',
  '/assets/fish 2.jpg',
  '/assets/fish 3.jpg',
  '/assets/fish 4.jpg',
  '/assets/fish 5.jpg',
  '/assets/fish 6.jpg',
  '/assets/fish 7.jpg',
  '/assets/fish 8.jpg',
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h1>
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Fishing photo ${index + 1}`}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNavigate={navigateToImage}
        />
      )}
    </div>
  );
}
