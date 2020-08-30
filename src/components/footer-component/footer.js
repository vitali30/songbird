import React from 'react'
import './footer.css'

const Footer = ({onClick, text}) => {
    return (
        <footer className='footer'
            onClick={onClick}
        >
            {text}
        </footer>
    )
}

export default Footer