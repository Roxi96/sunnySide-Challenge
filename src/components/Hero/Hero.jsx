import React from 'react'
import classes from './Hero.module.css'
import { heroBg } from '../../../data/variables'


function Hero() {
  
    return (
        <header style={heroBg}>
            <h1 className={classes.title}>WE ARE THE CREATIVES</h1>
            <img className={classes.arrow} src="../images/icon-arrow-down.svg" alt="" />
        </header>
    )
}

export default Hero
