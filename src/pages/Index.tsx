
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import PhotoCarousel from '../components/PhotoCarousel';
import VideoPlayer from '../components/VideoPlayer';
import Quote from '../components/Quote';
import MusicPlayer from '../components/MusicPlayer';
import Footer from '../components/Footer';
import { siteConfig } from '../config/contentConfig';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
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
        {siteConfig.photoCategories.map((category, index) => (
          <PhotoCarousel 
            key={index}
            title={category.title}
            memories={category.memories}
          />
        ))}
      </Section>
      
      <Quote text={siteConfig.quotes[0].text} author={siteConfig.quotes[0].author} />
      
      <Section 
        title="Nossos Vídeos" 
        description="Reviva nossos momentos especiais através destes vídeos."
        id="videos"
        className="bg-netflix-dark py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.videos.map((video) => (
            <VideoPlayer 
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              description={video.description}
              poster={video.poster}
            />
          ))}
        </div>
      </Section>
      
      <Quote text={siteConfig.quotes[1].text} author={siteConfig.quotes[1].author} />
      
      <Section 
        title="Feliz Aniversário"
        id="birthday"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-romantic text-romantic-pink mb-6">{siteConfig.birthdayMessage.title}</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{siteConfig.birthdayMessage.message}</p>
          <div className="my-8 flex justify-center">
            <span className="inline-block text-4xl md:text-6xl font-romantic text-romantic-pink animate-pulse-slow">♥</span>
          </div>
        </div>
      </Section>
      
      <Quote text={siteConfig.quotes[2].text} author={siteConfig.quotes[2].author} />
      
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
