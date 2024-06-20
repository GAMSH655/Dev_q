import React from 'react'
import "./Project.css"
import Ecom from "../assets/ecom.png"
import Crypto from "../assets/Crypto.png"
import Krib from "../assets/Krib.png"
import Marketplace from "../assets/Marketplace.png"
import Finder from "../assets/CryptoFinder.png"
const Project = () => {
   const projectCollection=[
    {
        projectImg:Marketplace,
        projectTitle: "nft market place",
        projectAbout: "Nft market place is  web app built with Reactjs which consists of 4 pages that are responsive to all gadgets,",
        porjectLiveLink: "https://meth-buj2.vercel.app/",
        projectRepoLink: "https://github.com/GAMSH655/Meth.git",
    },
    {
        projectImg:Finder,
        projectTitle: "crypto finder app",
        projectAbout: "Crypto finder app is a web app built with Reactjs ,it is built to dispaly crypto currencies prices in real time and and their logos by consuming an api from Coinstat",
        porjectLiveLink: "https://crypto-finder-app.netlify.app/",
        projectRepoLink: "https://github.com/GAMSH655/Crypto-finder-app.git"
    },
   ]
  return (
    <div className='projectParentcontainer'>
    <h3 className="Feature">featured projects</h3>
    <p className="projP">
    Here are some of the selected projects that showcase my passion for front-end development.
    </p>
     <div className="projectContainer">
        {
        projectCollection.map((projectInfo, index)=>{
            return         <div className="projBox1">
            <img src={projectInfo.projectImg} alt=""  className='projImg' draggable="false"/>
            <div className="projTextBox">
               <h3 className="projHeader">
                 {projectInfo.projectTitle}
               </h3>
               <p className="projInf">{projectInfo.projectAbout}</p>
               <div className="bottomInfo">
                 <div className="linkCont">
                    <a href={projectInfo.porjectLiveLink} className='prjLink'> live view  <i className="fa-solid fa-link icon"></i></a>
                    <a href={projectInfo.projectRepoLink} className='prjLink'>repo link <i className="fa-brands fa-github icon"></i></a>
                 </div>
             </div>
            </div>
        </div>
        })
        }
     </div>
      
      {/* <div className="about">
         <h3 className="aboutM"> about  me</h3>
         <div className="aboutTextBox">
               <h3 className="abtH">
               I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
               </h3>
            <p className="aboutP">
            am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
         </div>
      </div> */}
   </div>
  )
}

export default Project