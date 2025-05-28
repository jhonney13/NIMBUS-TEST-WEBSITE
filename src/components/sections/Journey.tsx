import React from 'react';
import TimelineItem from '../ui/TimelineItem';

const Journey = () => {
  const timelineItems = [
    {
      year: '2021',
      title: 'The Idea',
      description: 'After struggling to find a lightweight gaming mouse that fit my budget and requirements, I began researching what it would take to build my own.',
      image: 'https://images.pexels.com/photos/4709377/pexels-photo-4709377.jpeg'
    },
    {
      year: '2022',
      title: 'First Prototype',
      description: 'Created the first working prototype using 3D printing and off-the-shelf components. It was heavy and ugly, but it worked!',
      image: 'https://images.pexels.com/photos/7055937/pexels-photo-7055937.jpeg'
    },
    {
      year: '2023',
      title: 'RISE Incubator',
      description: 'Selected for the RISE Jhansi incubator program, providing funding and mentorship to take the project to the next level.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg'
    },
    {
      year: '2024',
      title: 'Manufacturing Partner',
      description: 'Partnered with a manufacturing facility in Pune to begin small-batch production of our flagship mouse and keyboard.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg'
    },
    {
      year: '2025',
      title: 'Launch',
      description: 'Preparing for our official launch with a limited edition run of 500 mice and 200 keyboards for early supporters.',
      image: 'https://images.pexels.com/photos/7054503/pexels-photo-7054503.jpeg'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(0,112,243,0.15),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Journey</h2>
          <p className="text-gray-300 text-lg">
            From a simple idea to a full-fledged hardware startup, this is the story of how Nimbus Gaming 
            came to be and where we're headed.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              image={item.image}
              isLast={index === timelineItems.length - 1}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;