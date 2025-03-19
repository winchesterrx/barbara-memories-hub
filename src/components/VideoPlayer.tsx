
import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface VideoPlayerProps {
  videoSrc: string;
  title: string;
  description?: string;
  poster?: string;
}

const VideoPlayer = ({ videoSrc, title, description, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Add event listeners to track video state
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      console.log("Video can play now");
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    
    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    // If the event came from a control button, stop propagation
    if (e) {
      e.stopPropagation();
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Create a play promise to handle autoplay restrictions
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log("Video playing successfully");
          }).catch(error => {
            console.error("Error playing video:", error);
            // If autoplay is prevented, we need to show UI to let the user start playback
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div className="mb-6 md:mb-12 relative group">
      <div 
        className="video-container relative mb-4 rounded-lg overflow-hidden shadow-xl cursor-pointer" 
        onClick={handleVideoClick}
      >
        <video 
          ref={videoRef}
          className="w-full h-full rounded-lg"
          poster={poster}
          playsInline // Important for mobile
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Big play button overlay when video is not playing */}
        {!isPlaying && isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button 
              onClick={togglePlay}
              className="bg-romantic-pink/80 text-white p-4 rounded-full hover:bg-romantic-pink transition-colors z-10"
              aria-label="Play video"
            >
              <Play size={isMobile ? 24 : 32} />
            </button>
          </div>
        )}
        
        {/* Custom controls overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3 w-full">
            <button 
              onClick={togglePlay}
              className="bg-romantic-pink text-white p-1.5 sm:p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={isMobile ? 16 : 20} /> : <Play size={isMobile ? 16 : 20} />}
            </button>
            
            <button 
              onClick={toggleMute}
              className="bg-romantic-pink text-white p-1.5 sm:p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={isMobile ? 16 : 20} /> : <Volume2 size={isMobile ? 16 : 20} />}
            </button>
            
            <div className="text-white ml-1 sm:ml-2 font-medium truncate text-sm sm:text-base">{title}</div>
          </div>
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="text-lg sm:text-xl font-semibold text-romantic-light mb-1 sm:mb-2">{title}</h3>
        {description && <p className="text-gray-300 text-sm sm:text-base">{description}</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;
