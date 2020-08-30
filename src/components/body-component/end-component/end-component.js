import React from 'react'
import './end-component.css'
import { GRATITUTE, END_GAME_TEXT1, END_GAME_TEXT2 } from '../../utilits/constant'

const EndComponent = (props) => {
    return (
        <div className='end__component'>
            <h2>{GRATITUTE}</h2>
            <hr/>
            <p className='end__component_text'> {END_GAME_TEXT1} {props.score} {END_GAME_TEXT2} </p>
            <hr/>
        </div>
    )
}

export default EndComponent