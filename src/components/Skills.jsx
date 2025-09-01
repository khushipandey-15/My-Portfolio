import React from 'react';
import { motion } from 'framer-motion';
import { skills, SkillIcon } from '../data/skills';
import { FaCode, FaTools, FaChartBar, FaSearch, FaLayerGroup, FaBrain, FaEye } from 'react-icons/fa';

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  // Get unique categories
  const categories = Object.keys(skillsByCategory);
  
  // Animation variants for container and items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark to-primary relative">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-r from-transparent via-slate/5 to-transparent pointer-events-none" 
           style={{ backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)' }}></div>
      
      <div className="container mx-auto">
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Data Analytics <span className="text-gradient bg-gradient-to-r from-secondary to-accent">Toolbox</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </motion.div>
        
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <motion.div 
                className="flex items-center mb-8"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <span className="text-2xl text-secondary">
                    {category === "Programming Languages" ? <FaCode /> : 
                     category === "Libraries & Frameworks" ? <FaLayerGroup /> : 
                     category === "Tools & Platforms" ? <FaTools /> : 
                     category === "Data Analytics Skills" ? <FaChartBar /> : 
                     category === "Machine Learning" ? <FaBrain /> : 
                     category === "Visualization & Reporting" ? <FaEye /> : 
                     <FaSearch />}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-light">
                  {category}
                </h3>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 md:gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skillsByCategory[category].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    {skill.icon && <SkillIcon skill={skill} />}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
