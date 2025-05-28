import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isLast: boolean;
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  image,
  isLast,
  isEven
}) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-400/30 h-full z-0 top-12"></div>
      )}
      
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 relative z-10`}>
        {/* Year bubble */}
        <div className="absolute left-1/2 md:left-auto md:relative transform -translate-x-1/2 md:translate-x-0 top-0 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white font-bold shadow-lg shadow-blue-900/30 mb-4 md:mb-0">
          {year}
        </div>
        
        <div className={`w-full md:w-1/2 p-4 ${isEven ? 'md:pr-12' : 'md:pl-12'} pt-20 md:pt-4`}>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        
        <div className={`w-full md:w-1/2 p-4 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
          <div className="relative overflow-hidden rounded-lg shadow-xl shadow-blue-900/10 transform transition-transform duration-500 hover:scale-105">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 md:h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;