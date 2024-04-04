import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="body">
    <div className="container-about">
        <p className='text-xl font-semibold'>Our education website offers an engaging digital space where learning meets innovation, empowering users with immersive content, interactive tools, and personalized experiences to unlock their full potential and ignite a passion for lifelong learning.</p>
        <div className="separator-about"></div>
        
        <div className="box-container-about">
            <div className="image-wrapper-about">
                <img className="img-about" src="https://th.bing.com/th/id/OIP.PAHkQGbZzBm6kYT_pCdAhAHaE7?rs=1&pid=ImgDetMain" alt="Student Image"/>
                <button className="button-about font-bold">Student</button>
            </div>
           
            <div className="image-wrapper-about">
                <img className="img-about" src="https://th.bing.com/th/id/OIP.LmOmDYTFRzj5G2k3Vp-SRgHaFj?pid=ImgDet&w=175&h=131&c=7&dpr=1.7" alt="Mentor Image"/>
                <button className="button-about font-bold">Mentor</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About