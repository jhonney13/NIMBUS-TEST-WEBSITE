import React from 'react';
import BuildLog from '../components/sections/BuildLog';
import SEO from '../components/shared/SEO';

const BuildLogPage = () => {
  return (
    <>
      <SEO 
        title="Build Log - Nimbus Gaming"
        description="Follow our development progress, technical updates, and behind-the-scenes insights as we build India's premium gaming hardware."
      />
      <div className="pt-20">
        <BuildLog />
      </div>
    </>
  );
};

export default BuildLogPage;