import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homepage from './pages/Homepage'


import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      
    </Routes>
    
    
    
    
    
    
    
    
    </>
  )
}

export default App