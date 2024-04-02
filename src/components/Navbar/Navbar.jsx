// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.svg"

import Icon1 from "../../assets/FacebookIcon.png"
import Icon2 from "../../assets/InstaIcon.png"
import Icon3 from "../../assets/TwitterIcon.png"




const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  
    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of the scroll animation in milliseconds
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, nextScrollPosition);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    // Execute the smooth scroll function
    smoothScroll(sectionTop);
  };
  

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='navbar-links'>
        <a onClick={() => scrollToSection('about-section')} className="nav-link">Home</a>
        <a onClick={() => scrollToSection('gallery-section')} className="nav-link">3D-Models</a>
        <a onClick={() => scrollToSection('units-section')} className="nav-link">Contact</a>

        <div className='social-media'>
          <img src={Icon1} alt="Facebook" />
          <img src={Icon2} alt="Instagram" />
          <img src={Icon3} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};





export default Navbar;
