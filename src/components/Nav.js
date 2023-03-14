import React from 'react'
import './Nav.css';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav>
      <div className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className='navbar-small'>
        <img className='menu' src="images/icon_hamburger-menu.svg" alt="menu" onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='navbar-small-overlay'>
            <img className='close' src="images/x-symbol.svg" alt="exit" onClick={() => setToggleMenu(false)}/>
            <ul>
              <li className='p-markazi'><a href="#home">Home</a></li>
              <li className='p-markazi'><a href="#about">About</a></li>
              <li className='p-markazi'><a href="#menu">Menu</a></li>
              <li className='p-markazi'><a href="#reservations">Reservations</a></li>
              <li className='p-markazi'><a href="#order-online">Order Online</a></li>
              <li className='p-markazi'><a href="#login">Login</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Nav