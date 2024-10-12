import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
import flower from '../../assets/flower.png'
import cupid from '../../assets/cupid.png'
import rings from '../../assets/rings.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={flower} alt="" />
              <p>Children at work</p>
            </div>
        </div>
        <div className="program"> 
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={cupid} alt="" />
              <p>Having fun while praising</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={rings} alt="" />
              <p>Graduation Day</p>
            </div>
        </div>

    </div>
  )
}

export default Programs