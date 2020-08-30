import React, {Component} from 'react'
import ImageQuestion from '../image-bird'
import TitleQuestion from '../title-question'
import AudioQuestion from '../audio-question'
import './app-question.css'
import {NO_NAME, DEFAULT_IMAGE, QUESTION} from '../../utilits/constant'

export default class Question extends Component {
    
    render() {
        const {question, isFinishThisLevel } = this.props;
        const resultImage = !isFinishThisLevel ? DEFAULT_IMAGE : question.image;
        const resultBirdName = !isFinishThisLevel ? NO_NAME : question.name;
       
        return (
            <section className='question'>
               <ImageQuestion
                   image={resultImage}
                   alt={QUESTION}
               />
               <div className='question_secondary'>
                   <TitleQuestion
                       title={resultBirdName}
                   />
                   <AudioQuestion
                       audio={question.audio}
                       flag={isFinishThisLevel}
                   />
               </div>
            </section>
       )
    }
}