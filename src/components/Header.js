import React from 'react'
import Nav from './Nav'
import Logo from '../images/Logo.svg'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little lemon logo" />
      Header
      <Nav />
    </header>
  )
}

export default Header