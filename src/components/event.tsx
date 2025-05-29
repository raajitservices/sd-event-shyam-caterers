// src/components/Sections.tsx
import React from 'react';
import Card from './card';
import { eventCards, cateringCards } from '../data/event';
import { Link } from 'react-router-dom';

const Sections = () => {
  return (
    <div className="px-8 py-20 bg-gradient-to-b from-white via-indigo-100 to-white">
      <div className="mx-auto space-y-24 max-w-7xl">

        {/* Events Section */}
        <div id="events" className="text-center">
          <h2 className="mb-6 text-5xl font-extrabold text-indigo-700 tracking-tight">
            Unforgettable Events
          </h2>
          <p className="max-w-xl mx-auto mb-12 text-lg text-gray-700">
            From weddings to corporate galas, SD Event brings elegance, energy, and perfection to every moment.
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {eventCards.slice(0, 3).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <Link to="/all-events">
            <button className="px-8 py-3 mt-10 font-semibold text-white transition bg-indigo-600 rounded-2xl hover:bg-indigo-700 shadow-lg">
              See All Event Services
            </button>
          </Link>
        </div>

        {/* Catering Section */}
        <div id="catering" className="text-center">
          <h2 className="mb-6 text-5xl font-extrabold text-purple-700 tracking-tight">
            Delicious Catering by Shyam
          </h2>
          <p className="max-w-xl mx-auto mb-12 text-lg text-gray-700">
            Our catering service serves joy, tradition, and taste on every plate. Let food be the highlight of your event!
          </p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cateringCards.slice(0, 3).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <Link to="/all-catering">
            <button className="px-8 py-3 mt-10 font-semibold text-white transition bg-purple-600 rounded-2xl hover:bg-purple-700 shadow-lg">
              See All Catering Services
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Sections;
