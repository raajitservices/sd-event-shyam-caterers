import { Mail, PhoneCall, MapPin } from 'lucide-react';
import Navbar from './NavBar';

const Contact = () => {
  return (
    <div><Navbar></Navbar>
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600">
            Have a question or want to work with us? Fill out the form or reach us directly.
          </p>

          <div className="flex items-start gap-4">
            <PhoneCall className="text-primary" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+91 7976105911</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">contact@sdevent.in</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-primary" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">Plot no.A7murti nagar meenawala sirsi road jaipur</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              Instagram
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Your Name" />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-2" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea className="w-full border border-gray-300 rounded-md p-2" rows={4} placeholder="Type your message..." />
          </div>

          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
