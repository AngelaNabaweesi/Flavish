import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import work from '../../assets/work.png'
import church from '../../assets/church.png'
import graduate from '../../assets/graduation.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={work} alt="" />
              <p>Children at work</p>
            </div>
        </div>
        <div className="program"> 
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={church} alt="" />
              <p>Having fun while praising</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={graduate} alt="" />
              <p>Graduation Day</p>
            </div>
        </div>

    </div>
  )
}

export default Programs