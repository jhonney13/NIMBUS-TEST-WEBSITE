import React from 'react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-700 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Button text="Back to Home" type="primary" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
};

export default NotFoundPage;