import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <OurStory />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
