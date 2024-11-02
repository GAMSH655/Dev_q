import React from 'react'
import "./Connect.css"
const Connect = () => {
  return (
    <div class="ContParentContainer">
    <div class="contactCont">
      <h3 class="let">Let’s connect</h3>
      <h3 class="hello">
        Say hello shittuabdquadri0@gmail.com
      </h3>
      <div class="iconDiv">
        <a href="https://github.com/GAMSH655" class="contactLink">
          <i className="fa-brands fa-github fa-2xl contact-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdulquadri-shittu-59480b262/" class="contactLink">
          <i className="fa-brands fa-linkedin fa-2xl contact-icon"></i>
        </a>
        <a href="https://twitter.com/BIG_DEV360" class="contactLink">
          <i className="fa-brands fa-x-twitter fa-2xl contact-icon"></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/?hl=sv#inbox?compose=new" class="contactLink">
        <i className="fa-solid fa-envelope fa-2xl contact-icon"></i>
        </a>
      </div>
    </div>
  
    <form action="">
      <div class="nameInput">
        <h3 className="inputname">Name</h3>
        <input type="text" className="input" />
      </div>
      <div className="nameInput">
        <h3 className="inputname">Email</h3>
        <input type="email" className="input" />
      </div>
      <div className="nameInput">
        <h3 className="inputname">Number</h3>
        <input type="number" className="input" />
      </div>
      <textarea placeholder="Enter your message" className="messageInput"></textarea>
      <button type="submit" className="submitButton">Submit</button>
    </form>
  </div>
  
  )
}

export default Connect