import React, { useRef } from 'react';
import Navbar from '../Components/navbar';
import Hero from '../Components/Hero';
import Footer from "../Components/Footer";
import WorkCard from "../Components/WorkCard";
import ExperienceCard from '../Components/Experience';
import workExperiences from '../work';
import Education from '../Components/Education';
import Form from "../Components/Form"

const Home = () => {
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const formRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar 
        scrollToHero={() => scrollToSection(heroRef)}
        scrollToWork={() => scrollToSection(workRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToForm={() => scrollToSection(formRef)}
      />
      <div ref={heroRef}>
        <Hero 
        scrollToForm={() => scrollToSection(formRef)}/>
      </div>
      <div ref={workRef}>
        <WorkCard />
      </div>
      <div className='about'>
        <div className='left' ref={experienceRef}>
          <h1>Experience</h1>

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
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={formRef}>
      <Form/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
