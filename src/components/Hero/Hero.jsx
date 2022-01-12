import React from 'react'
import classes from './Hero.module.css'
import bg from '../../../images/desktop/image-header.jpg'


function Hero() {
  
    const heroBg={ 
        position: 'absolute',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        top: '0',
        zIndex: '1'
      }
    return (
        <header style={heroBg}>
            <h1 className={classes.title}>WE ARE THE CREATIVES</h1>
            <img className={classes.arrow} src="../images/icon-arrow-down.svg" alt="" />
        </header>
    )
}

export default Hero
