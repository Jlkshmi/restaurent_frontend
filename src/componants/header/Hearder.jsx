import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

function Hearder() {
  const navigate= useNavigate()
  return (
    <div className='header-container'>
    <img src="/images/bg3.jpg" alt="Background" className='bg-image' />
    <div className='overlay'>
      <p className='header-text'>FIND YOUR <br/> HAPPINESS HERE</p>
      <p className='tagline'>Explore The Food and Discover Your Joy!</p>
      <div className='button-container'>
        <button onClick={()=>navigate('category')} className='cta-button'>Order Now</button>
      </div>
      <nav className='navigation'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
  )
}

export default Hearder