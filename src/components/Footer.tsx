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
    <footer className="bg-gradient-to-r from-indigo-800 via-pink-700 to-purple-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SD Event & Shyam Catering</h3>
          <p>We bring your dream events to life with elegance and taste.</p>
          <div className="mt-4 space-y-1">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Plot no.A7murti nagar meenawala sirsi road jaipur</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={16} /> <span>+91 7976105911</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>contact@sdcatering.com</span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Our Team</h4>
          <ul className="space-y-1">
            <li>👤 Founder: Rakesh Sharma</li>
            <li>👥 Co-Founder: Deepak Verma</li>
            <li>🎬 Producer: Aarti Patel</li>
            <li>🏢 Co-Office: Shubham Enterprises</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/home" className="hover:text-yellow-200">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-200">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-200">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-yellow-200">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="hover:text-yellow-200" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="hover:text-yellow-200" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="hover:text-yellow-200" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="hover:text-yellow-200" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="hover:text-yellow-200" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} SD Event & Shyam Catering. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
