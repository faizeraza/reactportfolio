import React, { useState, useRef, useEffect } from 'react';
import './SoundControl.css';
import backgroundMusic from '../assets/background.mp3'; // Ensure this path is correct

const SoundControl = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleAudioLoaded = () => {
      if (!isMuted) {
        audioElement.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Error attempting to play audio:', error);
        });
      }
    };

    if (audioElement) {
      audioElement.volume = isMuted ? 0 : 1;
      audioElement.addEventListener('canplaythrough', handleAudioLoaded);

      return () => {
        audioElement.removeEventListener('canplaythrough', handleAudioLoaded);
      };
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="sound-control">
      <audio ref={audioRef} src={backgroundMusic} loop />
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      {!isPlaying && (
        <button onClick={() => audioRef.current.play()} className="play-button">
            play
        </button>
      )}
    </div>
  );
};

export default SoundControl;
