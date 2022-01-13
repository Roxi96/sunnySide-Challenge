import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Information from './components/Information/Information'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Information />
  </React.StrictMode>,
  document.getElementById('root')
)
