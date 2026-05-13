import React from 'react';

const Navbar: React.FC = () => {

  return (
    <nav className="bg-[#111111] text-white py-4 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/Beyond%20Heights%20Logo-01.svg" 
            alt="Beyond Heights Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Center: Nav Links */}
        

        {/* Right: Register Button */}
        <a 
          href="https://www.ticket360.co.in/event-details?event=NzAwfF58" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#c6ff00] text-black px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 active:scale-95 shadow-lg shadow-[#c6ff00]/20 inline-block text-center"
        >
          REGISTER
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
