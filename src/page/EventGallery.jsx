// src/pages/GalleryPage.tsx
import React from 'react';
import Gallery from '../components/Gallery';

 import Navbar from '../components/NavBar';

// Example images array — aap apne actual images ke paths de sakte ho
const cateringImages = [
 ' https://i.pinimg.com/736x/aa/f0/30/aaf030a8afeb08daf9fb28e8089059d8.jpg',
  'https://i.pinimg.com/736x/fe/b9/e7/feb9e77f79f43bbad4998ba67967c988.jpg',
  'https://i.pinimg.com/736x/de/a0/16/dea0166c26c6024890f7fcae17c3a7fb.jpg',
  'https://i.pinimg.com/736x/5c/54/91/5c549130a75e34bfab1a2c0d2aa40ecb.jpg',
  'https://i.pinimg.com/736x/35/b4/2f/35b42f703fd6a4e116dda1a64e51b4a5.jpg',
  'https://i.pinimg.com/736x/ef/6c/b4/ef6cb4f554d5a9bf920087992222e105.jpg',
'https://i.pinimg.com/736x/90/76/ff/9076ffe25767c5003290da18ff86b26b.jpg',
'https://i.pinimg.com/736x/87/ab/7c/87ab7c566150753a7535215b7e2b2723.jpg'
];

const eventImages = [
  'https://i.pinimg.com/736x/68/65/f9/6865f921f742886493cf95084041ace6.jpg',
  'https://i.pinimg.com/736x/32/3c/23/323c23293ea237f7e67665d2c0c8c907.jpg',
  'https://i.pinimg.com/736x/32/4d/18/324d18a1bdc84b07be59ffcd1225742d.jpg',
  'https://i.pinimg.com/736x/c1/56/c8/c156c80fef108932227eae5af20e7b4f.jpg',
  'https://i.pinimg.com/736x/c8/11/49/c81149cdb554837cbd3ea2eab8df2c01.jpg',
  'https://i.pinimg.com/736x/f4/7b/6e/f47b6ecbde9cfee596cb2ebf7debc11e.jpg',
  'https://i.pinimg.com/736x/38/bd/f6/38bdf6664f4539f8a7ced74697789108.jpg',
  'https://i.pinimg.com/736x/4c/3c/2a/4c3c2afa3be103f5458d7019c85913c5.jpg',
];

const GalleryPage = () => {
  return (
       <div> <Navbar />
    <div className="px-6 py-12 max-w-7xl mx-auto">
        
      <h2 className="mb-8 text-4xl font-extrabold text-center text-indigo-700">
        Catering Gallery
      </h2>
      <Gallery images={cateringImages} />

      <h2 className="mb-8 mt-16 text-4xl font-extrabold text-center text-purple-700">
        Event Gallery
      </h2>
      <Gallery images={eventImages} />
 
    </div>
    </div>
  );
};

export default GalleryPage;
