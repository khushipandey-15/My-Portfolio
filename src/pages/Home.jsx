import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  // Define the section variants for smooth animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary to-dark text-light relative">
      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-radial from-dark-light/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMjkgNTlhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0wLTRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0wLTRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwem0wLTRhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAweiIvPjwvZz48L2c+PC9zdmc+')] pointer-events-none"></div>
      
      <Navigation />
      
      <motion.main 
        className="pt-12 relative z-10 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Hero section with prominent positioning and smooth transition to next section */}
        <div className="section-transition-dark mb-2 md:mb-3">
          <Hero />
        </div>
        
        {/* Main content sections with reduced spacing */}
        <motion.div 
          variants={sectionVariants} 
          className="space-y-4 md:space-y-6 lg:space-y-8"
        >
          <div className="section-transition-dark">
            <Skills />
          </div>
          <div className="section-transition-dark">
            <Projects />
          </div>
          <div className="section-transition-dark">
            <Certificates />
          </div>
          <div className="section-transition-dark">
            <Resume />
          </div>
          <div>
            <Contact />
          </div>
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Home;
