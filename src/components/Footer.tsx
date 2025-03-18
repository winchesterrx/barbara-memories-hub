
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-netflix-gray">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-netflix-red mr-2" size={18} />
          <p className="text-romantic-pink font-romantic">Feito com amor para Barbara Gianezi</p>
          <Heart className="text-netflix-red ml-2" size={18} />
        </div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} - Feliz Aniversário!</p>
      </div>
    </footer>
  );
};

export default Footer;
