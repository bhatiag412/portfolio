import React from 'react'
import Footer from "../Components/Footer"
import Navbar from '../Components/navbar'
import Hero2 from '../Components/Hero2'
import Work from '../Components/WorkCard'
const Project = () => {
  return (
    <> 
    <Navbar/>
    <Hero2 heading="Projects" text='My projects'/>
    <Work/>
    <Footer/>
    </>
    )
}

export default Project