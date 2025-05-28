import React from 'react';
import Hero from '../components/sections/Hero';
import Journey from '../components/sections/Journey';
import Products from '../components/sections/Products';
import BuildLog from '../components/sections/BuildLog';
import Community from '../components/sections/Community';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Products />
      <Journey />
      <BuildLog />
      <Community />
    </>
  );
};

export default HomePage;