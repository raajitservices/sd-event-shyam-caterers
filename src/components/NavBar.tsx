// src/components/NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import logo1 from '../asset/logo1.jpg'; // Adjust the path as necessary
import logo2 from '../asset/logo2.png'; // Adjust the path as necessary


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full font-sans shadow-xl bg-gradient-to-r from-indigo-700 via-pink-600 to-purple-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* logo */}
         <Link to="/" className="flex items-center gap-3 text-xl font-extrabold tracking-wide text-white transition md:text-2xl hover:opacity-90">
  <div className="flex items-center space-x-2">
    {/* Logo 1 */}
    <img
      src={logo1}
      alt="Logo 1"
      className="w-auto h-10 transition duration-300 ease-in-out rounded-full shadow-md ring- ring-black/20 hover:ring-yellow-300"
      style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    />

    {/* Brand Text & Logo 2 */}
    <div className="items-center hidden space-x-1 sm:flex">
      <span className="text-yellow-200">SD Event</span>
      <span className="text-white">&</span>
      <span className="text-purple-200">Shree Shyam Food Caterers</span>
<div className="hidden lg:block">

      <img
        src={logo2}
        alt="Logo 2"
        className="w-auto h-10  rounded-full shadow-md ring-1 ring-white"
      />
    </div>
  </div>
  </div>
</Link>


          {/* desktop menu */}
          <div className="items-center hidden space-x-5 md:flex">

            <Link to="/" className="font-medium text-white transition hover:text-yellow-200">
              Home
            </Link>

            {/* Event dropdown (desktop) */}
            <div
              className="relative"
               onClick={() => setEventOpen(true)}
               onMouseEnter={() => setEventOpen(true)}
               onMouseLeave={() => setEventOpen(false)}
            >
              <button className="flex items-center font-medium text-white hover:text-yellow-200">
                Event
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {eventOpen && (
                <Link
                  to="/all-events"
                  className="absolute left-0 z-50 py-2 mt-2 text-indigo-700 bg-white shadow-lg w-52 rounded-xl"
                >
                  <div className="px-4 py-2 hover:bg-indigo-100">Weddings</div>
                  <div className="px-4 py-2 hover:bg-indigo-100">Corporate</div>
                  <div className="px-4 py-2 hover:bg-indigo-100">Concerts</div>
                </Link>
              )}
            </div>

            {/* Catering dropdown (desktop) */}
            <div
              className="relative"
              onClick={() => setCateringOpen(true)}
              onMouseEnter={() => setCateringOpen(true)}
              onMouseLeave={() => setCateringOpen(false)}
            >
              <button className="flex items-center font-medium text-white hover:text-yellow-200">
                Catering
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {cateringOpen && (
                <Link
                  to="/all-catering"
                  className="absolute left-0 z-50 py-2 mt-2 text-purple-700 bg-white shadow-lg w-52 rounded-xl"
                >
                  <div className="px-4 py-2 hover:bg-purple-100">Veg</div>
                  <div className="px-4 py-2 hover:bg-purple-100">Non-Veg</div>
                  <div className="px-4 py-2 hover:bg-purple-100">Snacks</div>
                  <div className="px-4 py-2 hover:bg-purple-100">Packages</div>
                </Link>
              )}
            </div>

            {/* More dropdown */}
            <div
              className="relative"
              onClick={() => setMenuOpen(true)}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="flex items-center font-medium text-white hover:text-yellow-200">
                More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute left-0 z-50 py-2 mt-2 text-gray-700 bg-white shadow-lg w-52 rounded-xl">
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                  <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">Meet The Team</Link>
                  <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="font-medium text-white transition hover:text-yellow-200">About</Link>
            <Link to="/contact" className="font-medium text-white transition hover:text-yellow-200">Contact</Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="px-4 pb-4 space-y-2 bg-indigo-800 md:hidden">

          <Link to="/" className="block py-2 text-white hover:text-yellow-200">Home</Link>
{/* Events mobile dropdown */}
<div>
  <button
    onClick={() => setEventOpen(!eventOpen)}
    className="flex items-center justify-between w-full py-2 text-left text-white"
  >
    Events
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
    </svg>
  </button>
  {eventOpen && (
    <div className="pl-4 space-y-1">
      <Link to="/all-events#weddings" className="block py-1 text-white hover:text-gray-200">Weddings</Link>
      <Link to="/all-events#corporate" className="block py-1 text-white hover:text-gray-200">Corporate</Link>
      <Link to="/all-events#concerts" className="block py-1 text-white hover:text-gray-200">Concerts</Link>
    </div>
  )}
</div>

{/* Catering mobile dropdown */}
<div>
  <button
    onClick={() => setCateringOpen(!cateringOpen)}
    className="flex items-center justify-between w-full py-2 text-left text-white"
  >
    Catering
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
    </svg>
  </button>
  {cateringOpen && (
    <div className="pl-4 space-y-1">
      <Link to="/all-catering#veg" className="block py-1 text-white hover:text-gray-200">Veg</Link>
      <Link to="/all-catering#nonveg" className="block py-1 text-white hover:text-gray-200">Non-Veg</Link>
      <Link to="/all-catering#snacks" className="block py-1 text-white hover:text-gray-200">Snacks</Link>
      <Link to="/all-catering#packages" className="block py-1 text-white hover:text-gray-200">Packages</Link>
    </div>
  )}
</div>


          {/* More submenu */}
          <div>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center justify-between w-full py-2 text-left text-white"
            >
              More
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {moreOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/gallery" className="block py-1 text-white hover:text-gray-200">Gallery</Link>
                <Link to="/testimonials" className="block py-1 text-white hover:text-gray-200">Testimonials</Link>
                <Link to="/team" className="block py-1 text-white hover:text-gray-200">Meet The Team</Link>
                <Link to="/faqs" className="block py-1 text-white hover:text-gray-200">FAQ</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="block py-2 text-white hover:text-yellow-200">About</Link>
          <Link to="/contact" className="block py-2 text-white hover:text-yellow-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
