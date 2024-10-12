import React from 'react'
import './School.css'
import gallery_1 from '../../assets/program_1.jpg'
import gallery_2 from '../../assets/program_2.jpg'
import gallery_3 from '../../assets/program_3.jpg'
import gallery_4 from '../../assets/program_4.jpg'
import white_arrow from '../../assets/white_arrow.png'

const School = () => {
  return (
    <div className='school'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default School