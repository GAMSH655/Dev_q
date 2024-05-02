import React from 'react'
import "./Connect.css"
const Connect = () => {
  return (
    <div className='ContParentContainer'>
        <div className="contactCont">
            <h3 className="let">Let’s connect</h3>
            <h3 className="hello">
                Say hello shittuabdquadri0@gmail.com
            </h3>
            <div className="iconDiv">
            <a href="https://github.com/GAMSH655"> <i className="fa-brands fa-github  fa-2xl contact-icon"></i></a>
            <a href="https://www.linkedin.com/in/abdulquadri-shittu-59480b262/"> <i className="fa-brands fa-linkedin  fa-2xl contact-icon"></i></a>
            <a href="https://twitter.com/BIG_DEV360"> <i class="fa-brands fa-x-twitter fa-2xl contact-icon"></i></a>
            </div>
        </div>
         <form action="">
            <div className="nameInput">
                <h3 className="inputname">name</h3>
                <input type="text" className='input' />
            </div>

            <div className="nameInput">
                <h3 className="inputname">email</h3>
                <input type="mail" className='input' />
            </div>

            <div className="nameInput">
                <h3 className="inputname">number</h3>
                <input type="number" className='input' />
            </div>
            <textarea placeholder='enter your message'></textarea>
         </form>
    </div>
  )
}

export default Connect