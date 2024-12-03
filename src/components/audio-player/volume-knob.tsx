import React, { useEffect, useRef, useState } from 'react';
import './volume-knob.css';

interface VolumeKnobProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  initialVolume?: number;
}

export const VolumeKnob: React.FC<VolumeKnobProps> = ({ audioRef, initialVolume = 50 }) => {
  const [volume, setVolume] = useState(initialVolume);
  const knobRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume / 100;
    }
    // Set initial rotation to match middle volume
    if (knobRef.current) {
      const rotation = (initialVolume * 270) / 100;
      knobRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
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


  return (
    <div className="volume-knob-main-container">
      <div className="volume-knob-container">
        <div className="knob-surround">
          <div className="knob-top">
            <div
              ref={knobRef}
              className="knob"
              style={{ transform: `rotate(${(volume * 270) / 100}deg)` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
          </div>
          <div className="knob-bottom"></div>
          <div className="knob-base"></div>
        </div>
      </div>
      <div className="volume-labels">
        <span className="min">Min</span>
        <span className="max">Max</span>
      </div>
    </div>

  );
};
