import React from 'react';
import ProductCard from '../ui/ProductCard';

const Products = () => {
  const products = [
    {
      name: 'Nimbus Feather',
      category: 'Gaming Mouse',
      description: 'Ultra-lightweight (52g) gaming mouse with titanium shell, PMW3360 sensor, and 20,000 DPI for precision control.',
      specs: [
        'Weight: 52g',
        'Sensor: PMW3360',
        'DPI: Up to 20,000',
        'Polling Rate: 1000Hz',
        'Wireless: Yes (nRF52840)',
        'Battery Life: 70+ hours'
      ],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      status: 'Coming Soon',
      price: '₹4,999'
    },
    {
      name: 'Nimbus Velocity',
      category: 'Mechanical Keyboard',
      description: 'Premium 65% mechanical keyboard with hall effect switches, hot-swap PCB, and custom keycaps designed for gaming.',
      specs: [
        'Layout: 65%',
        'Switches: Hall Effect',
        'Keycaps: PBT Dye-Sub',
        'Case: CNC Aluminum',
        'Connectivity: USB-C / Bluetooth',
        'RGB: 16.8M colors'
      ],
      image: 'https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg',
      status: 'Prototype',
      price: '₹7,499'
    },
    {
      name: 'Nimbus Mini',
      category: 'Mechanical Keypad',
      description: 'Compact 16-key programmable keypad, perfect for macros, media controls, or as a numpad. Fully customizable.',
      specs: [
        'Keys: 16',
        'Switches: Hot-swappable',
        'RGB: Per-key',
        'Profiles: 4 onboard',
        'Case: Acrylic + Aluminum',
        'Software: Open source'
      ],
      image: 'https://images.pexels.com/photos/3683082/pexels-photo-3683082.jpeg',
      status: 'In Development',
      price: '₹2,499'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Products</h2>
          <p className="text-gray-300 text-lg">
            Our hardware is designed specifically for Indian gamers, with a focus on 
            quality, durability, and performance at an accessible price point.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              category={product.category}
              description={product.description}
              specs={product.specs}
              image={product.image}
              status={product.status}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;