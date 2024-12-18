import React, { useState }  from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.svg"
import BurgerIcon from '../../assets/BurgerIcon.svg'; // Path to burger menu icon
import CloseIcon from '../../assets/CloseIcon.svg'; // Path to close menu icon
import Icon2 from "../../assets/InstaIcon.svg"
import Icon3 from "../../assets/TwitterIcon.svg"
import { Link } from 'react-router-dom';




const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    console.log('Section ID:', sectionId, 'Section Top:', sectionTop);

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
    <div className={`navbar ${isMenuOpen ? "show" : ""}`}>
      <div className='navbar-brand'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`navbar-center ${isMenuOpen ? "show" : ""}`}>
        <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="nav-link">Home</a>
        {/* <a href="#price" onClick={(e) => {e.preventDefault(); scrollToSection('price');}} className="nav-link">Calculator</a> */}
        <a href="#gallery" onClick={(e) => {e.preventDefault(); scrollToSection('gallery');}} className="nav-link">3D-Models</a>
        <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="nav-link"><strong style={{color: "#E99F0E"}}>Contact</strong></a>

        <div className={`navbar-side ${isMenuOpen ? "show" : ""}`}>
          <Link to="/"> <p className='english'>EN</p> </Link>
          <Link to="/el"> <p className='greek'>EL</p></Link>
          <a href='https://www.instagram.com/creative_layer_3d/'> <img src={Icon2} alt="Instagram" /> </a>
          <a href='https://twitter.com/LLupulus'> <img src={Icon3} alt="Twitter" /> </a>
        </div>

      </div>

      <div className="burger-menu" onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu" className="menu-icon" />
        </div>
    </div>
  );
};



export default Navbar;
