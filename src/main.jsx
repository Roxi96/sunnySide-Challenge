import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
)
