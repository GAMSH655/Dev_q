import "../Components/Header.css"
import React from 'react'
import { NavLink } from "react-router-dom"
const Header= () => {
  return (
    <div>
        <div className="headerContainer">
        <h3 className="logoText">
          quadri
       </h3>
        <div className="linkContainer">
            <a href="#" className="headerLink">about</a>
            <a href="#" className="headerLink" >work</a>
            <a href="#" className="headerLink">about</a>
        </div>
        </div>
    </div>
  )
}

export default Header;
