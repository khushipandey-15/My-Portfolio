import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import useSmoothScroll from './utils/useSmoothScroll';

function App() {
  // Use our custom smooth scrolling hook
  useSmoothScroll();
  
  // Add a class to the body for smooth scrolling
  useEffect(() => {
    // Add smooth scrolling class
    document.body.classList.add('smooth-scrolling');
    
    // Add a small script to optimize scrollbar performance
    const script = document.createElement('script');
    script.textContent = `
      // Force repaint on scroll to fix laggy scrollbar
      window.addEventListener('scroll', function() {
        document.body.style.overflow = 'auto';
        requestAnimationFrame(function() {
          document.body.style.overflow = '';
        });
      }, {passive: true});
    `;
    document.head.appendChild(script);
    
    return () => {
      document.body.classList.remove('smooth-scrolling');
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="font-sans bg-primary text-light min-h-screen smooth-scrolling-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
