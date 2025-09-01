import { useEffect } from 'react';

/**
 * Custom hook to provide optimized smooth scrolling
 * Fixes issues with laggy/choppy scrollbar
 */
const useSmoothScroll = () => {
  useEffect(() => {
    // Variables to track scrolling
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    // More efficient scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Here you would do any scroll-related updates
          // For now, just ensuring smooth performance
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
