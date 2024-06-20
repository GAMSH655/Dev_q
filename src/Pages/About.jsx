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
            <p className="aboutP">
            I'm a front-end developer looking for exciting opportunities. Has Computer Science background. Likes to focus on accessibility when developing. Passionate and curious about solving problems.  I’m  proficient in building responsive websites and applications that seamlessly adapt across all devices and browsers, ensuring a consistent and delightful user experience , i'm constantly expanding my skillset by staying updated on the latest front-end trends and technologies. I actively participate in the developer community and enjoy contributing to open-source projects whenever possible  , While I am not programming, I enjoy playing football, photography and reading documentations. 
            </p>
            <button className="contactme">contact me 
              <i class="fa-solid fa-paper-plane plane"></i>
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