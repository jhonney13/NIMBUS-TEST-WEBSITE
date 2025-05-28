import React from 'react';
import Button from '../ui/Button';

const Community = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(0,112,243,0.2),transparent_70%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTl2MWgtMnYtMWgyem0tNCAwaC0xdi0yaDF2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Be part of the Nimbus Gaming journey. Get early access to products, exclusive updates, 
              and help shape the future of Indian gaming hardware.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Join Waitlist</h3>
              <p className="text-gray-400 mb-4">Get notified when our products launch and secure your spot for early access.</p>
              <Button text="Join Now" type="primary" fullWidth />
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Discord Community</h3>
              <p className="text-gray-400 mb-4">Join our Discord server to chat with the team and other enthusiasts.</p>
              <Button text="Join Discord" type="secondary" fullWidth />
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-400 mb-4">Follow our Instagram for behind-the-scenes content and updates.</p>
              <Button text="Follow Us" type="outline" fullWidth />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-4">Stay in the loop</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for exclusive updates, early access to new products, 
                  and special offers.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button text="Subscribe" type="primary" />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
                    <span className="text-white text-lg font-bold">Join 500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;