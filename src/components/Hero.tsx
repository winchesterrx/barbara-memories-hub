import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Gift, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  quote: string;
  backgroundImage: string;
}

const Hero = ({ title, subtitle, quote, backgroundImage }: HeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 1.2, 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05, 
      backgroundColor: "#ff1a24", 
      boxShadow: "0 10px 20px rgba(229, 9, 20, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    },
    tap: { scale: 0.95 }
  };

  const renderLetterSpan = (text: string) => {
    return text.split('').map((letter, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        className="inline-block"
        style={{ 
          display: "inline-block", 
          marginRight: letter === " " ? "0.3em" : "0"
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  const today = new Date();
  const isBirthdayMonth = today.getMonth() === 2; // March is month 2 (0-indexed)
  const isBirthdayDay = today.getDate() === 19;
  const isBirthday = isBirthdayMonth && isBirthdayDay;

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-netflix-black/40"></div>
      <div className="absolute inset-0 bg-[url('/romantic-texture.png')] opacity-20 mix-blend-overlay"></div>
      
      {/* Birthday decorations that only show on the actual birthday */}
      {isBirthday && (
        <>
          <motion.div 
            className="absolute top-20 left-10"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3
            }}
          >
            <Cake className="text-romantic-pink" size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 right-10"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2.5,
              delay: 0.5
            }}
          >
            <Gift className="text-netflix-red" size={36} />
          </motion.div>
          
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`sparkle-hero-${i}`}
              className="absolute text-yellow-300"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2
              }}
            >
              <Sparkles size={16 + Math.random() * 10} />
            </motion.div>
          ))}
        </>
      )}
      
      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-romantic font-bold mb-4 text-white relative overflow-hidden"
        >
          <div className="flex flex-wrap justify-center">
            {renderLetterSpan(title)}
          </div>
          <motion.div 
            className="h-1 w-60 bg-romantic-pink mt-2 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-6 text-romantic-light font-romantic"
          variants={textVariants}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="max-w-2xl mx-auto relative"
          variants={textVariants}
        >
          <motion.p 
            className="quote-text text-lg md:text-xl italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            "{quote}"
          </motion.p>
          <motion.div 
            className="h-0.5 w-20 bg-romantic-pink/50 mt-6 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="mt-10"
          variants={buttonVariants}
        >
          <motion.button 
            className={`netflix-button text-lg px-8 py-4 rounded-full bg-netflix-red shadow-lg relative overflow-hidden group ${isBirthday ? 'birthday-box-glow' : ''}`}
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="relative z-10">Ver Nossa História</span>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-full bg-romantic-pink rounded-full -z-0"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
        
        {isBirthday && (
          <motion.div
            className="mt-6 text-romantic-pink birthday-text-glow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <motion.span
              className="inline-block text-lg font-romantic"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2
              }}
            >
              ✨ Feliz Aniversário! ✨
            </motion.span>
          </motion.div>
        )}
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="bg-white w-1 h-2 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
