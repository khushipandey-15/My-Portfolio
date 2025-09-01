import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DataAnimation = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const maxPoints = 20;
    const animationDuration = 4000; // 4 seconds for base animation duration
    
    // Create a data point with enhanced styling and animation
    const createDataPoint = () => {
      // Manage maximum number of points for performance
      if (container.childElementCount > maxPoints) {
        if (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      
      const point = document.createElement('div');
      point.className = 'data-point';
      
      // Randomize properties for more natural animation
      const size = Math.random() * 8 + 2; // Size between 2px and 10px
      const opacity = Math.random() * 0.5 + 0.1; // Lower opacity for subtlety
      const blur = Math.random() * 2; // Blur effect between 0 and 2px
      const duration = Math.random() * 2000 + (animationDuration - 1000); // Animation between 3-5 seconds, based on animationDuration
      
      // Set random X and Y positions, but keep them within viewable area
      const posX = 5 + Math.random() * 90; // Keep away from extreme edges
      const posY = 5 + Math.random() * 90;
      
      // Apply styles
      point.style.width = `${size}px`;
      point.style.height = `${size}px`;
      point.style.left = `${posX}%`;
      point.style.top = `${posY}%`;
      point.style.opacity = opacity.toString();
      point.style.filter = `blur(${blur}px)`;
      
      // Random color between accent and secondary colors
      const colors = ['rgba(0, 229, 255, 0.7)', 'rgba(110, 68, 255, 0.7)'];
      point.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Create destination for the point to move to
      const destX = posX + (Math.random() * 20 - 10); // Move ±10% in X direction
      const destY = posY + (Math.random() * 20 - 10); // Move ±10% in Y direction
      
      // Animation
      point.animate(
        [
          { transform: 'translate(0, 0) scale(0)', opacity: 0 },
          { transform: 'translate(0, 0) scale(1)', opacity: opacity, offset: 0.1 },
          { transform: `translate(${destX - posX}%, ${destY - posY}%)`, opacity: opacity, offset: 0.8 },
          { transform: `translate(${destX - posX}%, ${destY - posY}%)`, opacity: 0 }
        ],
        {
          duration: duration,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        }
      );
      
      container.appendChild(point);
      
      // Remove after animation completes
      setTimeout(() => {
        if (point.parentNode === container) {
          container.removeChild(point);
        }
      }, duration);
    };
    
    // Create initial batch of points
    for (let i = 0; i < 12; i++) {
      setTimeout(() => createDataPoint(), i * 150);
    }
    
    // Continue creating points at interval
    const interval = setInterval(createDataPoint, 800);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef}
    />
  );
};

export default DataAnimation;
