import React from 'react';
import Products from '../components/sections/Products';
import SEO from '../components/shared/SEO';

const ProductsPage = () => {
  return (
    <>
      <SEO 
        title="Products - Nimbus Gaming"
        description="Ultra-lightweight gaming mice and custom mechanical keyboards designed specifically for Indian gamers. Discover our upcoming products."
      />
      <div className="pt-20">
        <Products />
      </div>
    </>
  );
};

export default ProductsPage;