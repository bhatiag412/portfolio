import React from 'react'
import Footer from "../Components/Footer"
import Navbar from '../Components/navbar'
import Hero2 from "../Components/Hero2"
import AboutContent from "../Components/AboutContent"
const About = () => {
  return (
    <div>
      <Navbar/>
    <Hero2 heading="About" text="About Me"/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About