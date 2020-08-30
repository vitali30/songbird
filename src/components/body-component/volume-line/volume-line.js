import React, {Component} from 'react'
import './volume-line.css'

export default class VolumeLine extends Component {

  state = {
    isMouseNowDown: false,
  }
 
  toggleLineVisibility = (flag) => {this.setState({isVolumeLineVisible: flag})}
  toggleKeyDown = (flag) => {this.setState({isMouseNowDown: flag})}

  toggleVolume = (event) => {
    const volume = ((event.currentTarget.getBoundingClientRect().y + 
    event.currentTarget.offsetHeight - 
    event.clientY) / 
    event.currentTarget.offsetHeight) * 100
    this.props.changeVolume(false, Math.floor(volume))
  }

  onMouseUp = () => {this.toggleKeyDown(false)}

  onMouseMove = (event) => {
    if(this.state.isMouseNowDown) {
      this.toggleVolume(event)
    }
}

  onMouseDown = (event) => {
    this.toggleKeyDown(true);
    this.toggleVolume(event);
  }

  render() {
    const {persentage, isVisible} = this.props;
    const volumeStyle = {
      height: persentage + 'px',
      top: (100 - persentage) + 'px'
    }
    const line = !isVisible ? '' : 
      (<div className='volume__container_line'
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}>
        <div className={`audio_volume_line`}>
          <div className='audio_volume_progress'
            style={volumeStyle}>
          </div>
        </div>
      </div>)

    return (<React.Fragment>
      {line}
      </React.Fragment>)
    }
}