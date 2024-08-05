import "./Hero.css"
import React from 'react'
import {Link} from "react-router-dom"


const Hero = ( {scrollToForm}) => {


 
 
  return (
    <div className="hero">
        <div className="mask">
        </div>
        <div className="content">
            <p>HI, I'M Gaurav Bhatia</p>
            <h1><span class="text_1">React Developer</span><span class="text_2">Front-end Developer</span></h1>
            <div className="container">
                <Link target="_blank" to='https://docs.google.com/document/d/1NGGKzYX07zewC3iqRW_BAf-bbfua4AjsJ6EzgUdsQBw/edit?usp=drive_link'
                className="btn">Resume</Link>
                <button onClick={scrollToForm}
                className="btn btn-light">Contact</button>

            </div>
             </div>
    </div>
  )
}

export default Hero