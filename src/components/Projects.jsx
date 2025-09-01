import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <motion.span 
            className="text-accent font-mono text-sm tracking-wider block mb-1"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Data <span className="text-gradient bg-gradient-to-r from-accent to-secondary">in Action</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.7 }}
          ></motion.div>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-slate text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my data projects where insights meet storytelling.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 space-y-28">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Image Section */}
              <div className="md:w-3/5 w-full">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-secondary/30 hover:border-secondary transition">
                  <div className="bg-primary/90 aspect-video flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-5xl text-accent">📊</div>
                    )}
                  </div>
                  <p className="absolute bottom-2 right-2 text-xs text-slate bg-dark/80 px-2 py-1 rounded">
                    {project.title}
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:w-2/5 w-full">
                <div className="glass-card bg-dark-light rounded-xl p-6">
                  <span className="text-xs font-mono text-slate bg-dark px-2 py-1 rounded mb-2 inline-block">
                    {project.date}
                  </span>
                  <h3 className="text-2xl font-bold text-light mb-2">{project.title}</h3>
                  <p className="text-slate mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-dark border border-accent/30 px-3 py-1 rounded-full text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-sm"
                      >
                        🔗 View Demo
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-light hover:text-accent transition text-sm flex items-center"
                      >
                        <span className="mr-1">🔗 GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
