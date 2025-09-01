import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="section-padding relative bg-primary overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.span 
            className="text-accent font-mono text-sm tracking-wider block mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Credentials
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient bg-gradient-to-r from-accent to-secondary">Certificates</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <p className="text-slate mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my learning milestones and skill-building journeys.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedCertificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-accent/20 shadow-xl hover:shadow-2xl bg-dark-light hover:scale-105 transition-transform duration-300"
            >
              {/* Certificate Image or PDF Preview */}
              {cert.image.endsWith('.pdf') ? (
                <div className="w-full h-60 flex items-center justify-center bg-dark-light">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span className="text-light text-sm">PDF Certificate</span>
                  </div>
                </div>
              ) : (
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300"
                />
              )}

              {/* Certificate Info */}
              <div className="p-4 text-left">
                <h3 className="text-light font-semibold text-lg mb-1">{cert.title}</h3>
                <p className="text-slate text-sm mb-1">{cert.issuer}</p>
                <span className="text-xs font-mono text-accent">{cert.date}</span>
                {cert.description && (
                  <p className="text-slate-300 text-xs mt-2 line-clamp-2">{cert.description}</p>
                )}
                {cert.score && (
                  <div className="absolute top-4 right-4 bg-accent/70 text-dark text-xs font-bold py-1 px-2 rounded">
                    {cert.score}
                  </div>
                )}
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-accent text-sm font-semibold transition duration-300">
                {cert.image.endsWith('.pdf') ? 'Open PDF Certificate 🔗' : 'View Certificate 🔗'}
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {certificates.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-accent to-secondary px-6 py-3 rounded-lg text-dark font-medium hover:opacity-90 transition flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'View All Certificates'} 
              <span>{showAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
