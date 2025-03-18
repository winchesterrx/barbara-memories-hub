
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  quote: string;
  backgroundImage: string;
}

const Hero = ({ title, subtitle, quote, backgroundImage }: HeroProps) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="netflix-gradient absolute inset-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-romantic font-bold mb-4 animate-fade-in text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-6 animate-fade-in delay-300 text-romantic-light font-romantic">
          {subtitle}
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="quote-text text-lg md:text-xl animate-fade-in delay-600">
            "{quote}"
          </p>
        </div>
        <div className="mt-8 animate-fade-in delay-700">
          <button className="netflix-button text-lg px-6 py-3" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Ver Nossa História
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
