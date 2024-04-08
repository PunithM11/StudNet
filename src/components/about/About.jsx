import React from 'react'
import './about.css'
import student from '../../images/image1.jpg'
import mentor from '../../images/image2.jpg'
import campus from '../../images/image3.jpg'

const About = () => {
  return (
    <div className="body">
    <div className="container-about">
        <p className='text-xl font-semibold'>Our education website offers an engaging digital space where learning meets innovation, empowering users with immersive content, interactive tools, and personalized experiences to unlock their full potential and ignite a passion for lifelong learning.</p>
        <div className="separator-about"></div>
        
        <div className="box-container-about">
            <div className="image-wrapper-about">
                <img className="img-about" src={student} alt=" "/>
                <button className="button-about font-bold">Student</button>
            </div>
           
            <div className="image-wrapper-about">
                <img className="img-about" src={mentor} alt=" "/>
                <button className="button-about font-bold">Mentor</button>
            </div>

            <div className="image-wrapper-about">
                <img className="img-about" src={campus} alt=" "/>
                <button className="button-about font-bold">Campus Ambassador</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About