import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { ShieldCloseIcon } from 'lucide-react';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [open, setOpen]=useState(false);

  return (
    <>
      <div className='head1'>
        <div className='head'> 
      
          <div>
         <h1 className='logo'>  <img className='get' src="src/assets/icon1.jpg" alt="" /> skillTech</h1>
       
        </div>
         <div className='main2'>
         
           <button className='login'>
          <Link to='/login'className='link1'>Login</Link>
         </button>
          <button className='login'>
          <Link to='/sign up'className='link1'>Sign up</Link>
         </button>
        </div>
        </div>
        
        
         <div className='menuicon' onClick={() => setOpen(!open)}>
            {open ? (<ShieldCloseIcon style={{ fontSize: 32, color: 'white'
            }}/>):( 
            
          <MenuIcon style={{fontSize:32, color: 'white', cursor: 'pointer', }} />)}
          
        </div>
       {open && (
         <div className='main'>
         <nav className='mobile-nav'>
          <ul >
             <li  className='list'>
              <Link to='/' className='link'> Home </Link>
              <Link to='/ About us'className='link'> About us </Link>
              <Link to='/blog'className='link'> Blog </Link>
              <Link to='/services'className='link'> pages </Link>
              <Link to='/programmes'className='link'> Courses </Link>
          </li>
          </ul>
        
         </nav>
         </div>
            
       )}
      </div>
       
    </>
  )
}

export default Navbar