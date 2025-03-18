
import React, { useRef } from 'react';
import MemoryCard from './MemoryCard';

interface Memory {
  id: number;
  imageSrc: string;
  title: string;
  date?: string;
  description?: string;
}

interface PhotoCarouselProps {
  title: string;
  memories: Memory[];
}

const PhotoCarousel = ({ title, memories }: PhotoCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const { current } = scrollRef;
    const scrollAmount = current.clientWidth * 0.75;
    
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-romantic-light">{title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-netflix-red bg-opacity-30 hover:bg-opacity-70 transition-all"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-netflix-red bg-opacity-30 hover:bg-opacity-70 transition-all"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 snap-x scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {memories.map((memory) => (
          <div key={memory.id} className="flex-none w-64 md:w-72 snap-start">
            <MemoryCard 
              imageSrc={memory.imageSrc}
              title={memory.title}
              date={memory.date}
              description={memory.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
