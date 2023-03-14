import React from 'react'
import './Highlight.css'

const Highlight = () => {
  return (
    <section>
      <div className='highlight'>
        <div className='special'>
          <h1 className='p-markazi'>This week specials!</h1>
        </div>
        <button className='p-markazi' type='button'>Online Menu</button>
      </div>
      <div className='special-menu'>
        <div className='special-item'>
          <img className='dish-img' src="images/greek-salad.jpg" alt="greek salad"/>
          <div className='special-text'>
            <div className='name-price'>
              <h3 className='p-markazi'>Greek salad</h3>
              <h3 className='price p-markazi'>$12.99</h3>
            </div>
            <p className='p-karla'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <div className='order'>
              <a className='p-markazi' href="#order-delivery">Order delivery</a>
              <img src="images/Basket.svg" alt="order" />
            </div>
          </div>
        </div>
        <div className='special-item'>
          <img className='dish-img' src="images/bruchetta.svg" alt="bruchetta"/>
          <div className='special-text'>
            <div className='name-price'>
              <h3 className='p-markazi'>Bruchetta</h3>
              <h3 className='price p-markazi'>$5.99</h3>
            </div>
            <p className='p-karla'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <div className='order'>
              <a className='p-markazi' href="#order-delivery">Order delivery</a>
              <img src="images/Basket.svg" alt="order" />
            </div>
          </div>
        </div>
        <div className='special-item'>
          <img className='dish-img' src="images/lemon-dessert.jpg" alt="lemon dessert"/>
          <div className='special-text'>
            <div className='name-price'>
              <h3 className='p-markazi'>Lemon Dessert</h3>
              <h3 className='price p-markazi'>$5.00</h3>
            </div>
            <p className='p-karla'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <div className='order'>
              <a className='p-markazi' href="#order-delivery">Order delivery</a>
              <img src="images/Basket.svg" alt="order" />
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default Highlight