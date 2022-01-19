import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Information from './components/Information/Information'
import {info, info2} from '../data/variables'
import Information2 from './components/Information2/Information2'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Information info={info} info2={info2}/>
    <Information2 />
  </React.StrictMode>,
  document.getElementById('root')
)
