import React from 'react';
import "./Hero.css";
import videoBg from '../assets/video.mp4';
import {Link} from "react-scroll";

function Hero() {
  return (
    <div className='hero__hero' id='hero'>
        <video autoPlay loop muted className='hero__back_video'>
            <source src={videoBg} type="video/mp4" />
        </video>

        <div className="hero__content">
          <h1>POUPĚ</h1>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>Objevit</Link>
        </div>
    </div>
  )
}

export default Hero