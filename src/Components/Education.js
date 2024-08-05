import React from 'react';
import './education.css';
import NirmalaLogo from '../images/nirmala.jpeg';
import BirlaLogo from '../images/logob.jpg';
import GPNLogo from '../images/gpn.jpeg';

const Education = () => {
  return (
    <div className="education-section">
      <h1>Education</h1>
      <div className="education-entry">
        <img src={NirmalaLogo} alt="Nirmala Convent" className="education-logo" />
        <div className="education-details">
          <h2>Nirmala Convent Sr. Sec. School</h2>
          <h3>High School</h3>
          <p>March-2017</p>
          <p>Completed High School with 1<sup>st</sup> division</p>
          <ul>
            <li>Participated in Quizes and Olympiards</li>
            <li>Ran a half Marathon Representing our School</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="education-entry">
        <img src={GPNLogo} alt="GPN" className="education-logo" />
        <div className="education-details">
          <h2>Government Polytechnic Nainital</h2>
          <h3>Diploma in Mechanical Engineering</h3>
          <p>August 2019 - September 2021</p>
          <p>Completed my Diploma in Mechanical Engineering from Govt. Polytechnic Nainital</p>
          <ul>
            <li>Learned how to use CNC</li>
            <li>Working of a Automobile</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="education-entry">
        <img src={BirlaLogo} alt="Birla Institute of Applied Sciences" className="education-logo" />
        <div className="education-details">
          <h2>Birla Institute of Applied Sciences</h2>
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>September 2022 - June-2025</p>
          <p>earned the fundamentals of computer programming, data structures, and algorithms. I gained proficiency in Web development, database management, and Computer Networks. Additionally, I explored advanced topics like Cloud Computing, Data Analytics, and cybersecurity.</p>
          <ul>
            <li>Secretary of Photo Society</li>
            <li>Vice-Secretary of TechnoForum</li>
            <li>Co-ordinator of Tech-Fest Spectrum 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
