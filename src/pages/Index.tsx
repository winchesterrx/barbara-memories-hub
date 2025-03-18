
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Gift, Sparkles, Star, HeartHandshake } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import PhotoCarousel from '../components/PhotoCarousel';
import VideoPlayer from '../components/VideoPlayer';
import Quote from '../components/Quote';
import MusicPlayer from '../components/MusicPlayer';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import { siteConfig } from '../config/contentConfig';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [particleType, setParticleType] = useState<'default' | 'hearts' | 'confetti'>('default');
  const [showBirthdayAnimation, setShowBirthdayAnimation] = useState(false);
  const birthdaySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Quote rotation
    const quoteTimer = setInterval(() => {
      setActiveQuoteIndex((prevIndex) => 
        prevIndex === siteConfig.quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(quoteTimer);
  }, []);

  useEffect(() => {
    // Change particle effects on scroll and check for birthday section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      
      if (scrollY < winHeight) {
        setParticleType('default');
      } else if (scrollY < winHeight * 2) {
        setParticleType('hearts');
      } else {
        setParticleType('confetti');
      }

      // Check if birthday section is visible
      if (birthdaySectionRef.current) {
        const rect = birthdaySectionRef.current.getBoundingClientRect();
        if (rect.top < winHeight && rect.bottom > 0) {
          setShowBirthdayAnimation(true);
        } else {
          setShowBirthdayAnimation(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Birthday animation elements
  const BirthdayAnimationElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {showBirthdayAnimation && (
        <>
          {/* Floating cake icons */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`cake-${i}`}
              className="absolute text-romantic-pink"
              initial={{ top: '100%', left: `${15 + i * 20}%` }}
              animate={{ 
                top: '-20%',
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            >
              <Cake size={24 + i * 2} />
            </motion.div>
          ))}
          
          {/* Floating gift icons */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`gift-${i}`}
              className="absolute text-netflix-red"
              initial={{ top: '100%', left: `${5 + i * 20}%` }}
              animate={{ 
                top: '-20%',
                rotate: [0, -15, 15, 0]
              }}
              transition={{ 
                duration: 10 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8
              }}
            >
              <Gift size={20 + i * 3} />
            </motion.div>
          ))}
          
          {/* Floating sparkles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-yellow-300"
              initial={{ 
                top: '100%', 
                left: `${i * 12.5}%`,
                opacity: 0.5
              }}
              animate={{ 
                top: '-20%',
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            >
              <Sparkles size={18 + i * 2} />
            </motion.div>
          ))}
        </>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-netflix-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5 
            }}
            className="mb-8"
          >
            <span className="text-6xl font-romantic text-romantic-pink animate-text-glow">B</span>
            <span className="text-6xl font-netflix text-netflix-red">ARBARAFLIX</span>
          </motion.div>
          <motion.div 
            animate={{ 
              opacity: [0.4, 1, 0.4],
              y: [0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5 
            }}
          >
            <p className="text-romantic-light">Carregando momentos especiais...</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden bg-[url('/romantic-texture.png')] bg-fixed bg-opacity-20">
      <ParticlesBackground type={particleType} />
      <BirthdayAnimationElements />
      <Header />
      
      <Hero 
        title={siteConfig.hero.title}
        subtitle={siteConfig.hero.subtitle}
        quote={siteConfig.hero.quote}
        backgroundImage={siteConfig.hero.backgroundImage}
      />
      
      <Section 
        title="Nossa História" 
        description="Uma coleção de momentos especiais que construímos juntos."
        id="memories"
      >
        <AnimatePresence>
          {siteConfig.photoCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              className="mb-16"
            >
              <PhotoCarousel 
                title={category.title}
                memories={category.memories}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Section>
      
      <Quote 
        text={siteConfig.quotes[activeQuoteIndex].text} 
        author={siteConfig.quotes[activeQuoteIndex].author} 
      />
      
      <Section 
        title="Nossos Vídeos" 
        description="Reviva nossos momentos especiais através destes vídeos."
        id="videos"
        className="bg-netflix-dark bg-opacity-80 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-romantic-pink/20 transition-shadow"
            >
              <VideoPlayer 
                videoSrc={video.videoSrc}
                title={video.title}
                description={video.description}
                poster={video.poster}
              />
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Quote text={siteConfig.quotes[(activeQuoteIndex + 1) % siteConfig.quotes.length].text} author={siteConfig.quotes[(activeQuoteIndex + 1) % siteConfig.quotes.length].author} />
      
      <Section 
        title="Feliz Aniversário"
        id="birthday"
        className="text-center relative"
        ref={birthdaySectionRef}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -top-16 left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2
              }}
            >
              <Cake className="text-romantic-pink" size={48} />
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-romantic text-romantic-pink mb-6 animate-text-glow pt-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {siteConfig.birthdayMessage.title}
            </motion.h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card p-8 rounded-lg border border-romantic-pink/20"
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-2 -left-2"
                animate={{ 
                  rotate: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  repeatType: "reverse"
                }}
              >
                <Star className="text-yellow-300 fill-yellow-300" size={28} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -right-2"
                animate={{ 
                  rotate: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              >
                <HeartHandshake className="text-romantic-pink" size={28} />
              </motion.div>
            
              <p className="text-lg md:text-xl text-gray-300 mb-8">{siteConfig.birthdayMessage.message}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="my-12 flex justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.4 
            }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2 
              }}
            >
              <motion.span 
                className="inline-block text-6xl md:text-8xl font-romantic text-romantic-pink"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3 
                }}
              >
                ♥
              </motion.span>
              
              <motion.div 
                className="absolute -top-4 -right-4"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  delay: 1
                }}
              >
                <Sparkles className="text-yellow-300" size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
      
      <Quote text={siteConfig.quotes[(activeQuoteIndex + 2) % siteConfig.quotes.length].text} author={siteConfig.quotes[(activeQuoteIndex + 2) % siteConfig.quotes.length].author} />
      
      <Footer />
      
      <MusicPlayer 
        musicSrc={siteConfig.music.src}
        musicTitle={siteConfig.music.title}
        musicArtist={siteConfig.music.artist}
        musicCover={siteConfig.music.cover}
        autoPlay={siteConfig.music.autoPlay}
      />
    </div>
  );
};

export default Index;
