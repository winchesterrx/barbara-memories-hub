
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    // Change particle effects on scroll
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <span className="text-6xl font-romantic text-romantic-pink">B</span>
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
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <ParticlesBackground type={particleType} />
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
        className="bg-netflix-dark py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            className="text-2xl md:text-3xl font-romantic text-romantic-pink mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.birthdayMessage.title}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8">{siteConfig.birthdayMessage.message}</p>
          </motion.div>
          
          <motion.div 
            className="my-8 flex justify-center"
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
            <motion.span 
              className="inline-block text-6xl md:text-8xl font-romantic text-romantic-pink"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2.5 
              }}
            >
              ♥
            </motion.span>
          </motion.div>
        </div>
      </Section>
      
      <Quote text={siteConfig.quotes[(activeQuoteIndex + 2) % siteConfig.quotes.length].text} author={siteConfig.quotes[(activeQuoteIndex + 2) % siteConfig.quotes.length].author} />
      
      <Footer />
      
      <MusicPlayer 
        musicSrc={siteConfig.music.src}
        musicTitle={siteConfig.music.title}
        musicArtist={siteConfig.music.artist}
      />
    </div>
  );
};

export default Index;
