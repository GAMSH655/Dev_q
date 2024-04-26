import React from 'react'
import { FaGithub  , FaLinkedin , FaArrowAltCircleUp} from 'react-icons/fa'
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
             <button className="contactme">contact me <FaArrowAltCircleUp/></button>
             <button className='contactBtn'> <RiGithubFill/> </button>
             <button className='contactBtn'> <FaLinkedin/> </button>
         </div>
         <img src={Prog} alt=""  className='prog' draggable="false"/>
    </div>
  )
}

export default Hero