
import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  title: string;
  description?: string;
  poster?: string;
}

const VideoPlayer = ({ videoSrc, title, description, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="mb-12 relative group">
      <div className="video-container relative mb-4 rounded-lg overflow-hidden shadow-xl">
        <video 
          ref={videoRef}
          className="w-full h-full rounded-lg" 
          poster={poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Custom controls overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center space-x-3 w-full">
            <button 
              onClick={togglePlay}
              className="bg-romantic-pink text-white p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="bg-romantic-pink text-white p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <div className="text-white ml-2 font-medium truncate">{title}</div>
          </div>
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="text-xl font-semibold text-romantic-light mb-2">{title}</h3>
        {description && <p className="text-gray-300">{description}</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;
