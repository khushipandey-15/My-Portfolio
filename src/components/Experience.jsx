import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark to-primary">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Industry Experience
        </motion.h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row glass-card overflow-hidden">
                {/* Left side - Company info */}
                <div className="md:w-1/3 bg-secondary/10 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-display font-semibold text-accent">{exp.position}</h3>
                  <h4 className="text-lg font-medium text-light mt-2">{exp.company}</h4>
                  <div className="mt-4 text-slate text-sm">
                    <p className="mb-1">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                {/* Right side - Responsibilities */}
                <div className="md:w-2/3 p-6">
                  <h4 className="text-lg font-medium text-secondary mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                      >
                        <div className="text-accent mr-3 mt-1">▹</div>
                        <div>{item}</div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
