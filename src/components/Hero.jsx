import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import DataAnimation from './DataAnimation';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    // Set loaded after animation delay with a smoother transition
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced smooth scroll function with offset
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const yOffset = -80; // Adjust based on your header height
      const y = skillsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <motion.section 
      id="home" 
      className="section-padding flex flex-col md:flex-row items-center justify-between min-h-[90vh] relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dynamic background with parallax effect */}
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-radial from-dark/90 via-primary to-dark/90 z-0"></motion.div>
      
      {/* Advanced mesh gradient overlay with subtle animation */}
      <motion.div 
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-dark-light/40 via-primary/30 to-dark/40 z-0"
        animate={{
          background: [
            "linear-gradient(to right top, rgba(15, 21, 36, 0.4), rgba(10, 14, 23, 0.3), rgba(5, 8, 18, 0.4))",
            "linear-gradient(to right top, rgba(10, 14, 23, 0.3), rgba(5, 8, 18, 0.4), rgba(15, 21, 36, 0.4))",
            "linear-gradient(to right top, rgba(5, 8, 18, 0.4), rgba(15, 21, 36, 0.4), rgba(10, 14, 23, 0.3))"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      
      {/* Data visualization animation */}
      <DataAnimation />
      
      {/* Animated floating shapes with parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-accent/5 blur-3xl"></motion.div>
      <motion.div 
        className="absolute top-2/3 right-1/3 w-40 h-40 rounded-full bg-secondary/10 blur-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Content container with improved layout */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left column - Text content with staggered animations */}
        <motion.div 
          className="md:w-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated greeting with typing effect */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p 
              className="text-accent font-mono mb-2 text-sm md:text-base tracking-wider inline-flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="mr-2 origin-bottom"
              >
                👋
              </motion.span>
              Hi, my name is
            </motion.p>
          </motion.div>
          
          {/* Name with enhanced gradient and animation */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-light leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Khushboo <span className="text-gradient bg-gradient-to-r from-secondary via-secondary-light to-accent relative">
                Kumari.
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-secondary to-accent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                ></motion.span>
              </span>
            </motion.h1>
          </motion.div>
          
          {/* Title with text highlighting */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-bold text-slate mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Professional <span className="text-secondary relative inline-block">
                Data Analyst
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary/40"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                ></motion.span>
              </span>
            </motion.h2>
          </motion.div>
          
          {/* Description with highlighted keywords */}
          <motion.p 
            className="text-slate max-w-xl mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Transforming raw data into <motion.span 
              className="text-accent font-medium relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >actionable insights</motion.span> using <motion.span 
              className="font-medium bg-secondary/10 px-2 py-0.5 rounded"
              whileHover={{ backgroundColor: "rgba(110, 68, 255, 0.2)" }}
            >Power BI</motion.span>, <motion.span 
              className="font-medium bg-accent/10 px-2 py-0.5 rounded"
              whileHover={{ backgroundColor: "rgba(0, 229, 255, 0.2)" }}
            >SQL</motion.span> & <motion.span 
              className="font-medium bg-secondary/10 px-2 py-0.5 rounded"
              whileHover={{ backgroundColor: "rgba(110, 68, 255, 0.2)" }}
            >Excel</motion.span>. Data Analytics professional with expertise in dashboard creation, data cleaning, and business intelligence.
          </motion.p>
          
          {/* CTA buttons with improved hover effects */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.a 
              href={`${process.env.PUBLIC_URL}/resume.pdf`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 229, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>📄 View Resume</span>
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(110, 68, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>📊 View Projects</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 229, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>📬 Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Right column - Avatar with enhanced animations */}
        <motion.div 
          className="md:w-2/5 mt-12 md:mt-0 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        >
          <div className="relative max-w-md mx-auto px-6">
            {/* Enhanced glowing effect behind content */}
            <motion.div 
              className="absolute inset-0 rounded-full filter blur-3xl"
              animate={{ 
                background: [
                  'radial-gradient(circle, rgba(110, 68, 255, 0.3) 0%, rgba(0, 229, 255, 0.1) 70%)',
                  'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(110, 68, 255, 0.1) 70%)',
                  'radial-gradient(circle, rgba(110, 68, 255, 0.3) 0%, rgba(0, 229, 255, 0.1) 70%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            
            {/* Floating elements around avatar */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary opacity-80 z-20"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-2 w-16 h-16 rounded-full bg-gradient-to-tr from-secondary to-accent opacity-70 z-20"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -20, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            
            {/* Enhanced glass card with reflection effect and avatar */}
            <motion.div 
              className="relative glass-card overflow-hidden rounded-full border-[3px] border-white/30 aspect-square p-0"
              whileHover={{ 
                boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)",
                borderColor: "rgba(0, 229, 255, 0.7)",
                scale: 1.03
              }}
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                  "0 20px 40px -20px rgba(0, 229, 255, 0.4)",
                  "0 10px 30px -15px rgba(110, 68, 255, 0.4)",
                  "0 10px 30px -15px rgba(2, 12, 27, 0.7)"
                ]
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                boxShadow: { duration: 8, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              {/* Subtle background gradient for avatar */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-dark/60 via-dark/80 to-dark/60 z-0"
                animate={{ 
                  background: [
                    "radial-gradient(circle, rgba(5, 8, 18, 0.85), rgba(5, 8, 18, 0.9))",
                    "radial-gradient(circle, rgba(5, 8, 18, 0.9), rgba(5, 8, 18, 0.85))",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "alternate" }}
              ></motion.div>
              
              {/* Subtle reflection overlay and inner shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent shadow-inner z-10 pointer-events-none" 
                   style={{ boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)" }}></div>
              
              {/* Avatar image with animation */}
              <motion.div className="w-full h-full overflow-hidden rounded-full flex items-center justify-center bg-transparent">
                <motion.img 
                  src="/assets/video/avatar.gif" 
                  alt="Khushboo Kumari Avatar" 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onLoad={() => setIsLoaded(true)}
                  draggable="false"
                  style={{ borderRadius: "50%" }}
                />
              </motion.div>
              
              {/* Circular glow effect around avatar */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-transparent z-20 pointer-events-none"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(0, 229, 255, 0)",
                    "0 0 0 12px rgba(0, 229, 255, 0.15)",
                    "0 0 0 0 rgba(0, 229, 255, 0)"
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              ></motion.div>
            </motion.div>
            
            {/* Additional decoration elements */}
            <motion.div 
              className="absolute -bottom-4 right-10 w-8 h-8 rounded-full bg-gradient-to-tr from-accent/60 to-secondary/60 z-30 mix-blend-screen"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            
            {/* Skills highlight bubbles floating around avatar */}
            {['SQL', 'Excel', 'Power BI', 'Data Analytics'].map((skill, i) => (
              <motion.div 
                key={skill}
                className={`absolute hidden md:flex h-auto py-1 px-3 rounded-full bg-dark/80 border border-white/10
                  backdrop-blur-sm text-xs font-medium text-accent z-30`}
                style={{
                  top: `${15 + (i * 20)}%`,
                  right: i % 2 === 0 ? '-20%' : 'auto',
                  left: i % 2 !== 0 ? '-20%' : 'auto',
                }}
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, i % 2 === 0 ? -8 : 8, 0],
                  x: i % 2 === 0 ? [20, 0, 20] : [-20, 0, -20]
                }}
                transition={{ 
                  opacity: { duration: 3, delay: 1 + (i * 0.3), repeat: Infinity },
                  y: { duration: 5, delay: 1 + (i * 0.3), repeat: Infinity, repeatType: "reverse" },
                  x: { duration: 7, delay: 1 + (i * 0.3), repeat: Infinity, repeatType: "reverse" }
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator with better animation */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        style={{ opacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div className="flex flex-col items-center">
          <motion.span 
            className="text-accent text-sm mb-2 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            className="w-8 h-8 flex items-center justify-center rounded-full border border-accent/30"
            animate={{ boxShadow: [
              "0 0 0 0 rgba(0, 229, 255, 0)",
              "0 0 0 4px rgba(0, 229, 255, 0.3)",
              "0 0 0 0 rgba(0, 229, 255, 0)"
            ]}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown className="text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
