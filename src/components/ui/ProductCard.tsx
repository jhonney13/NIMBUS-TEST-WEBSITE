import React, { useState } from 'react';
import Button from './Button';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  status: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  description,
  specs,
  image,
  status,
  price
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div 
      className="relative h-[480px] group perspective"
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-gray-800 shadow-xl shadow-black/20 hover:shadow-blue-900/20 transition-shadow duration-300">
          <div className="relative h-56 overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
              {status}
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-sm text-gray-400 mb-1">{category}</div>
            <h3 className="text-xl font-bold mb-3">{name}</h3>
            <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">{price}</span>
              <div className="flex space-x-2">
                <Button 
                  text="Details" 
                  type="outline" 
                  onClick={toggleFlip}
                />
                <Button 
                  text="Pre-order" 
                  type="primary" 
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-gray-800 shadow-xl shadow-black/20 p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold mb-4">{name} Specifications</h3>
            <ul className="space-y-2 mb-6 flex-grow">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-300">{spec}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-white">{price}</span>
                <span className="text-sm bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                  {status}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  text="Back" 
                  type="outline" 
                  onClick={toggleFlip}
                  fullWidth
                />
                <Button 
                  text="Pre-order" 
                  type="primary" 
                  onClick={() => {}}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;