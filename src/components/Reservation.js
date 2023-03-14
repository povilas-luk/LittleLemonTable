import React from 'react'
import "./Reservation.css"

const Reservation = () => {

  return (
    <div className='reservation-background'>
      <div className='reservation-container'>
        <button> X </button>
        <form >
          <label htmlFor="name">Name</label>
          <input id='name' type="text" placeholder='Name..' />
          <input type="text" placeholder='email@email.com' />
          <input type="text" placeholder='password123' />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Reservation