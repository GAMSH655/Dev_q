import React from 'react'
import "./Project.css"
import Ecom from "../assets/ecom.png"
import Crypto from "../assets/Crypto.png"
import Krib from "../assets/Krib.png"
const Project = () => {

  return (
    <div className='projectParentcontainer'>
    <h3 className="Feature">featured projects</h3>
    <p className="projP">
    Here are some of the selected projects that showcase my passion for front-end development.
    </p>
     <div className="projectContainer">
         <div className="projBox1">
             <img src={Ecom} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                    e-commerce 
                </h3>
                <p className="projInf">
                 Exclusive is an e-commerce website that is built purely on Reactjs , below are features implemented in the project.
                </p>
                <p  className='pInf'> 📌Implemented star  rating functionallity  which allows users to rate the goods.</p>
                <p className='pInf'> 📌Users can easily add to cart and delete from cart and keep track of the goods , by  implementing a react hook called useContext.</p>
                <p className='pInf'> 📌 Users can easily route from page to another  implementing a react properties called react-router.</p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://e-commerce-nine-delta-43.vercel.app/" className='prjLink'> live view  <i className="fa-solid fa-link icon"></i></a>
                     <a href="https://github.com/GAMSH655/E-commerce.git" className='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
                  {/* <Star/> */}
              </div>
             </div>
         </div>
         <div className="projBox1">
             <img src={Crypto} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                    crypto canvas
                </h3>
                <p className="projInf">
                 Crypto-canvas as the name implies to display  nft-artwroks and the owner's image and price tag and it also display the price of nft artwroks  anytime it changes.This project was built with Html  for structuring and Css for the styling which also gives it the accessibillity to be fit across all gadgets and Javascript for functionallities , here are some of the implemented features.

                 <p  className='pInf'> 📌. Integrated a Faqs section where user can easily get answers to their questions.</p>
                 <p  className='pInf'> 📌. Crafted a button in the header which makes navbar accessibile in the mobile view.</p>
                </p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://new-crypto-dev.vercel.app/" className='prjLink'> live view  <i className="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/NFT-DEVELOPMENT.git" className='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
         <div className="projBox1">
             <img src={Krib} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                   Krib-Homes
                </h3>
                <p className="projInf">
                 Krib-homes is a website that is focused on real estate management , where buyers can easily get connect to their sellers  and also get to know the accomodation available around there locations, check out for the implemeted features.
                </p>
                  <p  className='pInf'> 📌. Dark and Light mode for reader visibillity.</p>
                 <p  className='pInf'> 📌. Crafted a button in the header which makes navbar accessibile in the mobile view.</p>
                <div className="bottomInfo">
                <div className="linkCont">
                     <a href="https://e-commerce-nine-delta-43.vercel.app/" className='prjLink'> live view  <i class="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/E-commerce.git" className='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
        
     </div>
      
      <div className="about">
         <h3 className="aboutM"> about  me</h3>
         <div className="aboutTextBox">
               <h3 className="abtH">
               I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
               </h3>
            <p className="aboutP">
            am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
         </div>
      </div>
   </div>
  )
}

export default Project