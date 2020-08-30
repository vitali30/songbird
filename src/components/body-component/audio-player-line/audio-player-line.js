import React from 'react'
import './audio-player-line.css'
import calculateCurrentValue from '../../utilits/calculate-current-value'

const AudioPlayer = ({ playIcon, togglePlay, lineClick, playerProgress, currentTime, restTime }) => {

  return(
    <React.Fragment>
      <div className={`audio__container_paly ${playIcon}`}
          onClick={togglePlay}>
        </div>
        <div className='audio__container_progress'>
          <div className='audio__container_line' onClick={lineClick}>
            <div className='audio_percentage' style={playerProgress}></div>
          </div>
          <div className='audio__timer'>
            <div className='audio__timer_past'>
              {calculateCurrentValue(currentTime)}
            </div>
            <div className='audio__timer_rest'>
              {restTime}
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default AudioPlayer