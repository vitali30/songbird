import React, {Component} from 'react'
import './app-description.css'
import OneBirdDescription from '../one-bird-description'
import EmptyDescription from '../empty-description'

export default class DescriptionAnsw extends Component {

  render() {
    const { isFirst } = this.props;
    const birdDescription = this.props.children;
    const CreatingDescription = !isFirst ? <OneBirdDescription birdDescription={birdDescription}/> : 
      <EmptyDescription/>

    return <React.Fragment>{CreatingDescription}</React.Fragment>
  }
}
