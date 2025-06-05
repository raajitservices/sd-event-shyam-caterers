import { Mail, PhoneCall, MapPin } from 'lucide-react';
import Navbar from './NavBar';
import{
      
        Facebook,
  Instagram,
  MessageCircleMore
} from 'lucide-react';


const Contact = () => {
  return (
    <div><Navbar></Navbar>
    <section className="px-6 py-16 bg-gray-100 md:px-20">
      <h2 className="mb-8 text-4xl font-bold text-center">Contact Us</h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
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
              <p className="text-gray-600">sdevent1998@gmail.com</p>
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
          <div className="flex gap-20 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-blue-600 transition-colors hover:text-blue-800" />
      
          </a>
                    <a href="https://www.instagram.com/s.d.events/profilecard/?igsh=ZWxzeml3bXA3YWtk" target="_blank" rel="noopener noreferrer">
               <Instagram size={24} className="text-pink-500 transition-colors hover:text-pink-700" />
  </a>
           <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          <MessageCircleMore size={24} className="text-green-600 transition-colors hover:text-green-800" />
             </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-6 space-y-4 bg-white shadow-md rounded-xl">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
          </div>
    <div>
      <input
  type="tel"
  maxLength={10}
  pattern="[0-9]{10}"
  required
  placeholder="Enter Number"
  
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length <= 10) {
   
    }
  }}
     className="w-full p-2 border rounded" />
     </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={4} placeholder="Type your message..." />
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
