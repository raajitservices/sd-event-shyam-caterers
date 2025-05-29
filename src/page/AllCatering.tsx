// src/pages/AllCatering.tsx
import React, { useState } from 'react';
import { cateringCards } from '../data/event';
import Card from '../components/card';        // make sure C is capital in the filename!
import Navbar from '../components/NavBar';
import BookingForm from '../page/BookingFrom'; // fix path if different


const AllCatering: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [bookingInfo, setBookingInfo] = useState<{ service: 'catering'; type: string } | null>(null);

  const handleBookingClick = (type: string) => {
    setBookingInfo({ service: 'catering', type });
    setShowBooking(true);
  };

  return (
      <div><Navbar />
    <div className="px-4 py-16 mx-auto max-w-7xl">
      

      <h2 className="mb-10 text-4xl font-bold text-center text-purple-700">
        All Catering Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cateringCards.map((card, index) => (
          <Card key={index} {...card}>
            <button
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              onClick={() => handleBookingClick(card.title)}
            >
              Book&nbsp;Now
            </button>
          </Card>
        ))}
      </div>

     
           {showBooking && bookingInfo && (
             <BookingForm
               onClose={() => setShowBooking(false)}
            
             />
           )}
     
    </div>
    </div>
  );
};

export default AllCatering;
