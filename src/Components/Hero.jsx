import React from 'react'
import { FaGithub  , FaLinkedin } from 'react-icons/fa'
import { RiGithubFill } from "react-icons/ri";
import Prog from "../assets/dev.gif"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='Herodiv'>
         <div className="heroTextContainer">
             <h3 className="heroP">Hi ,i am</h3>
             <h3 className="heroP">abdulquadri shittu abolore ,</h3>
             <p className="heroinfo">A front-end developer passionate about building accessible and user friendly websites.</p>
             <button className="contactme">contact me 
             <i className="fa-solid fa-file icon"></i>
              </button> 
             <button className='contactBtn'> 
             <a href="https://github.com/GAMSH655"> <i className="fa-brands fa-github icon"></i> </a></button>
            
             <button className='contactBtn'>
             <a href="https://www.linkedin.com/in/abdulquadri-shittu-59480b262/" className='contctLink'><i className="fa-brands fa-linkedin icon"></i> </a>
             </button>
         </div>
         <img src={Prog} alt=""  draggable="false" className="heroImg"/>
    </div>
  )
}

export default Hero