
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { toast } from "sonner";

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
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  // Process the video URL when component mounts or videoSrc changes
  useEffect(() => {
    console.log("Processing video URL:", videoSrc);
    
    // Check if URL is from Google Drive
    if (videoSrc.includes('drive.google.com')) {
      try {
        let processedUrl = videoSrc;
        
        // Extract Google Drive ID if it's in the sharing URL format
        if (videoSrc.includes('/file/d/')) {
          const matches = videoSrc.match(/\/file\/d\/([^\/\?]+)/);
          if (matches && matches[1]) {
            processedUrl = `https://drive.google.com/uc?export=download&id=${matches[1]}`;
          }
        }
        
        console.log("Processed Google Drive URL:", processedUrl);
        setVideoUrl(processedUrl);
      } catch (error) {
        console.error("Error processing Google Drive URL:", error);
        setHasError(true);
        toast.error("Erro ao processar o link do vídeo");
      }
    } else {
      // Not a Google Drive URL, use as is
      setVideoUrl(videoSrc);
    }
  }, [videoSrc]);

  useEffect(() => {
    if (!videoUrl) return;
    
    console.log("Setting up video with URL:", videoUrl);
    
    // Add event listeners to track video state
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setIsLoading(false);
      console.log("Video can play now");
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      setIsLoading(false);
      console.log("Video data loaded");
    };

    const handleWaiting = () => {
      setIsLoading(true);
      console.log("Video is buffering");
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      console.log("Video is playing");
    };

    const handleError = (e: any) => {
      console.error("Video error:", e, videoElement.error);
      setHasError(true);
      setIsLoading(false);
      toast.error("Erro ao carregar o vídeo. Tente novamente mais tarde.");
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('waiting', handleWaiting);
    videoElement.addEventListener('playing', handlePlaying);
    videoElement.addEventListener('error', handleError);
    
    // Reset video element
    videoElement.load();
    
    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('waiting', handleWaiting);
      videoElement.removeEventListener('playing', handlePlaying);
      videoElement.removeEventListener('error', handleError);
    };
  }, [videoUrl]);

  const togglePlay = (e?: React.MouseEvent) => {
    // If the event came from a control button, stop propagation
    if (e) {
      e.stopPropagation();
    }
    
    if (!videoRef.current) return;
    
    console.log("Toggle play clicked, current state:", isPlaying);
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Create a play promise to handle autoplay restrictions
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        setIsLoading(true);
        playPromise.then(() => {
          console.log("Video playing successfully");
          setIsPlaying(true);
          setIsLoading(false);
        }).catch(error => {
          console.error("Error playing video:", error);
          // If autoplay is prevented, we need to show UI to let the user start playback
          setIsPlaying(false);
          setIsLoading(false);
          toast.error("Clique no vídeo novamente para reproduzir");
        });
      }
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
        {hasError ? (
          <div className="bg-gray-900 w-full aspect-video flex items-center justify-center text-center p-4">
            <p className="text-romantic-pink">
              Não foi possível carregar o vídeo. Por favor, verifique a conexão e tente novamente.
            </p>
          </div>
        ) : (
          <>
            {videoUrl && (
              <video 
                ref={videoRef}
                className="w-full h-full rounded-lg"
                poster={poster}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controlsList="nodownload"
              >
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )}
            
            {/* Loading indicator */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-romantic-pink"></div>
              </div>
            )}
            
            {/* Big play button overlay when video is not playing */}
            {!isPlaying && (isLoaded || !isLoading) && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button 
                  onClick={(e) => togglePlay(e)}
                  className="bg-romantic-pink/80 text-white p-4 rounded-full hover:bg-romantic-pink transition-colors z-10"
                  aria-label="Play video"
                >
                  <Play size={isMobile ? 32 : 48} />
                </button>
              </div>
            )}
            
            {/* Custom controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3 w-full">
                <button 
                  onClick={(e) => togglePlay(e)}
                  className="bg-romantic-pink text-white p-1.5 sm:p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={isMobile ? 20 : 24} /> : <Play size={isMobile ? 20 : 24} />}
                </button>
                
                <button 
                  onClick={toggleMute}
                  className="bg-romantic-pink text-white p-1.5 sm:p-2 rounded-full hover:bg-romantic-pink/80 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={isMobile ? 20 : 24} /> : <Volume2 size={isMobile ? 20 : 24} />}
                </button>
                
                <div className="text-white ml-1 sm:ml-2 font-medium truncate text-sm sm:text-base">
                  {isPlaying ? title : "Clique para reproduzir"}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="px-2">
        <h3 className="text-lg sm:text-xl font-semibold text-romantic-light mb-1 sm:mb-2">{title}</h3>
        {description && <p className="text-gray-300 text-sm sm:text-base">{description}</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;
