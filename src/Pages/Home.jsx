import React from 'react'
import Hero from '../Components/Hero'
import Header from "../Components/Header"
import Project from "../Components/Project"
import Connect from "../Components/Connect"
const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Project/>
        <Connect/>
    </div>
  )
}

export default Home