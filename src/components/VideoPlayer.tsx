
import React from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  title: string;
  description?: string;
  poster?: string;
}

const VideoPlayer = ({ videoSrc, title, description, poster }: VideoPlayerProps) => {
  return (
    <div className="mb-12">
      <div className="video-container mb-4">
        <video 
          controls 
          className="w-full h-full" 
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
      <h3 className="text-xl font-semibold text-romantic-light mb-2">{title}</h3>
      {description && <p className="text-gray-300">{description}</p>}
    </div>
  );
};

export default VideoPlayer;
