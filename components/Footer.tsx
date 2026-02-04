import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark/90 py-8 mt-16 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-gray-400 font-body max-w-7xl">
        <div className="mb-4">
           <span className="text-2xl font-heading font-bold text-white">995</span>
           <span className="text-lg font-heading text-neon-cyan ml-1">EVENTS</span>
        </div>
        <p>&copy; {new Date().getFullYear()} 995 EVENTS. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-600">Driven by Intelligence. Powered by Gemini AI.</p>
      </div>
    </footer>
  );
};
