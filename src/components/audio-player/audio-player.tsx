import React, { useState, useRef } from 'react';
import './audio-player.css';
import { VolumeKnob } from './VolumeKnob';
import buttonClickSound from '../../assets/button_click.mp3';
import backgroundMusic from '../../assets/song.mp3';

interface AudioPlayerProps {
  buttonText?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ buttonText = 'Play Music' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(new Audio(backgroundMusic));
  const buttonSoundRef = useRef(new Audio(buttonClickSound));

  const togglePlay = async () => {
    if (isReady) {
      try {
        // Always play button click sound first
        await buttonSoundRef.current.play();
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (!isPlaying) {
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  return (
    <div className="audio-player">
      <button className="button-14" role="button" onClick={togglePlay} disabled={!isReady}>
        <div className="button-14-top text">
          {!isReady ? 'Loading...' : isPlaying ? 'Pause Music' : buttonText}
        </div>
        <div className="button-14-bottom"></div>
        <div className="button-14-base"></div>
      </button>
      <VolumeKnob audioRef={audioRef} initialVolume={0} />
    </div>
  );
};
