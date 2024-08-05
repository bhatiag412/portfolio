import React from 'react'
import Footer from "../Components/Footer"
import Navbar from '../Components/navbar'
import Hero2 from "../Components/Hero2"
import Form from "../Components/Form"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="Contact" text='Contact me using this form'/>
      <Form/>
      <Footer/>
    </div>
    
  )
}

export default Contact
