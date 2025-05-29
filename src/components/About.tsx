import Navbar from "./NavBar";

const About = () => {
  return (
      <div><Navbar></Navbar>
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          <strong>SD Event & Shyam Catering</strong> is a trusted name in Rajasthan for delivering unforgettable events and delicious catering experiences. 
          We specialize in organizing weddings, parties, corporate events, and cultural gatherings with a personalized touch.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Founder</h3>
            <p className="text-gray-600">Mr. Dinesh Sharma, with over 10 years of experience in the event and hospitality industry, leads our vision with passion and creativity.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Co-Founder</h3>
            <p className="text-gray-600">Mr. Shyam Lal brings deep catering expertise, delivering culinary excellence and quality service to every client.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Production & Coordination</h3>
            <p className="text-gray-600">Our team of producers, planners, and coordinators ensures that every event runs smoothly and exceeds expectations.</p>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We aim to deliver vibrant and flawless event experiences by combining innovation, style, and tradition — making every moment memorable.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
            Instagram
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
