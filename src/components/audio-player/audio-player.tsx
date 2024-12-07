import React, { useState, useRef } from 'react';
import './audio-player.css';
import { VolumeKnob } from './volume-knob';
import buttonClickSound from '../../assets/button_click.mp3';
import backgroundMusic from '../../assets/song.mp3';
interface Props {
  children: React.ReactNode;
}
export const AudioPlayer: React.FC<Props> = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(backgroundMusic));
  const buttonSoundRef = useRef(new Audio(buttonClickSound));

  const playAudio = async () => {
    try {
      await buttonSoundRef.current.play();
      await new Promise(resolve => setTimeout(resolve, 200));
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const pauseAudio = async () => {

    try {
      await buttonSoundRef.current.play();
      await new Promise(resolve => setTimeout(resolve, 200));
      audioRef.current.pause();
      setIsPlaying(false);
    } catch (error) {
      console.error('Error pausing audio:', error);
    }
  };

  return (
    <div className="audio-player">
      <div className="audio-player-buttons">
        <button
          className="button-14"
          role="button"
          onClick={playAudio}
          disabled={isPlaying}
        >
          <div className="button-14-top text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="button-14-bottom"></div>
          <div className="button-14-base"></div>
        </button>
        <button
          className="button-14"
          role="button"
          onClick={pauseAudio}
          disabled={!isPlaying}
        >
          <div className="button-14-top text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          </div>
          <div className="button-14-bottom"></div>
          <div className="button-14-base"></div>
        </button>
        {children}
      </div>
      <VolumeKnob audioRef={audioRef} initialVolume={50} />
    </div>
  );
};
