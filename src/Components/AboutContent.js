import './AboutContent.css'
import React from 'react'
// import {Link} from 'react-router-dom'
import ExperienceCard from './Experience'
import workExperiences from "../work";

const AboutContent = () => {
    // const [isActive, setActive] = useState(false);
    // const toggleClass = () => {
    //     setActive(!isActive);
    //   };
  return (
    <div className='about'>
        <div className='left'>
    <h1>Experience</h1>
  
    {/* <Link to="/Contact">
        <button className='btn'>Contact</button>
    </Link> */}
   <div className="work-experiences">
      {workExperiences.experience.map((exp, index) => (
        <ExperienceCard
          key={index}
          role={exp.role}
          company={exp.company}
          companylogo={exp.companylogo}
          date={exp.date}
          desc={exp.desc}
          descBullets={exp.descBullets}
        />
      ))}
    </div>
        </div>
        
        {/* <div className='right'>
            <div className='img-container' onClick={toggleClass} >
                <div className={isActive ? ' img-stack bottom': ' img-stack top'}>
                    <img src='../../Assets/ecosavvy.png' className='img' alt='true'/>
                </div>
                <div className={isActive ? ' img-stack top': ' img-stack bottom'}>
                    <img src='../../Assets/img2.png' className='img' alt='true'/>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AboutContent