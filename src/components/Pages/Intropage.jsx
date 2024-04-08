import React from 'react'
import './intropage.css'
// import ImageIntro from '../../images/icegif-772.gif'
import Carousel from '../carousel/Carousel'

const Intropage = () => {
  return (
    <div className='container-intro-page' id= "home">
        <div className='details-intro-page'>
        <h1><span>MENTORSHIP</span> in the <br />field of <span>ACADEMIA</span> & beyond </h1>
        <h2 class="rethink">Rethink and Relearn Your Degree .</h2>
        </div>

        <div className='Image-intro-page'>
            {/* <img className='Image-Intro' src={ImageIntro} alt="StudNet" /> */}
            <Carousel />
        </div>
    </div>
  )
}

export default Intropage