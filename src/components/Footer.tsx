
import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const heartVariants = {
    hover: { 
      scale: 1.2,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.3 
      }
    }
  };

  return (
    <footer className="py-12 border-t border-netflix-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-5 z-0" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div variants={heartVariants} whileHover="hover">
            <Heart className="text-netflix-red mr-2" size={18} />
          </motion.div>
          <p className="text-romantic-pink font-romantic text-lg">Feito com amor para Barbara Gianezi</p>
          <motion.div variants={heartVariants} whileHover="hover">
            <Heart className="text-netflix-red ml-2" size={18} />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            className="px-4 py-2 rounded-full bg-gradient-to-r from-romantic-pink to-netflix-red text-white font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ♥ Feliz Aniversário ♥
          </motion.button>
          
          <motion.button 
            className="px-4 py-2 rounded-full bg-netflix-dark border border-romantic-pink text-romantic-pink font-semibold hover:bg-romantic-pink hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            19.03.2024
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} - Para o amor da minha vida
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
