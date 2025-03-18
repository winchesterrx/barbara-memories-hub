
import React from 'react';
import { Heart } from 'lucide-react';

interface QuoteProps {
  text: string;
  author?: string;
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <div className="py-16 px-4 my-8 bg-netflix-dark rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <Heart className="mx-auto mb-6 text-romantic-pink" size={32} />
        <p className="text-xl md:text-2xl lg:text-3xl italic font-romantic text-romantic-light mb-6">
          "{text}"
        </p>
        {author && (
          <p className="text-romantic-pink font-semibold">
            — {author}
          </p>
        )}
      </div>
    </div>
  );
};

export default Quote;
