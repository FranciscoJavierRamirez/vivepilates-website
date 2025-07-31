import { useState, useEffect } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    alt: string;
    title: string;
    category?: string;
  }>;
  currentIndex: number;
}

export default function GalleryModal({ isOpen, onClose, images, currentIndex }: GalleryModalProps) {
  const [current, setCurrent] = useState(currentIndex);

  useEffect(() => {
    setCurrent(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && current > 0) {
        setCurrent(current - 1);
      } else if (e.key === 'ArrowRight' && current < images.length - 1) {
        setCurrent(current + 1);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, current, images.length, onClose]);

  if (!isOpen) return null;

  const currentImage = images[current];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
    >
      <div 
        className="relative max-w-4xl max-h-screen mx-4 bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--coral-primary)]"
          aria-label="Cerrar galería"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation arrows */}
        {current > 0 && (
          <button
            onClick={() => setCurrent(current - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--coral-primary)]"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {current < images.length - 1 && (
          <button
            onClick={() => setCurrent(current + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--coral-primary)]"
            aria-label="Siguiente imagen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-96 md:h-[32rem] object-cover"
            loading="eager"
          />
        </div>

        {/* Image info */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-[var(--deep-coral)] mb-2">
            {currentImage.title}
          </h3>
          <p className="text-[var(--charcoal-gray)]">
            {currentImage.alt}
          </p>
          
          {/* Image counter */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-[var(--sage-green)]">
              {current + 1} de {images.length}
            </span>
            
            {/* Thumbnails navigation */}
            <div className="flex space-x-2 overflow-x-auto max-w-xs">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-12 h-8 rounded border-2 transition-colors duration-200 ${
                    index === current 
                      ? 'border-[var(--coral-primary)]' 
                      : 'border-gray-300 hover:border-[var(--warm-gold)]'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                >
                  <img
                    src={images[index].src}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}