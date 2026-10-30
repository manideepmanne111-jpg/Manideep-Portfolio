import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BubbleTrail from './components/BubbleTrail.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Process from './sections/Process.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    // reducedMotion="user" makes every Framer animation respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BubbleTrail />
    </MotionConfig>
  );
}
