import React from 'react'
import './app-header.css'
import Logo from '../logo-header'
import Navigation from '../navigation-header'
import './app-header.css'

const Header = ({score, nowLevel}) => {
    return (
            <header className='header'>
                <Logo
                    score={score} 
                />
                <Navigation
                    nowLevel={nowLevel}
                />
            </header>
    )
}

export default Header