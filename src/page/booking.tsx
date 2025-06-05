import React from 'react';
import { Gem, Star, Crown, Check } from 'lucide-react'
import { useState } from 'react';
import BookingForm from './BookingFrom'; // Adjust the import path as necessary

interface Plan {
  title: string;

  features: string[];
  icon: React.ReactElement;
  popular?: boolean;
  color: 'indigo' | 'pink' | 'purple';
}


const colorMap = {
  indigo: {
    border: 'border-indigo-200',
    bgFrom: 'from-indigo-500',
    bgTo: 'to-indigo-600',
    text: 'text-indigo-700',
    btnBg: 'bg-indigo-600',
    btnHover: 'hover:bg-indigo-700',
  },
  pink: {
    border: 'border-pink-200',
    bgFrom: 'from-pink-500',
    bgTo: 'to-pink-600',
    text: 'text-pink-700',
    btnBg: 'bg-pink-600',
    btnHover: 'hover:bg-pink-700',
  },
  purple: {
    border: 'border-purple-200',
    bgFrom: 'from-purple-500',
    bgTo: 'to-purple-600',
    text: 'text-purple-700',
    btnBg: 'bg-purple-600',
    btnHover: 'hover:bg-purple-700',
  },
};

const plans: Plan[] = [
  {
    title: 'Basic',
   
    features: ['Venue Setup', '2 Dishes', '1 Staff'],
    icon: <Gem size={36} />,
    color: 'indigo',
  },
  {
    title: 'Premium',
 
    features: ['Venue Setup', '5 Dishes', '2 Staff', 'Decoration'],
    icon: <Star size={36} />,
    popular: true,
    color: 'pink',
  },
  {
    title: 'Royal',
   
    features: ['Full Event Management', '10 Dishes', 'Live Counters', 'Full Decoration & Sound'],
    icon: <Crown size={36} />,
    color: 'purple',
  },
];

const PricingPlans: React.FC = () => {
   const [showBooking, setShowBooking] = useState(false);
  const [bookingInfo, setBookingInfo] = useState<{ service: 'catering'; type: string } | null>(null);

  const handleBookingClick = (type: string) => {
    setBookingInfo({ service: 'catering', type });
    setShowBooking(true);
  };
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-14">
          Flexible Pricing Plans
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ title,  features, icon, popular, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`relative rounded-3xl shadow-xl bg-white/60 backdrop-blur-lg ${c.border} overflow-hidden group transition-transform hover:-translate-y-2`}
              >
                {popular && (
                  <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                {/* Icon Header */}
                <div className={`flex justify-center py-6 bg-gradient-to-r ${c.bgFrom} ${c.bgTo} text-white`}>
                  {icon}
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold ${c.text}`}>{title}</h3>
                  <p className="mt-4 text-3xl font-extrabold text-gray-900">{}</p>

                  <ul className="mt-6 space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700">
                        <Check size={20} className="text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBookingClick(title)}
                    className={`${c.btnBg} ${c.btnHover} mt-8 w-full text-white py-3 rounded-xl font-semibold transition`}
                  >
                    Choose {title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
         {showBooking && bookingInfo && (
        <BookingForm
          onClose={() => setShowBooking(false)}
       
        />
      )}
      </div>
      
    </section>
  );
};

export default PricingPlans;
