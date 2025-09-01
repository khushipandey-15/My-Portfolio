import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion, useInView, useAnimation } from 'framer-motion';
import { education } from '../data/education';

// Reusable Icon Components
const GraduationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 1L1 7v2l11 6 9-5V7l-9 5-7-4 7-3.5L21 9V7L12 1z"/>
    <path d="M7 14v3c0 1 1 2 2 2h6c1 0 2-1 2-2v-3l-5 3-5-3z"/>
  </svg>
);

const LocationIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5z"/>
  </svg>
);

const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// Enhanced Timeline Dot Component
const TimelineDot = ({ index }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      className="absolute -left-[10px] md:-left-[12px] -top-1 w-5 h-5 rounded-full bg-secondary shadow-lg shadow-secondary/30 will-change-transform border-2 border-dark-light"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: prefersReducedMotion ? 1 : [0, 1.2, 1] } : { scale: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      aria-hidden="true"
    />
  );
};

const EducationCard = ({ edu, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Enhanced Card */}
      <motion.div 
        className="relative overflow-hidden rounded-xl backdrop-blur-md border border-white/10 p-5 md:p-6 ml-2 md:ml-4 shadow-lg shadow-secondary/10 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 cursor-pointer"
        style={{
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.01 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/5 mix-blend-overlay"
          aria-hidden="true"
        />
        
        {/* Card content with improved typography hierarchy */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <GraduationIcon className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
              <h4 className="text-base md:text-lg font-bold tracking-tight text-white">{edu.degree}</h4>
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-slate"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          <p className="text-secondary font-medium ml-7 -mt-1">{edu.institution}</p>
          
          <div className="flex flex-col md:flex-row md:justify-between text-sm text-slate mt-3 ml-7">
            <div className="flex items-center mb-1 md:mb-0">
              <LocationIcon className="w-4 h-4 mr-1 text-slate/70 flex-shrink-0" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1 text-slate/70 flex-shrink-0" />
              <span>{edu.period}</span>
            </div>
          </div>
          
          <div className="mt-4 bg-secondary/10 rounded-lg p-2">
            <div className="flex items-center">
              <StarIcon className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
              <p className="text-accent font-medium text-sm">
                {edu.gpa || 'GPA not available'}
              </p>
            </div>
          </div>
          
          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-secondary mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary/20 text-secondary-light rounded-full text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-accent mb-2">Achievements:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 bg-accent/20 text-accent-light rounded-full text-xs">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Resume = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  // Function to handle PDF loading with feedback
  const handleResumeDownload = async () => {
    setDownloadStatus('downloading');
    console.log('Resume download initiated');
    
    try {
      // Using window.location.origin to get the base URL of the site
      const resumeUrl = `${window.location.origin}/resume.pdf`;
      console.log('Downloading resume from:', resumeUrl);
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'Khushboo_Kumari_Resume.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);
    } catch (error) {
      console.error('Resume download failed', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };
  
  const getDownloadButtonText = () => {
    switch (downloadStatus) {
      case 'downloading': return 'Downloading...';
      case 'success': return 'Downloaded!';
      case 'error': return 'Download Failed';
      default: return 'Download Full Resume';
    }
  };
  
  // Particles for enhanced visual effect
  const ParticleEffect = () => {
    return [...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-secondary/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
        aria-hidden="true"
      />
    ));
  };
  
  return (
    <section id="resume" className="section-padding" aria-labelledby="resume-heading">
      <div className="container mx-auto relative">
        {/* Enhanced background decorative elements */}
        <div 
          className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"
          aria-hidden="true"
        />
        <div 
          className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl"
          aria-hidden="true"
        />
        <div 
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-secondary/5 blur-3xl"
          aria-hidden="true"
        />
        
        {/* Particle effects */}
        <ParticleEffect />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.span 
            className="text-accent font-mono text-sm tracking-wider block mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Background
          </motion.span>
          <motion.h2 
            ref={ref}
            id="resume-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            Education & <span className="text-gradient bg-gradient-to-r from-secondary to-accent">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        <div className="mt-8">
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-xl font-display font-semibold mb-6 text-secondary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Academic Journey
            </motion.h3>
            
            {/* Enhanced timeline with semantic markup */}
            <ol className="relative pl-6 md:pl-8 mt-8 list-none space-y-8 md:space-y-12" aria-label="Education timeline">
              {/* Enhanced gradient timeline line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary/50 rounded-full shadow-lg"
                aria-hidden="true"
              />
              
              {education && education.length > 0 ? (
                education.map((edu, index) => (
                  <li 
                    key={index}
                    className="relative"
                  >
                    <TimelineDot index={index} />
                    <EducationCard edu={edu} index={index} />
                  </li>
                ))
              ) : (
                <li className="text-center text-light py-8">No education history available</li>
              )}
            </ol>
          </div>
          
          {/* Enhanced download button with animation and feedback */}
          <motion.div 
            className="flex justify-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button 
              onClick={handleResumeDownload}
              disabled={downloadStatus === 'downloading'}
              className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                downloadStatus === 'success' 
                  ? 'bg-accent hover:bg-accent-dark text-dark' 
                  : downloadStatus === 'error'
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gradient-to-r from-secondary to-accent hover:from-secondary-dark hover:to-accent-dark text-white shadow-lg hover:shadow-xl'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: downloadStatus === 'downloading' ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download full resume (PDF)"
            >
              {downloadStatus === 'downloading' ? (
                <motion.div
                  className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
              ) : (
                <DownloadIcon className="w-5 h-5 mr-2" />
              )}
              <span className="group-hover:translate-x-[-2px] transition-transform duration-300">{getDownloadButtonText()}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
