import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Facebook, Instagram, MessageCircleMore } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Navbar from './NavBar';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactus'), {
        name,
        phone,
        email,
        message,
        createdAt: new Date()
      });
      setSuccess('Message sent successfully!');
      // Clear fields
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccess('Error sending message. Try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <section className="px-6 py-16 bg-gray-100 md:px-20">
        <h2 className="mb-8 text-4xl font-bold text-center">Contact Us</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600">Have a question or want to work with us? Fill out the form or reach us directly.</p>

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
                <p className="text-gray-600">sdevent1998@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-primary" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">Plot no.A7 murti nagar meenawala sirsi road jaipur</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-20 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} className="text-blue-600 transition-colors hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com/s.d.events/profilecard/?igsh=ZWxzeml3bXA3YWtk" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="text-pink-500 transition-colors hover:text-pink-700" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircleMore size={24} className="text-green-600 transition-colors hover:text-green-800" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white shadow-md rounded-xl">
            {success && <p className="text-green-600">{success}</p>}

            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 10) setPhone(value);
                }}
                maxLength={10}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Number"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                placeholder="Type your message..."
                required
              />
            </div>

            <button type="submit" className="px-4 py-2 text-white transition bg-black rounded hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
