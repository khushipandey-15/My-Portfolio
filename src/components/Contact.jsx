import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '../data/contact';
// We'll use EmailJS directly from utils to avoid lint warnings
import { sendEmail } from '../utils/emailService';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Prepare email parameters
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Khushboo Kumari"
    };
    
    // Send email using our service
    sendEmail(emailParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset the success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again later.');
      });
  };
  
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's <span className="text-gradient bg-gradient-to-r from-accent to-secondary">Connect</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-display font-semibold mb-6 text-accent">Contact Information</h3>
            <p className="text-slate mb-8">
              Feel free to reach out for collaborations, data science opportunities, or just to connect!
            </p>
            
            <div className="space-y-4">
              {contact.email && (
                <div className="flex items-center gap-4 p-3 hover:bg-secondary/5 rounded-md transition-all">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Email</h4>
                    <a href={`mailto:${contact.email}`} className="text-slate hover:text-accent transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
              
              {contact.phone && (
                <div className="flex items-center gap-4 p-3 hover:bg-secondary/5 rounded-md transition-all">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Phone</h4>
                    <a href={`tel:${contact.phone}`} className="text-slate hover:text-accent transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {contact.location && (
                <div className="flex items-center gap-4 p-3 hover:bg-secondary/5 rounded-md transition-all">
                  <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <span className="text-slate">{contact.location}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-10">
              <h4 className="text-sm font-medium mb-4 text-light">Connect with me:</h4>
              <div className="flex space-x-4">
                {contact.social.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="neuro-card p-3 rounded-full hover:bg-secondary/10 transition-all duration-300"
                    aria-label={item.name}
                  >
                    <div className="text-lg text-accent">
                      {item.name === "LinkedIn" ? <FaLinkedin /> : 
                       item.name === "GitHub" ? <FaGithub /> : 
                       item.name === "Email" ? <FaEnvelope /> : "🔗"}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="neuro-card p-8 space-y-6">
              <h3 className="text-xl font-display font-semibold mb-4 text-secondary">Send a Message</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-light">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoFocus
                  disabled={isSubmitting}
                  aria-describedby="name-info"
                  className="w-full bg-dark/50 border border-white/20 rounded-lg p-3 leading-relaxed text-light focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 transition-colors"
                  placeholder="Your name"
                />
                <div id="name-info" className="sr-only">Please enter your full name</div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-light">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  aria-describedby="email-info"
                  className="w-full bg-dark/50 border border-white/20 rounded-lg p-3 leading-relaxed text-light focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 transition-colors"
                  placeholder="your.email@example.com"
                />
                <div id="email-info" className="sr-only">Please enter a valid email address</div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-light">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  aria-describedby="message-info"
                  rows="5"
                  className="w-full bg-dark/50 border border-white/20 rounded-lg p-3 leading-relaxed text-light focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 transition-colors"
                  placeholder="Your message..."
                />
                <div id="message-info" className="sr-only">Please enter your message</div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="bg-gradient-to-r from-accent to-secondary text-dark font-medium w-full flex justify-center items-center py-3 px-6 rounded-full hover:scale-105 transform transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FaEnvelope className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
              
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    key="success-message"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-green-900/20 border border-green-500 text-green-500 rounded-lg p-4 text-center shadow-lg"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {error && (
                  <motion.div 
                    key="error-message"
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-red-900/20 border border-red-500 text-red-500 rounded-lg p-4 text-center shadow-lg"
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
