
import React from 'react';

interface MemoryCardProps {
  imageSrc: string;
  title: string;
  date?: string;
  description?: string;
}

const MemoryCard = ({ imageSrc, title, date, description }: MemoryCardProps) => {
  return (
    <div className="netlfix-card relative group">
      <div className="aspect-[2/3] overflow-hidden rounded-md bg-netflix-dark">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
        {date && <p className="text-romantic-pink text-sm">{date}</p>}
        {description && <p className="text-gray-200 text-xs line-clamp-2 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default MemoryCard;
