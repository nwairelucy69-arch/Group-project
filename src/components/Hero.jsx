import React from 'react'
import { motion } from 'framer-motion'
import { Link } from'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import image1 from '../assets/img4.jpg'
import image2 from '../assets/chem1.jpg'
import image3 from '../assets/chem4.jpg'
import image4 from '../assets/chem3.jpg'
import image5 from '../assets/chem5.jpg'
import image6 from '../assets/chem6.jpg'


const Hero = () => {
  return (
    <>
    <div className='hero'>
    <motion.div
    initial={{Opacity: 0, y: 50}}
    animate={{Opacity:1, y: 0}}
    transition={{ duration: 0.5}}
    >
    <div className='herodiv'>
       <div>
         <h1 className='heroh1'>
            Find the Best Courses and Upgrade your skill
        </h1> <br /><br />
        <p className='hero1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, maxime aliquid repellat molestiae vitae deserunt quam impedit mol atque <br />nulla a voluptas blanditiis deleniti quidem eius impedit est culpa, officia quis ad illo. Aliquid.
        </p><br /><br /><br />
         <div className='main22'>
         
           <button className='login1'>
          <Link to='/login' className='link1' >  Explore <ArrowForwardIcon/></Link>
         </button>
          <button className='login1'>
          <Link to='/sign up'className='link1'>View Programmes <ArrowForwardIcon/></Link>
         </button>
        </div>
      
       </div>
       
       
    </div> </motion.div>
     </div>
    {/* <!-- marquee --> */}
<marquee behavior="script" direction="left" className="liste">
    <div className="list1">
        <span>*Software Engineer</span> 
        <span>*Data Analytics</span> 
        <span>*Data Science</span>
        <span> *Digital Marketing</span> 
        <span>*UI/UX Design</span> 
        <span>*DeVops</span> 
        <span>*Artificial Intelligence</span> 
        <span>*Web Development</span>
    </div>
</marquee>

    {/* flexbox */}
        <h3 >Our Services</h3>
    
     <div className="flexbox"> 
        <div className='flexboxdiv1'>
    <div className='img'>
        <img src={image1} alt="" />
    </div>     
    <h1>
       Biochemistry
    </h1><br/>
    <div className='pdiv'>
        <p className="p">
        Seamlessly visualizng quality electual without <br /> superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics">READ MORE <ArrowForwardIcon/> </a>
    </p><br/><br/><br/>
    </div>
   
 </div>


{/* <!-- flexbox --> */}

   <div className='flexboxdiv1'>
     <div className='img'>
        <img src={image2} alt="" />
    </div>
    <h1>
       Major in Economics
    </h1><br/>
    <div className='pdiv'>
        <p className="p">
        Seamlessly visualizng quality electual without <br />superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics"> READ MORE <ArrowForwardIcon/>  </a>
    </p><br/><br/><br/></div>

   
</div>
  

<div className='flexboxdiv1'>
    <div className='img'>
       <img src={image3} alt="" />
    </div>
    <h1>
  Business Media
    </h1><br/>
    <div className='pdiv'>
       
        <p className="p">
        Seamlessly visualizng quality electual without <br /> superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics"> READ MORE <ArrowForwardIcon/> </a>
    </p><br/><br/><br/>
       
    
    </div>
</div>

</div>

{/* <!-- secondbox --> */}
<div className="secondbox">
   <div className='flexboxdiv1'>
     <div className='img'>
       <img src={image4} alt="" />
    </div>
    <h1>
        Public Administration
    </h1><br/>
    <div className='pdiv'>
        <p className="p">
        Seamlessly visualizng quality electual without <br /> superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics">  READ MORE <ArrowForwardIcon/> </a>
    </p><br/><br/><br/>
    </div>
        </div>
 
        
  


   <div className='flexboxdiv1'>
     <div className='img'>
       <img src={image5} alt="" />
    </div>
    <h1>
        Biotechnology
    </h1><br/>
    <div className='pdiv'>
        <p className="p">
        Seamlessly visualizng quality electual without <br /> superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics"> READ MORE <ArrowForwardIcon/> </a>
    </p><br/><br/><br/>
    </div>
        </div>

    <div className='flexboxdiv1'>
        <div>
            <img src={image6} alt="" />
        </div>
    <h1>
       coroperate finance
    </h1><br/>
   <div className='pdiv'>
    <p className="p">
        Seamlessly visualizng quality electual without <br /> superior collaboration and idea tically

    </p><br/>
    
    <p className="read">
        <a href="data analytics">  READ MORE <ArrowForwardIcon/> </a>
    </p><br/><br/><br/>
   </div>
   
</div>



</div>


    <footer className='footer'>
    <div>
        <h2 >About us </h2> <br /> 
        <p className='h2foot'>Lorem ipsum dolor sit ametbr
            <br /> consectetur adipisicing elit. Accusamus quae saepe, <br />m! Asperiores rem doloribus ipsa in.</p><br /><br />

        <div>
            <FacebookIcon style={{color: 'orangered'}} /> <span></span> <InstagramIcon  style={{color: 'orangered'}}/> <span></span> <TwitterIcon  style={{color: 'orangered'}}/>
           
        </div>



    </div>
    <div>
        <h2 className='h2foot'>Our Links</h2><br />
            <ol  className='listfoot' >
                         <li>
                             <Link to='/' className='linkfoot'> Home </Link>
                         </li>   <br /> 
                          <li><Link to='/ About us'className='linkfoot'> About us </Link>
                          </li><br />
                          <li><Link to='/blog'className='linkfoot'> Blog </Link>
                          </li><br />
                         <li><Link to='/services'className='linkfoot'> pages </Link>
                         </li><br />
                          <li><Link to='/programmes'className='linkfoot'> Courses </Link>
                         </li>
            </ol>

    </div>
    <div>
        <h2  className='h2foot'>Latest Post</h2><br />
        <div style={{ display: 'flex', gap: '10px',margin: '10px',}}>
        <div >
            <img  className='img' src={image1} alt=""  style={{ width: '70px', height: '50px'}}/>
        </div>
        <div  className='h2foot'> Nothing impossible to need hard work <br />7 March, 2023 </div></div>
        <div style={{ display: 'flex', gap: '10px'}}>
        <div >
            <img  className='img' src={image3} alt=""  style={{ width: '70px', height: '50px', margin: '10px'}}/>
        </div>
        <div  className='h2foot'> Nothing impossible to need hard work <br /> 7th March </div></div>
    </div>

    <div>
        <h2  className='h2foot'>Contact Us</h2><br />
       <div>
         <div> <CallIcon style={{color: 'orangered'}}/><p className='h2foot'>+1(444) 000 888 <br /><br />+91 5752 782 554</p></div><br />
        <div><AlternateEmailIcon style={{color: 'orangered'}}/><p className='h2foot'> skilltech@gmail.com <br /><br /> info@gmail.com</p></div><br />
        <div><HomeIcon style={{color: 'orangered'}}/><p className='h2foot'>  1247/plot No.39,15th phase.<br />LHB Colony, kanpur</p></div>
</div>    </div>
    </footer>

<div>
    <footer className='mainfoot' >
          <div > 
         <h1 className='logo'>  <img className='get' src="src/assets/icon1.jpg" alt="" /> skillTech</h1>
       
        </div>
        <div style={{color: 'white', textAlign: 'center', }}>
            www.skilltechacademy.com
        </div>
        <div style={{color: 'white', alignItems: 'end'}}>
            copyright@skilltech 2023.All rights reserved.
        </div>
       
    </footer>
</div>
    
   
    
    
    
    
    
    
    
    
    </>
  )
}

export default Hero