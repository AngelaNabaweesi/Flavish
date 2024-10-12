import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import School from './Components/School/School'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='WHAT WE OFFER' title='A Glimpse into our Creations'/>
        <Programs/> 
        <About setPlayState={setPlayState}/>  
        <Title subTitle='HALL OF FAME' title="Showcasing Our Client Success"/>  
        <School/> 
        <Title subTitle='REVIEWS' title='Hear From Our Happy Clients'/> 
        <Testimonials/>
        <Title subTitle='Place and Order Or Contact Us' title='Connect With Us'/> 
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
