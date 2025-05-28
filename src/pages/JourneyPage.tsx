import React from 'react';
import Journey from '../components/sections/Journey';
import SEO from '../components/shared/SEO';

const JourneyPage = () => {
  return (
    <>
      <SEO 
        title="Our Journey - Nimbus Gaming"
        description="From a simple idea to India's first gaming hardware startup. Follow our journey of building premium gaming peripherals."
      />
      <div className="pt-20">
        <Journey />
      </div>
    </>
  );
};

export default JourneyPage;