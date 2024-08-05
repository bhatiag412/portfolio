import React from 'react'
import "./Fotter.css"
import {Link} from 'react-router-dom'
import {FaFacebook, FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa"
import {LuMousePointer2} from 'react-icons/lu'
const Footer = () => {
  return (
    <div className='footer'>
        <div  className='footer-container'>
            
            <div className='right'>
            <div class="card">
  <span id='span'>My Socials</span>
  <span id='hover'><LuMousePointer2/></span>
  
<Link  target='_blank'  className='social-link' to="https://www.facebook.com/Gstarbhatia">
            <FaFacebook  size={50} style={{
        color:'	white'
    }}/></Link>
<Link  target='_blank'  className='social-link' to="https://www.x.com/bhatiag41"><FaTwitter  size={50} style={{
        color:'white'
    }}/></Link>
<Link  target='_blank'  className='social-link'  to="https://www.linkedin.com/in/gaurav-bhatia-4336801b0/">
     <FaLinkedin  size={50} style={{
        color:'white'
    }}/></Link>
    <Link target='_blank' className='social-link'  to="https://www.github.com/bhatiag41">
     <FaGithub  size={50} style={{
        color:'white'
    }}/></Link>
  
</div>
            </div>
        </div>

    </div>
  )
}

export default Footer