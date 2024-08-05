import React from 'react'
import { NavLink } from 'react-router-dom'
const work = (props) => {
  function clicky(){
    if(!(props.ViewURL)){window.alert("it is a private project")}
  }
  
  return (
    <div><NavLink target='_blank' to={props.ViewURL} onClick={clicky}>
    <div className='project-card'>
                <img src={props.img} alt='projectimg'/>
                <h2 className='project-title'>{props.ProjectTitle} </h2>
                <div className='pro-details'><p>{props.ProjectText}</p>

            </div>
    </div>
    </NavLink>
    </div>
  )
}

export default work