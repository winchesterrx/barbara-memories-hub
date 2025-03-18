
import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  musicSrc: string;
  musicTitle: string;
  musicArtist?: string;
  musicCover?: string;
  autoPlay?: boolean;
}

const MusicPlayer = ({ 
  musicSrc, 
  musicTitle, 
  musicArtist, 
  musicCover = "/placeholder.svg",
  autoPlay = true 
}: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const value = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(value);
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setAudioData);
    
    if (autoPlay) {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        });
      }
    }
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', setAudioData);
    };
  }, [autoPlay]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Play prevented by browser:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <motion.div 
      className="music-player glass-card"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <audio ref={audioRef} src={musicSrc} preload="metadata" />
      
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {musicCover && (
            <motion.div 
              className="h-12 w-12 rounded-md overflow-hidden hidden sm:block"
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <img src={musicCover} alt={musicTitle} className="h-full w-full object-cover" />
            </motion.div>
          )}
          
          <motion.button 
            onClick={togglePlay}
            className="bg-romantic-pink rounded-full p-3 text-white shine-effect"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>
          
          <div>
            <motion.p 
              className="text-white text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              {musicTitle}
            </motion.p>
            {musicArtist && (
              <motion.p 
                className="text-gray-400 text-xs"
                whileHover={{ scale: 1.05 }}
              >
                {musicArtist}
              </motion.p>
            )}
          </div>
        </div>
        
        <div className="flex-1 mx-4 hidden sm:flex flex-col">
          <div 
            className="h-2 bg-netflix-gray/40 rounded-full cursor-pointer relative" 
            onClick={handleProgressClick}
          >
            <motion.div 
              className="h-full bg-romantic-pink rounded-full relative"
              style={{ width: `${progress}%` }}
              whileHover={{ opacity: 0.8 }}
            >
              <motion.div 
                className="absolute -right-2 -top-1.5 h-5 w-5 bg-white rounded-full"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.button 
            onClick={toggleMute}
            className="p-2 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>
          
          <motion.button
            className="text-romantic-pink hidden sm:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={18} fill="currentColor" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
