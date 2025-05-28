import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.15),transparent_70%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTl2MWgtMnYtMWgyem0tNCAwaC0xdi0yaDF2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              India's Gaming Hardware Revolution Starts Here
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Handcrafted gaming mice and keyboards designed by a gamer, for gamers. 
              Built with precision, performance, and the Indian gaming community in mind.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button text="Join Waitlist" type="primary" />
              <Button text="Follow Our Build" type="outline" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg" 
                alt="Nimbus Gaming Mouse Prototype" 
                className="relative z-10 rounded-2xl object-cover shadow-2xl shadow-blue-900/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow-lg z-20 text-sm font-medium">
                Prototype v0.4
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;