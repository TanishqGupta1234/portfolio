import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I`m Tanishq Gupta,</span> FullStack Developer Based in India.</h1>
        <p>MERN stack developer and B.Tech student at UPES Dehradun, passionate about web development with multiple certifications and a drive for innovation.</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect With Me
            </div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero