import './form.css'
import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const [active ,activefunc]=useState(false);
const form =useRef();
const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_qo2bhg4','template_pgv8hpb',form.current,'159v1H56-4FE8R1AV')
    .then((result)=>{
        activefunc(!active)
    },(error=>{
      
    }));
};

  return (
    <div>
      <h1>Contact Me
        </h1>
    <div className='form'> 
    <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name='user_name'></input>
        <label>Email</label>
        <input type='email'name='user_email'></input>
        <label>Subject</label>
        <input type='text' name='subject'></input>
        <label>Message</label>
        <textarea name='message' placeholder='Type Your Message Here' rows='6'></textarea>
        <input type='submit' className='btn' value='send' ></input>
        <p id={active?'success':'error'}>Email Sent Sucessfully</p>
    </form>
    </div>
    </div>
  )
}

export default Form