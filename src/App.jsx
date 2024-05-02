import { useState } from 'react'
import Home from '../src/Pages/Home'
import About from "../src/Pages/About"
import { BrowserRouter , Route , Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
