import React from 'react'
import Header from '../Components/Header'
import Skill from "../Components/Skills"
import PortImg from "../assets/me.png"
import '../Components/About.css'
const About = () => {
  return (
    <div>
        <Header/>
        <div className="about">
         <h3 className="aboutM"> about  me</h3>
         <div className="aboutTextBox">
               <h3 className="abtH">
               I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
               </h3>
            <p className="aboutP">
            am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
            <button className="contactme">contact me 
             <i className="fa-solid fa-file icon"></i>
              </button> 
             <button className='contactBtn'> 
             <a href="https://github.com/GAMSH655"> <i className="fa-brands fa-github icon"></i> </a></button>
            
             <button className='contactBtn'>
             <a href="https://www.linkedin.com/in/abdulquadri-shittu-59480b262/" className='contctLink'><i className="fa-brands fa-linkedin icon"></i> </a>
             </button>
         </div>
      </div>
       <div className="imgCont">
       <img src={PortImg} alt="" className='portImg' />
       </div>
       <Skill/>
    </div>
  )
}

export default About