
import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  author?: string;
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <motion.div 
      className="py-16 px-4 my-8 rounded-lg relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-netflix-black to-netflix-dark opacity-90 z-0" />
      <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-5 z-0 animate-slow-pulse" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
        >
          <Heart className="mx-auto mb-6 text-romantic-pink" size={32} />
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl italic font-romantic text-romantic-light mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "{text}"
        </motion.p>
        
        {author && (
          <motion.p 
            className="text-romantic-pink font-semibold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            — {author}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Quote;
