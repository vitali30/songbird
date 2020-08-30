import React, {Component} from 'react'
import ImageQuestion from '../image-bird'
import AudioQuestion from '../audio-question'
import { DESCRIPTION } from '../../utilits/constant'
import './one-bird-description.css'

export default class OneBirdDescription extends Component {

  render() {
    const {birdDescription} = this.props
    return (
      <section className='description__container'>
        <div>
          <div className='description__container_felxPart' >
            <ImageQuestion
              image={birdDescription.image}
              alt={DESCRIPTION}/>
            <div className='description__container_about'>
              <div className="nameBird">
                <article>
                  <h4>{birdDescription.name}</h4>
                </article>
                <hr className='description__line'/> <br/>
                <article>
                  <h5>{birdDescription.species}</h5>
                </article>
                <hr className='description__line'/> <br/>
              </div>
              <AudioQuestion audio={birdDescription.audio}/>
            </div>
          </div>
          <p className="description">
            {birdDescription.description}
          </p>
        </div>
      </section>
    )
  }
}