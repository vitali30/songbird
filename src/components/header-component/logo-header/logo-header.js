import React from 'react'
import './logo-header.css'

const Logo = ({score}) => {
    return (
        <div className='logo__container'>
            <article className='logo_text'>Song<span className='logo_color'>bird</span></article>
            <span className='logo_counter'>
                Score: {score}
            </span>
        </div>
    )
}

export default Logo