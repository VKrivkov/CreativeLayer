import React from 'react';
import "./Footer.css";
import Logo from "../../assets/Logo.svg"


const Footer = () => {

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
    <div className='footer-container'>
      <div className='footer-first-level'>
        <div className='company-container'>
          <img onClick={() => scrollToSection('home')} src={Logo} alt="Logo" />
          <p>Lev pidor</p>
        </div>
        <div className='contact-info-container'>
          <h6>Contact me</h6>
          <p>footer.telephone</p>
          <p>footer.email</p>
        </div>
        <div className='navigation-footer'>
          <a onClick={() => scrollToSection('home')} className="footer-link">Home</a>
          <a onClick={() => scrollToSection('price')} className="footer-link">Calculator</a>
          <a onClick={() => scrollToSection('gallery')} className="footer-link">3D-Models</a>
          <a onClick={() => scrollToSection('contact')} className="footer-link">Contact</a>
        </div>
        <div className='nobody-reads-container'>
          <div>
            <p>privacyPolicy</p>
            <p>footer.termsCondition</p>
          </div>
          <p className='Rights'>footer.right</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
