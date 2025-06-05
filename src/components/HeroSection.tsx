
import React, { useState } from 'react';

import Background from '../asset/background.jpg';
import BookingForm from '../page/BookingFrom'
 const HeroSection = () => {
  const[showForm, setShowForm]=useState(false);
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
          Making Your Events <br /> <span className="text-yellow-300">Unforgettable</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-white md:text-2xl drop-shadow">
          Delicious Moments with <span className="text-pink-300">Shyam Caterers...</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
           onClick={() => setShowForm(true)}
           className="px-6 py-3 font-bold text-indigo-900 transition duration-300 bg-yellow-400 shadow-lg hover:bg-yellow-500 rounded-xl"
         >
           Book Event
         </button>
         <button
           onClick={() => setShowForm(true)}
          className="px-6 py-3 font-bold text-pink-600 transition duration-300 bg-white shadow-lg hover:bg-gray-100 rounded-xl"
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
//       className="relative flex items-center justify-center h-screen bg-center bg-cover"
//       style={{ backgroundImage: `url(${Background})` }}
//     >
//       <div className="px-6 py-10 text-center text-white bg-black bg-opacity-60 rounded-xl">
//         <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Making Your Events Unforgettable</h1>
//         <p className="mb-6 text-lg md:text-xl">Delicious Moments with Shyam Catering</p>
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={() => setShowForm(true)}
//             className="px-6 py-3 font-bold text-pink-600 transition duration-300 bg-white shadow-lg hover:bg-gray-100 rounded-xl"
//           >
//             Book Event
//           </button>
//           <button
//             onClick={() => setShowForm(true)}
//             className="px-6 py-3 font-bold text-indigo-900 transition duration-300 bg-yellow-400 shadow-lg hover:bg-yellow-500 rounded-xl"
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
