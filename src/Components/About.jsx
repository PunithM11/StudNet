import React from 'react'
import './about.css'

const About = () => {
  return (
    <div class="container">
        <p>Our education website offers an engaging digital space where learning meets innovation, empowering users with immersive content, interactive tools, and personalized experiences to unlock their full potential and ignite a passion for lifelong learning.</p>
        <div class="separator"></div>
        
        <div class="box-container">
            <div class="image-wrapper">
                <img src="https://th.bing.com/th/id/OIP.PAHkQGbZzBm6kYT_pCdAhAHaE7?rs=1&pid=ImgDetMain" alt="Student Image"/>
                <button class="button">Student</button>
            </div>
           
            <div class="image-wrapper">
                <img src="https://th.bing.com/th/id/OIP.LmOmDYTFRzj5G2k3Vp-SRgHaFj?pid=ImgDet&w=175&h=131&c=7&dpr=1.7" alt="Mentor Image"/>
                <button class="button">Mentor</button>
            </div>
        </div>
    </div>
  )
}

export default About