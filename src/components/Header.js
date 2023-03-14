import React from 'react'
import Nav from './Nav'
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src="images/Logo.svg" alt="Little lemon logo" />
      <Nav />
    </header>
  )
}

export default Header