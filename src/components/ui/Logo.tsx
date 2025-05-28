import React from 'react';
import { Cloud, Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Cloud size={24} className="text-blue-500" />
        <Zap size={14} className="text-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="font-bold text-xl tracking-tight">Nimbus Gaming</span>
    </div>
  );
};

export default Logo;