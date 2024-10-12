import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>A Community School In Kamuli, Jinja, Uganda</h1>
            <p>This school was founded by a former police officer whose goal was to help girl children in the community avoid early marriages. 
                As for the boy children, he wanted to help them avoid bad gangs. And over all he and his team are trying to secure better 
                and secure future for the children in the community</p>
                <button className='btn'>Read More <img src={dark_arrow}/></button>
        </div>
    </div>
  )
}

export default Hero