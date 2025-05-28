import React from 'react';
import BlogPost from '../ui/BlogPost';

const BuildLog = () => {
  const posts = [
    {
      title: "Selecting the Right Sensor",
      date: "March 15, 2025",
      excerpt: "After testing multiple sensors, we settled on the PMW3360 for its unmatched precision and low latency, perfect for competitive gaming.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      category: "Hardware",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      title: "Custom PCB Design Journey",
      date: "February 28, 2025",
      excerpt: "Designing our own PCB was challenging but allowed us to optimize every aspect of the mouse's performance and battery life.",
      image: "https://images.pexels.com/photos/6501751/pexels-photo-6501751.jpeg",
      category: "Engineering",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      title: "3D Printing Prototypes",
      date: "January 10, 2025",
      excerpt: "We went through 14 iterations of 3D printed shells before finding the perfect shape that balances comfort and performance.",
      image: "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg",
      category: "Design",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  ];

  return (
    <section id="build-log" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,rgba(0,112,243,0.15),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Log</h2>
          <p className="text-gray-300 text-lg">
            Follow our journey as we document the process of designing, 
            prototyping, and manufacturing our gaming hardware.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              authorImage={post.authorImage}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button text="View All Updates" type="secondary" />
        </div>
      </div>
    </section>
  );
};

import Button from '../ui/Button';

export default BuildLog;