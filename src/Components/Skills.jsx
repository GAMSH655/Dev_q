import React from 'react'
import Ts from "../assets/ts.png"
import Html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import Ret from "../assets/react.png"
import Tail from "../assets/tail.jpeg"
import "../Components/Skills.css"
import Connect from "../Components/Connect"
const Skills = () => {
  return (
     <div>
        <div className='skillSection'>
        <h3 className="capabillities"> my capabillities</h3>
        <div className="skill">
             <img src={Html} alt=""  />
             <img src={css} alt=""  />
             <img src={js} alt="" className='skill_img' />
             <img src={Ts} alt="" className='skill_img' />
             <img src={Ret} alt="" className='skill_img'/>
             <img src={Tail} alt="" className='skill_img'/>
        </div>
    </div>
      <Connect/>
     </div>
  )
}

export default Skills