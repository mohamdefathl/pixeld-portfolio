import React, { useEffect, useRef, useState } from 'react';
import './VolumeKnob.css';

interface VolumeKnobProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  initialVolume?: number;
}

export const VolumeKnob: React.FC<VolumeKnobProps> = ({ audioRef, initialVolume = 0 }) => {
  const [volume, setVolume] = useState(initialVolume);
  const knobRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [tickHighlight, setTickHighlight] = useState(0);

  const createTicks = (numTicks: number, highlightNumTicks: number) => {
    const ticks = [];
    const degreeIncrement = 270 / (numTicks - 1);

    for (let i = 0; i < numTicks; i++) {
      const rotateDegrees = startingTickAngle + degreeIncrement * i;
      const isHighlighted = i <= highlightNumTicks;
      ticks.push(
        <div
          key={i}
          className={`tick ${isHighlighted ? 'highlighted' : ''}`}
          style={{ transform: `rotate(${rotateDegrees}deg)` }}
        />
      );
    }
    return ticks;
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (audioRef.current?.paused) {
      const promise = audioRef.current.play();
      if (promise !== undefined) {
        promise.catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    }
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !knobRef.current) return;

    const knobRect = knobRef.current.getBoundingClientRect();
    const knobCenterX = knobRect.width / 2 + knobRect.left;
    const knobCenterY = knobRect.height / 2 + knobRect.top;

    const mouseX = 'touches' in event ? event.touches[0].pageX : event.pageX;
    const mouseY = 'touches' in event ? event.touches[0].pageY : event.pageY;

    const adjacentSide = knobCenterX - mouseX;
    const oppositeSide = knobCenterY - mouseY;

    let angle = Math.atan2(adjacentSide, oppositeSide) * 180 / Math.PI;
    angle = -(angle - 135);

    if (angle >= 0 && angle <= 270) {
      const volumeValue = Math.floor(angle / (270 / 100));
      setVolume(volumeValue);
      
      if (audioRef.current) {
        audioRef.current.volume = volumeValue / 100;
      }

      const tickHighlightPosition = Math.round((volumeValue * 2.7) / 10);
      setTickHighlight(tickHighlightPosition);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startingTickAngle = -135;

  return (
    <div className="volume-knob-container">      
      <div className="knob-surround">
        <div
          ref={knobRef}
          className="knob"
          style={{ transform: `rotate(${(volume * 270) / 100}deg)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        />
        <span className="min">Min</span>
        <span className="max">Max</span>
        <div className="ticks">
          {createTicks(27, tickHighlight)}
        </div>
      </div>
    </div>
    
  );
};
