import React from 'react'
import './intropage.css'
import ImageIntro from '../../images/imgIntro.jpg'

const Intropage = () => {
  return (
    <div className='container-intro-page'>
        <div className='details-intro-page'>
        <h1><span>MENTORSHIP</span> in the <br />field of <span>ACADEMIA</span> & beyond </h1>
        <h2 class="rethink"><span>Rethink</span> and <span>Relearn</span> and your Degree</h2>
        </div>

        <div className='Image-intro-page'>
            <img className='Image-Intro' src={ImageIntro} alt="StudNet" />
        </div>
    </div>
  )
}

export default Intropage