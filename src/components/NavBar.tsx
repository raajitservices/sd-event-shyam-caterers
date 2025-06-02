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
    <nav className="bg-gradient-to-r from-indigo-700 via-pink-600 to-purple-700 shadow-xl fixed top-0 w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* logo */}
         <Link to="/" className="flex items-center gap-3 text-white font-extrabold text-xl md:text-2xl tracking-wide hover:opacity-90 transition">
  <div className="flex items-center space-x-3">
    {/* Logo 1 */}
    <img
      src={logo1}
      alt="Logo 1"
      className="h-10 w-auto rounded-full shadow-md ring- ring-black/20 hover:ring-yellow-300 transition duration-300 ease-in-out"
      style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    />

    {/* Brand Text & Logo 2 */}
    <div className="hidden sm:flex items-center space-x-2">
      <span className="text-yellow-200">SD Event</span>
      <span className="text-white">&</span>
      <span className="text-purple-200">Shree Shyam Food Caterers</span>

      <img
        src={logo2}
        alt="Logo 2"
        className="h-10 w-auto rounded-full shadow-md ring-1 ring-white"
      />
    </div>
  </div>
</Link>


          {/* desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">

            <Link to="/" className="text-white hover:text-yellow-200 font-medium transition">
              Home
            </Link>

            {/* Event dropdown (desktop) */}
            <div
              className="relative"
               onClick={() => setEventOpen(true)}
               onMouseEnter={() => setEventOpen(true)}
               onMouseLeave={() => setEventOpen(false)}
            >
              <button className="text-white hover:text-yellow-200 font-medium flex items-center">
                Event
                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {eventOpen && (
                <Link
                  to="/all-events"
                  className="absolute left-0 mt-2 w-52 bg-white text-indigo-700 rounded-xl shadow-lg py-2 z-50"
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
              <button className="text-white hover:text-yellow-200 font-medium flex items-center">
                Catering
                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {cateringOpen && (
                <Link
                  to="/all-catering"
                  className="absolute left-0 mt-2 w-52 bg-white text-purple-700 rounded-xl shadow-lg py-2 z-50"
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
              <button className="text-white hover:text-yellow-200 font-medium flex items-center">
                More
                <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white text-gray-700 rounded-xl shadow-lg py-2 z-50">
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                  <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">Meet The Team</Link>
                  <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-yellow-200 font-medium transition">About</Link>
            <Link to="/contact" className="text-white hover:text-yellow-200 font-medium transition">Contact</Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
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
        <div className="md:hidden px-4 pb-4 bg-indigo-800 space-y-2">

          <Link to="/" className="block py-2 text-white hover:text-yellow-200">Home</Link>

          {/* Events mobile link */}
          <Link to="/all-events" className="block py-2 text-white hover:text-yellow-200">
            Events
          </Link>

          {/* Catering mobile link */}
          <Link to="/all-catering" className="block py-2 text-white hover:text-yellow-200">
            Catering
          </Link>

          {/* More submenu */}
          <div>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="w-full text-left py-2 text-white flex items-center justify-between"
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
