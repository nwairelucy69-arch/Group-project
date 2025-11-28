import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homepage from './pages/Homepage'
import Dashboard from './Dashboarder/Dashboard';
import Settings from './Dashboarder/Settings'
import Results from './Dashboarder/Results';


import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
 <Route path="/settings" element={<Settings />} />
   <Route path="/result" element={<Results />} />
      
    </Routes>
    
    
    
    
    
    
    
    
    </>
  )
}

export default App