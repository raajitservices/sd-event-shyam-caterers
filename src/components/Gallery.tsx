// src/components/Gallery.tsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';


interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
   
    <div className="my-20 px-4 md:px-8 lg:px-16">
      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img}
              alt={`Gallery Image ${i + 1}`}
              className="object-cover w-full h-60 md:h-23 lg:h-80 transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button className="absolute top-5 right-5 text-white" onClick={closeLightbox}>
            <X size={32} />
          </button>

          <button className="absolute left-5 text-white" onClick={goPrev}>
            <ChevronLeft size={40} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Full Image ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />

          <button className="absolute right-5 text-white" onClick={goNext}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Gallery;
