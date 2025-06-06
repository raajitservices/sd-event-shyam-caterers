// src/components/TeamSection.tsx
import React from 'react';
import teamMembers from '../data/TeamData';
import Navbar from '../components/NavBar';

const TeamSection = () => {
  return (
    <section className=" flex py-20 bg-gradient-to-b from-white to-indigo-50" id="team">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">Meet the Team</h2>
        <p className="text-gray-600 mb-12">
          Our experienced professionals bring your vision to life with passion and precision.
        </p>

       <div className=" md:grid-cols-3 flex ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white  justify-center  rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-100"
              />
              <h3 className="text-xl font-semibold text-indigo-700">{member.name}</h3>
              <p className="text-sm text-indigo-500">{member.role}</p>
              <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
