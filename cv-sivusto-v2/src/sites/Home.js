import React from 'react';
import '../CSS/Home.css';

import HighlightSection from '../components/HighlightSection.js';
import ContactForm from '../components/contactForm';
import useScrollFadeIn from '../components/useScrollFadeIn.js';

import reactIcon from '../assets/icons/react.svg';
import jsIcon from '../assets/icons/js.svg';
import wpIcon from '../assets/icons/wordpress.svg';
import psIcon from '../assets/icons/photoshop.svg';
import prIcon from '../assets/icons/premiere.svg';


function Home() {

  const [headerRef, headerVisible] = useScrollFadeIn();
  const [skillsRef, skillsVisible] = useScrollFadeIn();
  const [highlightRef, highlightVisible] = useScrollFadeIn();
  const [contactRef, contactVisible] = useScrollFadeIn();

  return (
    <div className="home-wrapper container mt-5">

      <div
        ref={headerRef}
        className={`header-section fade-in-section ${headerVisible ? 'visible' : ''}`}
      >
        <h1 className="header-name">
          Akseli Rajahalme <span className="asterisk">*</span>
        </h1>
        <p className="fst-italic subtext">
          Web developer / UI, UX Designer
        </p>
      </div>

      <div
        ref={skillsRef}
        className={`skills-section fade-in-section ${skillsVisible ? 'visible' : ''}`}
      >
        <p className="subtext mb-4">Pätevyydet alan tehtäviin:</p>
        <div className="skills-grid">
          <div className="skill-badge">
            <img src={reactIcon} alt="React" />
            <span>React</span>
          </div>
          <div className="skill-badge">
            <img src={wpIcon} alt="Wordpress" />
            <span>Wordpress</span>
          </div>
          <div className="skill-badge">
            <img src={jsIcon} alt="Javascript" />
            <span>Javascript</span>
          </div>
          <div className="skill-badge">
            <img src={psIcon} alt="Photoshop" />
            <span>Photoshop</span>
          </div>
          <div className="skill-badge">
            <img src={prIcon} alt="Premiere Pro" />
            <span>Premiere Pro</span>
          </div>
        </div>
      </div>

      <div ref={highlightRef} className={`fade-in-section ${highlightVisible ? 'visible' : ''}`}>
        <HighlightSection />
      </div>

      <div
        ref={contactRef}
        id="contact"
        className={`contactForm fade-in-section ${contactVisible ? 'visible' : ''}`}
      >
        <h2 className="header-name">Yhteydenotot</h2>
        <p className="subtext mb-4">akseli.rajahalme@gmail.com<br />+358 44 993 7101</p>
        <ContactForm />
      </div>

    </div>
  );
}

export default Home;