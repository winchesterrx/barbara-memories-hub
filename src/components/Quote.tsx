
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
      <div className="absolute inset-0 bg-[url('/romantic-texture.png')] opacity-10 z-0 animate-slow-pulse" />
      <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-5 z-0 animate-slow-pulse" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
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
        
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          <motion.span 
            className="absolute -left-8 -top-8 text-6xl text-romantic-pink opacity-20 font-serif"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            "
          </motion.span>
          
          {text.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className="inline-block text-xl md:text-2xl lg:text-3xl italic font-romantic text-romantic-light mr-2"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 20,
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                  }
                }
              }}
            >
              {word}
            </motion.span>
          ))}
          
          <motion.span 
            className="absolute -right-8 bottom-0 text-6xl text-romantic-pink opacity-20 font-serif"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            "
          </motion.span>
        </motion.div>
        
        {author && (
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div 
              className="h-0.5 w-10 bg-romantic-pink/30 mb-4 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
            <motion.p 
              className="text-romantic-pink font-semibold"
              whileInView={{
                textShadow: ["0 0 0px rgba(255,117,143,0)", "0 0 10px rgba(255,117,143,0.5)", "0 0 0px rgba(255,117,143,0)"]
              }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              — {author}
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Quote;
