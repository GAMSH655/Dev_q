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
            <a href="#" className="headerLink">about</a>
            <a href="#" className="headerLink" >work</a>
            <a href="#" className="headerLink" >about</a>
        </div>
         <button className="openBtn" onClick={handleOpenNav}>
          {
             openBtn ? <FaBars/> :  <FaTimes/> 
          }
         </button>
        </div>
        {/* Header Container */}
        <div className="mobileHeader">
         {
           openBtn && (
            <div className="mobLinkCont">
            <a href="#" className="mobniLink">about</a>
            <a href="#"  className="mobniLink">quadri</a>
            <a href="#" className="mobniLink">about</a>
        </div>
           )
         }
        </div>
    </div>
  )
}

export default Header;
