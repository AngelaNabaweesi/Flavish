import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.jpeg'

const Testimonials = () => {

    const slider = useRef();

    let tx = 0;

  const slideFoward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>The Clarkons</h3>
                    <span>Amerstdam, Nerthlands</span>
                  </div>
                  </div>
                  <p>Robert has done phenominal work, we are so proud with how far he has come. He also has a farm to feed the children of the school.
                    The farm is gardened by his wife and the school children. Some of it is his private land and the rest is for the community.
                    That is how big his heart is that he can even use his own land.
                  </p>                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>DDC Club</h3>
                    <span>Amerstdam, Nerthlands</span>
                  </div>
                  </div>
                  <p>Robert has done phenominal work, we are so proud with how far he has come. He also has a farm to feed the children of the school.
                    The farm is gardened by his wife and the school children. Some of it is his private land and the rest is for the community.
                    That is how big his heart is that he can even use his own land.
                  </p>
                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Kate's family</h3>
                    <span>Chicago, USA</span>
                  </div>
                  </div>
                  <p>Robert has done phenominal work, we are so proud with how far he has come. He also has a farm to feed the children of the school.
                    The farm is gardened by his wife and the school children. Some of it is his private land and the rest is for the community.
                    That is how big his heart is that he can even use his own land.
                  </p>                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Katwesige</h3>
                    <span>Nairobi, Kenya</span>
                  </div>
                  </div>
                  <p>Robert has done phenominal work, we are so proud with how far he has come. He also has a farm to feed the children of the school.
                    The farm is gardened by his wife and the school children. Some of it is his private land and the rest is for the community.
                    That is how big his heart is that he can even use his own land.
                  </p>              
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials