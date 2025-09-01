import React, { useState, useEffect, useCallback } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Optimize scroll handling with useCallback and throttling
  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      if (!isVisible) setIsVisible(true);
    } else {
      if (isVisible) setIsVisible(false);
    }
  }, [isVisible]);
  
  // Add throttling for better performance
  useEffect(() => {
    // Initial check for page load with scroll already happened
    handleScroll();
    
    // Use passive scrolling for better performance
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100); // Throttle to 100ms
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Define subtle parallax effect for background elements - reduce work
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -30]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -20]);
  
  return (
    <footer className="bg-gradient-to-b from-dark via-dark/95 to-black px-6 py-12 md:py-16 relative border-t border-white/5">
      {/* Back to top button - optimized with will-change and transform for better GPU acceleration */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-12 right-8 md:bottom-16 md:right-12 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center shadow-lg ring-2 ring-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark z-50"
            style={{
              backfaceVisibility: 'hidden', 
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -2, 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"
          animate={{ 
            x: [0, 10, 0], 
            opacity: [0.3, 0.5, 0.3],
          }}
          style={{ y: parallaxY1 }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"
          animate={{ 
            x: [0, -10, 0], 
            opacity: [0.2, 0.4, 0.2],
          }}
          style={{ y: parallaxY2 }}
          transition={{ 
            repeat: Infinity, 
            duration: 10, 
            ease: "easeInOut" 
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 mb-12">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start md:col-span-5">
            <motion.div 
              className="text-3xl font-display font-bold mb-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-accent group-hover:text-white transition-colors duration-300">K</span>
              <span className="text-light">K</span>
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent group-hover:text-accent transition-colors duration-300">.</span>
            </motion.div>
            <motion.p 
              className="text-slate text-sm md:text-base leading-relaxed max-w-sm text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Transforming data into insights and visualizations that drive informed business decisions.
            </motion.p>
            <motion.p 
              className="text-slate/70 text-xs md:text-sm mt-3 leading-relaxed text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              &copy; {year} Khushboo Kumari. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://linkedin.com/in/khushbookumari15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/khushbookumari15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:khushboostar1232@gmail.com" 
                className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Site Links */}
          <div className="flex flex-col items-center md:items-start md:col-span-3">
            <motion.h3 
              className="font-display font-semibold text-sm uppercase tracking-widest mb-6 text-white relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-accent"></span>
            </motion.h3>
            <motion.nav 
              className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-3 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                { href: "#home", label: "Home" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#certificates", label: "Certificates" },
                { href: "#resume", label: "Resume" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  className="nav-link text-slate text-sm md:text-base leading-relaxed group flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-0 group-hover:w-2 h-[1px] bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="group-hover:text-accent transition-colors duration-300">{link.label}</span>
                </motion.a>
              ))}
            </motion.nav>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end md:col-span-4">
            <motion.h3 
              className="font-display font-semibold text-sm uppercase tracking-widest mb-6 text-white relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Connect
              <span className="absolute -bottom-2 left-0 md:left-auto md:right-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-accent"></span>
            </motion.h3>
            <motion.div 
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://linkedin.com/in/khushbookumari15" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent hover:border-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/khushbookumari15" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent hover:border-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:khushboostar1232@gmail.com" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate hover:text-white hover:bg-gradient-to-br hover:from-secondary hover:to-accent hover:border-accent transition-all duration-300"
                whileHover={{ y: -3, boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center md:justify-end space-x-2 text-slate/70 text-xs md:text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Built with</span>
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1], 
                  color: ["rgba(148,163,184,0.7)", "rgba(0,229,255,1)", "rgba(148,163,184,0.7)"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
                className="inline-flex items-center"
              >
                <FiHeart className="w-3 h-3 mr-1" />
              </motion.span>
              <span>using React & Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
        
        <motion.div 
          className="text-center text-xs text-slate/50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Last updated: August 2025 | <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
