import React from 'react'
import './tv-container.css'
import frame from '../../assets/frame.svg'
import { AudioPlayer } from '../audio-player/audio-player'

interface Props {
    children: React.ReactNode
}
export const TvContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className='pc-container'>
            <div className='pc-container-right'>
                <div className='pc-container-right-effects'></div>
                <div className='pc-container-right-content'>
                    <div className='pc-container-right-content-children'>
                        {children}
                    </div>
                    <img src={frame} alt="frame"/>
                </div>
            </div>
            <div className='pc-container-left'>
                <AudioPlayer />
            </div>            
        </div>
    )
}