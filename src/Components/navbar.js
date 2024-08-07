import "./navbar.css";
import React, { useState } from 'react';
    
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/gaurav.png";

function Navbar({ scrollToHero, scrollToWork, scrollToExperience, scrollToEducation, scrollToForm }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLinkClick = (scrollFunction) => {
        scrollFunction();
        setClick(false); // Close the menu after clicking a link
    };
   
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
   
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : 'header'}>
            <div className="imgdiv" onClick={() => handleLinkClick(scrollToHero)}>
                <img alt="Portfolio" src={logo} />
            </div>
            <ul className={click ? "navmenu active" : "navmenu"}>
                <li onClick={() => handleLinkClick(scrollToHero)}>Home</li>
                <li onClick={() => handleLinkClick(scrollToWork)}>Projects</li>
                <li onClick={() => handleLinkClick(scrollToExperience)}>Experience</li>
                <li onClick={() => handleLinkClick(scrollToEducation)}>Education</li>
                <li onClick={() => handleLinkClick(scrollToForm)}>Contact</li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
        </div>
    );
}

export default Navbar;


