import './Workcard.css'
import React from 'react'
import Work from './work'
import Data from './workdata'
const WorkCard = () => {
    const cards =Data.map(item=>{
        return(
            <Work
            {...item}
            />
        )
    })
  return (
    <div className='work-container'>
        <h1 >Projects</h1>
        <div className='project-container'>
            {cards}
            </div>
            <div className='more-btn'>

            <a target='_blank'rel='noreferrer' href='https://www.github.com/bhatiag41'>
            <button className='btn'>More Projects</button>
            </a>
            </div>
        </div>

    
  )
}

export default WorkCard