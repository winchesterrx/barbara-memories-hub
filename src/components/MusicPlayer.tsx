
import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  musicSrc: string;
  musicTitle: string;
  musicArtist?: string;
}

const MusicPlayer = ({ musicSrc, musicTitle, musicArtist }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const value = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(value);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
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

  return (
    <div className="music-player">
      <audio ref={audioRef} src={musicSrc} preload="metadata" />
      
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={togglePlay}
            className="bg-romantic-pink rounded-full p-2 text-white"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          
          <div className="hidden md:block">
            <Music size={16} className="text-romantic-light" />
          </div>
          
          <div>
            <p className="text-white text-sm font-semibold">{musicTitle}</p>
            {musicArtist && <p className="text-gray-400 text-xs">{musicArtist}</p>}
          </div>
        </div>
        
        <div className="flex-1 mx-4 hidden md:block">
          <div 
            className="h-2 bg-netflix-gray rounded-full cursor-pointer" 
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-netflix-red rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={toggleMute}
          className="p-2 text-white"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
