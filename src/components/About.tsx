import Navbar from "./NavBar";
import{
      
        Facebook,
  Instagram,
  MessageCircleMore
} from 'lucide-react';

const About = () => {
  return (
      <div><Navbar></Navbar>
    <section className="px-6 py-16 bg-white md:px-20">
      <div className="max-w-5xl mx-auto text-center transition-shadow duration-300 ">
        <h2 className="mb-6 text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          <strong>SD Event & Shyam Caterers</strong> is a trusted name in Rajasthan for delivering unforgettable events and delicious catering experiences. 
          We specialize in organizing weddings, parties, corporate events, and cultural gatherings with a personalized touch.
        </p>
      
        <div className="grid gap-6 mt-12 text-left md:grid-cols-3">
          <div className="p-6 bg-gray-100 shadow rounded-xl hover:scale-80 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold hover:scale-105">Founder</h3>
            <p className="text-gray-600">Mr. Dilip Singh Rathore, with over 10 years of experience in the event and hospitality industry, leads our vision with passion and creativity.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow rounded-xl hover:scale-80 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
           
            <p className="text-gray-600">We aim to deliver vibrant and flawless event experiences by combining innovation, style, and tradition — making every moment memorable..</p>
            <div className="flex justify-center gap-6 mt-10 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-blue-600 transition-colors hover:text-blue-800" />
          </a>
                 <a href="https://www.instagram.com/s.d.events/profilecard/?igsh=ZWxzeml3bXA3YWtk" target="_blank" rel="noopener noreferrer">
               <Instagram size={24} className="text-pink-500 transition-colors hover:text-pink-700" />
  </a>
           <a href="https://wa.me/message/HFQHWZEOVB6BM1" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          <MessageCircleMore size={24} className="text-green-600 transition-colors hover:text-green-800" />
             </a>
           
       
        </div>
          </div>
          <div className="p-6 bg-gray-100 shadow rounded-xl hover:scale-80 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Production & Coordination</h3>
            <p className="text-gray-600">Our team of producers, planners, and coordinators ensures that every event runs smoothly and exceeds expectations.</p>
          </div>
        </div>

        {/* <div className="mt-12">
          <h3 className="mb-4 text-2xl font-bold">Our Mission </h3>
          <p className="max-w-3xl mx-auto text-gray-600">
          We aim to deliver vibrant and flawless event experiences by combining innovation, style, and tradition — making every moment memorable..
          </p>
        </div> */}

        {/* Social Links */}
        {/* <div className="flex justify-center gap-6 mt-10 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className="text-blue-600 transition-colors hover:text-blue-800" />
      
          </a>
                    <a href="https://www.instagram.com/s.d.events/profilecard/?igsh=ZWxzeml3bXA3YWtk" target="_blank" rel="noopener noreferrer">
               <Instagram size={24} className="text-pink-500 transition-colors hover:text-pink-700" />
  </a>
           <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          <MessageCircleMore size={24} className="text-green-600 transition-colors hover:text-green-800" />
             </a>
           
       
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default About;
