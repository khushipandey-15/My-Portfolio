import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary p-5 text-center">
      <div>
        <h1 className="text-6xl md:text-9xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl mb-8">Page Not Found</h2>
        <p className="text-slate mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
