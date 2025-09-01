import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when clicking a link
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };
  
  // Handle navbar appearance change on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Use IntersectionObserver to track active sections (more performant)
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'certificates', 'resume', 'contact'];
    const sectionElements = {};
    
    // Options for the observer - optimize for performance
    const options = {
      root: null, // viewport
      rootMargin: `-${document.querySelector('nav')?.offsetHeight || 100}px 0px 0px 0px`,
      threshold: 0.1, // Reduce threshold for better performance - only 10% visibility needed to trigger
    };
    
    // Throttled callback for intersection changes to reduce processing
    let isThrottled = false;
    const handleIntersect = (entries) => {
      if (isThrottled) return;
      
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 100); // Throttle to 100ms
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        sectionElements[id] = element;
        observer.observe(element);
      }
    });
    
    // Cleanup
    return () => {
      Object.values(sectionElements).forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ], []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
      ? 'bg-gradient-to-r from-primary/95 via-dark/95 to-primary/95 backdrop-blur-md shadow-accent-glow py-3 border-b border-accent/10'
      : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-2xl font-display font-bold group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Logo with enhanced styling */}
          <span className="text-accent group-hover:text-secondary transition-colors duration-300">K</span>
          <span className="text-light">K</span>
          <span className="text-secondary group-hover:text-accent transition-colors duration-300">.</span>
          {/* Logo glow effect */}
          <motion.span 
            className="absolute -inset-1 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 -z-10 blur-md"
            animate={{ scale: [1, 1.1, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.a>
        
        {/* Desktop Navigation with enhanced styling */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-sm md:text-base font-medium relative group px-2 py-1 tracking-wide md:tracking-wider ${
                  isActive ? 'text-accent' : 'text-light/90'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {/* Nav item with hover effects */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
                  {link.name}
                </span>
                
                {/* Hover background effect */}
                <span className="absolute inset-0 rounded-md bg-accent/5 opacity-0 group-hover:opacity-100 -z-10 transform scale-95 group-hover:scale-100 transition-all duration-300"></span>
                
                {/* Active indicator with enhanced animation */}
                {isActive && (
                  <motion.div 
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary-light rounded-full shadow-accent-glow"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          
          <motion.a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="relative overflow-hidden group bg-gradient-to-r from-secondary to-accent px-6 py-2 rounded-lg font-medium text-white shadow-accent-glow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px 5px rgba(0, 229, 255, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated particles */}
            <span className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-white/80 animate-pulse-slow"></span>
            <span className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-white/80 animate-pulse-slow" style={{ animationDelay: '1s' }}></span>
            
            {/* Button content with icon */}
            <span className="relative z-10 flex items-center justify-center gap-1">
              Resume <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-secondary-light/50 to-accent-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
        </div>
        
        {/* Mobile Menu Button with enhanced styling */}
        <div className="md:hidden">
          <motion.button
            className="relative p-2 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-accent" />
            ) : (
              <FiMenu className="w-6 h-6 text-light" />
            )}
            {/* Button glow effect */}
            <span className="absolute inset-0 rounded-lg bg-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></span>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay with AnimatePresence for proper exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-gradient-to-b from-dark/80 to-black/90 backdrop-blur-md z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      
      {/* Mobile Menu with enhanced styling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 right-0 top-0 bottom-0 w-4/5 bg-gradient-to-b from-dark/95 to-primary/95 backdrop-blur-xl border-l border-accent/20 shadow-lg z-40 flex flex-col"
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4
            }}
          >
            {/* Mobile menu header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <motion.div
                className="text-xl font-display font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-accent">K</span>
                <span className="text-light">K</span>
                <span className="text-secondary">.</span>
              </motion.div>
              <motion.button
                onClick={closeMenu}
                className="p-2 rounded-full bg-dark-light/50 backdrop-blur-sm border border-white/5"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(110, 68, 255, 0.2)' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FiX className="w-5 h-5 text-accent" />
              </motion.button>
            </div>

            {/* Mobile menu links with decorative elements */}
            <div className="flex flex-col items-center justify-center flex-1 relative p-8">
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-10 right-10 w-20 h-20 bg-secondary/5 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-10 left-10 w-16 h-16 bg-accent/5 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              
              {/* Navigation links with enhanced styling */}
              <div className="flex flex-col items-center space-y-6 w-full max-w-xs">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-medium w-full text-center py-2 px-4 rounded-lg relative overflow-hidden group ${
                        isActive ? 'text-accent' : 'text-light/90'
                      }`}
                      onClick={closeMenu}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Background on hover */}
                      <span className={`absolute inset-0 ${isActive ? 'bg-accent/10' : 'bg-white/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                      
                      {/* Side indicator for active item */}
                      {isActive && (
                        <motion.span 
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary rounded-r-md"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                      
                      <span className="relative z-10">{link.name}</span>
                    </motion.a>
                  );
                })}
                
                <motion.a
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full relative overflow-hidden group bg-gradient-to-r from-secondary to-accent px-6 py-3 rounded-lg text-center font-medium text-white shadow-accent-glow"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px 5px rgba(0, 229, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    Resume <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary-light/50 to-accent-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Use React.memo for preventing unnecessary re-renders
export default React.memo(Navigation);
