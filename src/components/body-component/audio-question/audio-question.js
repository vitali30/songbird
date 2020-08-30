import React, {Component} from 'react'
import './audio-question.css'
import calculateCurrentValue from '../../utilits/calculate-current-value'
import VolumeLine from '../volume-line'
import AudioPlayer from '../audio-player-line'

export default class AudioQuestion extends Component {

  state = {
      birdSong: new Audio(this.props.audio),
      restTime: null,
      persentage: 1,
      isMuted: false,
      volumePersentage: 100,
      isVolumeLineVisible: false,
      lastVolumeBeforeMute: 0,
      isMouseNowDown: false,
    };

  componentDidMount = () => {
    const { birdSong } = this.state;
    this.updatingPlayLine();
    birdSong.addEventListener('loadedmetadata', () => {
      const newAudioDuration = calculateCurrentValue(birdSong.duration);
      this.setState({restTime: newAudioDuration})
    })
  }

  togglePlay = () => {
    const { birdSong } = this.state;
    birdSong.paused ? birdSong.play() : birdSong.pause();
  }

  updatingPlayLine = () => {
    this.state.birdSong.addEventListener('timeupdate', () => {
      this.setState(({birdSong}) => {
        const newRestTime = calculateCurrentValue(birdSong.duration - birdSong.currentTime);
        const newPersentage = (birdSong.currentTime / birdSong.duration) * 100;
        return{
          restTime: newRestTime,
          persentage: newPersentage,
        }
    })
    });
  }

  lineOnClick = (event) => {
    const { birdSong } = this.state;
    const resultWidth = event.currentTarget.offsetWidth;
    const clickPercent = (event.clientX - event.currentTarget.getBoundingClientRect().x) / resultWidth;
    birdSong.currentTime = clickPercent * birdSong.duration;
  }

  changeSource = () => {
    if(this.state.birdSong.src !== this.props.audio) {
      const { birdSong } = this.state;
      birdSong.pause();
      birdSong.src = this.props.audio;
    }
  }

  mouseOver = () => {this.setState({isVolumeLineVisible: true})}

  mouseOut = () => {this.setState({isVolumeLineVisible: false})}
 
  changingVolume = (mute, volume) => {
    this.setState(({ lastVolumeBeforeMute, birdSong}) => {
      if(mute) {
        return{
          lastVolumeBeforeMute: birdSong.volume,
          volumePersentage: 0,
          isMuted: true
        }
      } else if (!mute && !volume ){
        const persentage = lastVolumeBeforeMute * 100;
        return{
          isMuted: false,
          volumePersentage: persentage,
        }
      } else {
        return {
          isMuted: false,
          volumePersentage: volume,
        }
      }
    })
  }

  toggleVolume = () => {
    if (this.state.isMuted) {
      this.changingVolume(false)
    } else {
      this.changingVolume(true)
    }
  }

  render() {
    this.changeSource();
    const { birdSong, isMuted, volumePersentage, persentage, restTime } = this.state;
    birdSong.volume = isMuted ? 0 : volumePersentage / 100;
    if(this.props.flag) {
      birdSong.pause()
    };
    const classIsPlayNow = birdSong.paused ? '' : 'paused';
    const classIsMuted = isMuted ? 'muted' : '';
    const divStyle = {width: persentage + '%'}

    return (
      <div className='audio__container'>
        <AudioPlayer
          playIcon={classIsPlayNow}
          togglePlay={this.togglePlay}
          lineClick={this.lineOnClick}
          playerProgress={divStyle}
          currentTime={birdSong.currentTime}
          restTime={restTime}
        />
        <div className='volume_icon_container'
          onMouseLeave={this.mouseOut}>
          <div className={`audio_volume_icon ${classIsMuted}`}
                  onClick={this.toggleVolume}
                  onMouseEnter={this.mouseOver}
                  >
          </div>
          <VolumeLine
            changeVolume={this.changingVolume}
            isVisible={this.state.isVolumeLineVisible}
            persentage={this.state.volumePersentage}
          />
        </div>
      </div>
    )
  }
}