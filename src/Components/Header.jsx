import "../Components/Header.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import { FaBars  , FaTimes} from "react-icons/fa"
import { useState } from "react"
const Header= () => {
  const [openBtn , setOpenbtn] = useState(false)

  function handleOpenNav(){
     setOpenbtn(!openBtn)
  };
  return (
    <div>
        <div className="headerContainer">
        <h3 className="logoText">
          quadri
       </h3>
        <div className="linkContainer">
        <NavLink  to="/" className="headerLink" >Home</NavLink>
        <NavLink to="/about" className="headerLink">about</NavLink>
        </div>
         <button className="openBtn" onClick={handleOpenNav}>
          {
             openBtn ? <FaTimes/>  :  <FaBars/>
          }
         </button>
        </div>
        {/* Header Container */}
        <div className="mobileHeader">
         {
           openBtn && (
            <div className="mobLinkCont">
            <NavLink to="/" className="mobniLink">home</NavLink>
            <NavLink to="about" className="mobniLink">about</NavLink>
        </div>
           )
         }
        </div>
    </div>
  )
}

export default Header;
