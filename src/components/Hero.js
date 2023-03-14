import React from 'react'
import './Hero.css'
import Reservation from './Reservation'

const Hero = () => {
  return (
    <section>
      <div className='hero'>
        <div className='hero-description'>
        <h1 className='p-markazi'>Little Lemon</h1>
        <h3 className='p-markazi'>Chicago</h3>
        <p className='p-karla'>We are family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
        <button className='p-markazi'>Reserve a Table</button>
      </div>
      <img src="images/restauranfood.jpg" alt="restaurant food image" />
      </div>
      <Reservation />
    </section>
  )
}

export default Hero