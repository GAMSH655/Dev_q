import React from 'react'
import { FaGithub  , FaLinkedin } from 'react-icons/fa'
import { RiGithubFill } from "react-icons/ri";
import Prog from "../assets/prog.png"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='Herodiv'>
         <div className="heroTextContainer">
             <h3 className="heroP">Hi ,i am</h3>
             <h3 className="heroP">abdulquadri shittu abolore ,</h3>
             <p className="heroinfo">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
             <button className="contactme">contact me </button>
             <button className='contactBtn'> 
             <i className="fa-brands fa-github"></i> </button>
             <button className='contactBtn'> <i class="fa-brands fa-linkedin"></i> </button>
         </div>
         <img src={Prog} alt=""  className='prog' draggable="false"/>
    </div>
  )
}

export default Hero