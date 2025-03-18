
import React from 'react';
import { Heart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Footer = () => {
  const heartVariants: Variants = {
    hover: { 
      scale: 1.2,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        duration: 0.3 
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingHearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 5,
    size: 10 + Math.random() * 15
  }));

  return (
    <footer className="py-16 border-t border-netflix-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/heart-pattern.svg')] opacity-5 z-0" />
      <div className="absolute inset-0 bg-[url('/romantic-texture.png')] opacity-10 mix-blend-overlay z-0" />
      
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-romantic-pink opacity-30 z-0"
          style={{ 
            left: heart.left,
          }}
          initial={{ top: '100%', opacity: 0.2 }}
          animate={{ 
            top: '-5%', 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: heart.duration, 
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
        >
          <motion.div variants={heartVariants} whileHover="hover">
            <Heart className="text-netflix-red mr-2" size={18} />
          </motion.div>
          <motion.p 
            className="text-romantic-pink font-romantic text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Feito com amor para Barbara Gianezi
          </motion.p>
          <motion.div variants={heartVariants} whileHover="hover">
            <Heart className="text-netflix-red ml-2" size={18} />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <motion.button 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-romantic-pink to-netflix-red text-white font-semibold hover:shadow-lg transition-all"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(229, 9, 20, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ 
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              ♥ Feliz Aniversário ♥
            </motion.span>
          </motion.button>
          
          <motion.button 
            className="px-6 py-3 rounded-full bg-netflix-dark border border-romantic-pink text-romantic-pink font-semibold hover:bg-romantic-pink hover:text-white transition-all"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#FF758F",
              color: "#FFFFFF"
            }}
            whileTap={{ scale: 0.95 }}
          >
            19.03.2024
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-gray-400 text-sm"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} - Para o amor da minha vida
        </motion.p>
        
        <motion.div
          className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-romantic-pink to-transparent"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
