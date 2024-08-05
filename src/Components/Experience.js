import React, { createRef} from "react";
import "./Experience.css";



export default function ExperienceCard({ role, company,companylogo,date, desc, descBullets ,isDark}) {

  const imgRef = createRef()



  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div  className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={companylogo}
          alt={company}
        
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {desc}
        </p>
        <ul>
          {/* <GetDescBullets descBullets={descBullets} isDark={isDark} /> */}
        </ul>
      </div>
    </div>
  );
}