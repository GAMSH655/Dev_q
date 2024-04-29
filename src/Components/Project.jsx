import React from 'react'
import "./Project.css"
import Ecom from "../assets/ecom.jpg"
const Project = () => {
  return (
    <div>
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
                amed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                </p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://e-commerce-nine-delta-43.vercel.app/" class='prjLink'> live view  <i class="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/E-commerce.git" class='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
         <div className="projBox1">
             <img src={Ecom} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                    crypto canvas
                </h3>
                <p className="projInf">
                amed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                </p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://new-crypto-dev.vercel.app/" class='prjLink'> live view  <i class="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/NFT-DEVELOPMENT.git" class='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
         <div className="projBox1">
             <img src={Ecom} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                    e-commerce
                </h3>
                <p className="projInf">
                amed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                </p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://e-commerce-nine-delta-43.vercel.app/" class='prjLink'> live view  <i class="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/E-commerce.git" class='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
         <div className="projBox1">
             <img src={Ecom} alt=""  className='projImg' draggable="false"/>
             <div className="projTextBox">
                <h3 className="projHeader">
                    e-commerce
                </h3>
                <p className="projInf">
                amed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.
                </p>
                <div className="bottomInfo">
                  <div className="linkCont">
                     <a href="https://e-commerce-nine-delta-43.vercel.app/" class='prjLink'> live view  <i class="fa-solid fa-link icon"></i></a>

                     <a href="https://github.com/GAMSH655/E-commerce.git" class='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                  </div>
              </div>
             </div>
         </div>
     </div>
   </div>
  )
}

export default Project