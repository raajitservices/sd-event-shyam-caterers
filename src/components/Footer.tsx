import React from 'react';
import {Link} from 'react-router-dom'; // Ensure you have react-router-dom installed
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  PhoneCall,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 mt-16 text-white bg-gradient-to-r from-indigo-800 via-pink-700 to-purple-800">
      <div className="grid gap-10 px-6 mx-auto text-sm max-w-7xl md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">SD Event & Shyam Caterers</h3>
          <p>We bring your dream events to life with elegance and taste.</p>
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Plot no.A7murti nagar meenawala sirsi road jaipur</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={16} /> <span>+91 7976105911</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>sdevent1998@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h4 className="mb-3 text-lg font-semibold">Our Team</h4>
          <ul className="space-y-1">
            <li>👤 Founder: Dilip Singh Rathore</li>
            
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/*" className="hover:text-yellow-200">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-200">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-200">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-yellow-200">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="mb-3 text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="hover:text-yellow-200" /></a>
            <a href="https://www.instagram.com/s.d.events/profilecard/?igsh=ZWxzeml3bXA3YWtk" target="_blank" rel="noopener noreferrer"><Instagram className="hover:text-yellow-200" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="hover:text-yellow-200" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="hover:text-yellow-200" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="hover:text-yellow-200" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="pt-4 mt-10 text-xs text-center border-t border-white/20">
        © {new Date().getFullYear()} SD Event & Shyam Catering. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
