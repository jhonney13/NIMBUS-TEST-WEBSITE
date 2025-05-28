import React from 'react';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  type = 'primary', 
  onClick, 
  fullWidth = false,
  className = ''
}) => {
  const baseClasses = "px-5 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const typeClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline: "bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white focus:ring-gray-500"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseClasses} ${typeClasses[type]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;