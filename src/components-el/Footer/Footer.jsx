import React from 'react';
import "./Footer.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    console.log('Αναγνωριστικό Ενότητας:', sectionId, 'Κορυφή Ενότητας:', sectionTop);

    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Διάρκεια της κινημένης κύλισης σε χιλιοστά του δευτερολέπτου
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
          <img onClick={() => scrollToSection('home')} src={Logo} alt="Λογότυπο" />
        </div>
        <div className='contact-info-container'>
          <h6 style={{color:'#E99F0E'}}>Επικοινωνήστε</h6>
          <p>creative0.0layer@gmail.com</p>
          <a href='https://t.me/CreativeLayer'><p> @CreativeLayer</p></a>
          <a href='https://wa.me/35797816242'><p> https://wa.me/35797816242</p></a>
        </div>
        <div className='navigation-footer'>
          <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="footer-link">Αρχική</a>
          <a href="#price" onClick={(e) => {e.preventDefault(); scrollToSection('price');}} className="footer-link">Αριθμομηχανή</a>
          <a href="#gallery" onClick={(e) => {e.preventDefault(); scrollToSection('gallery');}} className="footer-link">Μοντέλα 3D</a>
          <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="footer-link">Επικοινωνία</a>
        </div>
        <div className='nobody-reads-container'>
          <div>
            <a href='https://www.termsfeed.com/live/d0d010f5-8595-402f-9861-1c7a2983e992'><p>Πολιτική Απορρήτου</p></a>
            <a href='https://www.termsfeed.com/live/bf129419-7b70-4169-9545-0031703c1caa'><p>Όροι & Προϋποθέσεις</p></a>
          </div>
          <p className='Rights'>© 2024, Με επιφύλαξη παντός δικαιώματος</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
