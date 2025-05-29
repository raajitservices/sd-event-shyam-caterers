
import React, { useState } from 'react';

import Background from '../asset/background.jpg';
import BookingForm from '../page/BookingFrom'
 const HeroSection = () => {
  const[showForm, setShowForm]=useState(false);
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Making Your Events <br /> <span className="text-yellow-300">Unforgettable</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white font-medium drop-shadow">
          Delicious Moments with <span className="text-pink-300">Shyam Catering</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button
           onClick={() => setShowForm(true)}
           className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
         >
           Book Event
         </button>
         <button
           onClick={() => setShowForm(true)}
          className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
         >
           Hire Catering
         </button>
        </div>
      </div>
 {showForm && <BookingForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default HeroSection;
// components/HeroSection.tsx
// import React, { useState } from 'react';
// import Background from '../asset/background.jpg';
// import BookingForm from '../page/BookingFrom';

// const HeroSection = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <section
//       className="h-screen bg-cover bg-center relative flex items-center justify-center"
//       style={{ backgroundImage: `url(${Background})` }}
//     >
//       <div className="bg-black bg-opacity-60 text-center text-white px-6 py-10 rounded-xl">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Making Your Events Unforgettable</h1>
//         <p className="text-lg md:text-xl mb-6">Delicious Moments with Shyam Catering</p>
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
//           >
//             Book Event
//           </button>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
//           >
//             Hire Catering
//           </button>
//         </div>
//       </div>

//       {showForm && <BookingForm onClose={() => setShowForm(false)} />}
//     </section>
//   );
// };

// export default HeroSection;
