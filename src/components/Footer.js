import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='logo'>
            <img src="images/Asset-20@4x.png" alt="little lemon logo" />
          </div>
          <div className='navigation'>
            <h2 className='p-markazi'>Navigation</h2>
            <ul>
              <li className='p-markazi'><a href="#home">Home</a></li>
              <li className='p-markazi'><a href="#about">About</a></li>
              <li className='p-markazi'><a href="#menu">Menu</a></li>
              <li className='p-markazi'><a href="#reservations">Reservations</a></li>
              <li className='p-markazi'><a href="#order-online">Order Online</a></li>
              <li className='p-markazi'><a href="#login">Login</a></li>
            </ul>
          </div>
          <div className='contact'>
            <h2 className='p-markazi'>Contact</h2>
            <ul>
              <li className='p-markazi'>3437 Cheshire Road</li>
              <li className='p-markazi'>203-426-1404</li>
              <li className='p-markazi'>littlelemon@gmail.com</li>
            </ul>
          </div>
          <div className='social-media'>
            <h2 className='p-markazi'>Social Media</h2>
            <ul>
              <li className='p-markazi'><a href="https://www.facebook.com/">Facebook</a></li>
              <li className='p-markazi'><a href="https://www.instagram.com/">Instagram</a></li>
              <li className='p-markazi'><a href="https://twitter.com/home">Twitter</a></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer