import React from 'react'
import "./Project.css"
import Ecom from "../assets/ecom.png"
import Crypto from "../assets/Crypto.png"
import Krib from "../assets/Krib.png"
import Marketplace from "../assets/Marketplace.png"
import Finder from "../assets/CryptoFinder.png"
import Bistro from "../assets/Bistro.png"
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
        projectAbout: "Crypto finder app is a web app built with Reactjs ,it is built to display crypto currencies prices in real time and and their logos by consuming an api from Coinstat",
        porjectLiveLink: "https://crypto-finder-app.netlify.app/",
        projectRepoLink: "https://github.com/GAMSH655/Crypto-finder-app.git"
    },
    {
        projectImg:Bistro,
        projectTitle: "bistro-delight",
        projectAbout: "Bistro-delight is a single page application built with  Reactjs and making it fit  across all user's screeens , it's built to connect both the food cosnumer and cook and user can get to view available foods in kitchen",
        porjectLiveLink: "https://bistro-delight.netlify.app/",
        projectRepoLink: "https://github.com/GAMSH655/BISTRO-DELIGHT.git"
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
        projectCollection.map(({projectImg, projectAbout , porjectLiveLink , projectRepoLink , projectTitle}, index)=>{
            return  <div className="projBox">
               <img src={projectImg} alt="Project Image" class="projImg" />
               <h3 className="projHeader">{projectTitle}</h3>
               <p className="projInf">{projectAbout}</p>
               <div className="linkCont">
               <a href= {porjectLiveLink} className="prjLink">
                 <i className="fa-solid fa-link"></i></a>
               <a href={projectRepoLink} className="prjLink"> <i className="fa-brands fa-square-github"></i></a>
               </div>
             </div>
        })
        }
     </div>
      
   </div>
  )
}

export default Project