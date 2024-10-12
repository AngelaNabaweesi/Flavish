import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Flavish Hampers - Elevating Every Occasion</h1><br/>
            <a href="#contact"><button className='btn'>Place Order <img src={dark_arrow}/></button></a><br/>
            <p>Welcome to Flavish Hampers, where elegance meets thoughtfulness in every gift, floral arrangement, and decor piece. Life may be demanding, 
              but we believe in making your loved ones feel special and valued with creations that inspire joy and beauty.</p>
        </div>
    </div>
  )
}

export default Hero