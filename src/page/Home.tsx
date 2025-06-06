import HeroSection from '../components/HeroSection';
import Sections from '../components/event';
import BookingAndPricing from '../page/booking';
import Contact from '../components/contact';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import TeamSection from './TeamSection';


const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <Sections />
    <BookingAndPricing />
    <Contact />
    <About />
    <TeamSection></TeamSection>
    
    
    <Footer />
  
  </>
);

export default Home;
