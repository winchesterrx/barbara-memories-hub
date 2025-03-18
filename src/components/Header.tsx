
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 py-2' : 'bg-gradient-to-b from-black to-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-netflix-red text-2xl md:text-3xl font-bold font-netflix">
            BARBARA<span className="text-white">FLIX</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="hidden md:inline text-white text-sm">19.03.2024</span>
          <Heart className="text-netflix-red animate-pulse-slow" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
