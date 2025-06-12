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
import cssIcon from '../assets/icons/css.svg';
import htmlIcon from '../assets/icons/html5.svg';

import basedIcon from '../assets/icons/location.svg';
import briefcaseIcon from '../assets/icons/briefcase.svg'


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
          Akseli <span className="d-block d-md-inline" /> Rajahalme <span className="asterisk">*</span>
        </h1>

        <div className="briefcase">
          {/* Yksi rivillinen versio: näkyy md-koosta ylöspäin */}
          <div className="d-none d-md-flex align-items-center">
            <img src={briefcaseIcon} alt="Briefcase" />
            <span className="subtext">Web developer / UI, UX Designer</span>
          </div>

          {/* Rivitetty versio: näkyy pienemmissä näkymissä */}
          <div className="d-flex d-md-none flex-column">
            <div className="d-flex align-items-center">
              <img src={briefcaseIcon} alt="Briefcase" />
              <span className="subtext">Web developer,</span>
            </div>
            <div className="d-flex align-items-center">  {/* margin-start instead of padding */}
              <span className="subtextUI">UI, UX Designer</span>
            </div>
          </div>
        </div>

        <div className="location">
          <img src={basedIcon} alt="Location" />
          <span>Helsinki, Finland</span>
        </div>
      </div>

      <div
        ref={skillsRef}
        className={`skills-section fade-in-section ${skillsVisible ? 'visible' : ''}`}
      >
        <p className="subtext mb-3">Pätevyydet alan tehtäviin:</p>
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
            <img src={htmlIcon} alt="HTML5" />
            <span>HTML5</span>
          </div>
          <div className="skill-badge">
            <img src={prIcon} alt="Premiere Pro" />
            <span>Premiere Pro</span>
          </div>
          <div className="skill-badge">
            <img src={cssIcon} alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="skill-badge">
            <img src={psIcon} alt="Photoshop" />
            <span>Photoshop</span>
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
        <h2 className="header-name">Yhteystiedot</h2>
        <p className="subtext mb-4">akseli.rajahalme@gmail.com<br />+358 44 993 7101</p>
        <ContactForm />
      </div>

    </div>
  );
}

export default Home;