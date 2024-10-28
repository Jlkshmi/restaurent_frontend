import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
     <div className='footer'>
      <div className='footer-content'>
        <div className='social-media'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.webp" className='footer-icon' alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.webp" className='footer-icon' alt="Twitter" />
          </a>
        </div>

        <div className='newsletter'>
          <h4>Subscribe to our Website</h4>
          <input type="email" placeholder="Enter your email" />
          <button className='subscribe-button'>Subscribe</button>
        </div>
      </div>

      <div className='footer-bottom'>
        <h4>© 2024 GOOD KITCHEN PVT.LTD.</h4>
      </div>
    </div>
    </>
  )
}

export default Footer