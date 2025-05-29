import { Routes, Route } from 'react-router-dom';
import Home from './page/Home'; // Your homepage
import AllEvents from './page/AllEvent'; // "See all events"
import AllCatering from './page/AllCatering'; // "See all catering"
import GalleryPage from './page/EventGallery'; // Gallery page
import FAQ from './components/Faq';
import TeamSection from './page/TeamSection';
import About from './components/About';
import Contact from './components/contact';
import Sections from './components/event';
import BookingForm from './page/BookingFrom';


function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<App />} />
        <Route path="/all-events" element={<AllEvents />} />
         <Route path="/all-catering" element={<AllCatering />} />
      <Route path="/gallery" element={<GalleryPage />} />
       <Route path='/team' element={<TeamSection/>}/>
      <Route path="/Faqs" element={<FAQ></FAQ>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> {/* Redirect to Home for any unmatched routes */}
      

  {/* For Footer */}

      <Route path="/service" element={<Sections />} />
      <Route path="booking" element={<BookingForm />} />
    </Routes>
  );
}

export default App;
