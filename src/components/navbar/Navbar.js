import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import Buttons from '../button/Buttons'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-cont">
        <div className="logo"><Link to='/' className='logo-cont'>
          <div className="logo-img">
            <img src="./images/logo.png" alt="" />
          </div>
          <h1 className='logo-title'>Low Frim</h1>
          </Link>
          </div>
        <ul className='nav-item'>
         <Link to='/' className='nav-link'><li>Home</li></Link>
         <Link to='./about' className='nav-link'><li>About</li></Link>
         <Link to='./services' className='nav-link'><li>Services</li></Link>
         <Link to='./product' className='nav-link'><li>Product</li></Link>
         <Link to='./addproduct' className='nav-link'><li>Add Product</li></Link>
         <Link to='./hooks' className='nav-link'><li>Hooks</li></Link>
         <Link to='/contact' className='nav-link'><li>Contact</li></Link>
        </ul>
        <div className="button">
          <Buttons>Buy Now</Buttons>
        </div>
      </div>
    </div>
  )
}

export default Navbar
