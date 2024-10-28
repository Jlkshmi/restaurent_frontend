import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src='/images/1600w-8C8EhVwzkV8.webp' className='logo'/></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/category">MENU</Link></li>
        <li><Link to="/cartpage"><i className="fa-solid fa-cart-shopping"></i></Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar