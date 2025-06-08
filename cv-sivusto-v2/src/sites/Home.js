import React from 'react';
import '../CSS/Home.css';
import HighlightSection from '../components/HighlightSection.js';

import reactIcon from '../assets/icons/react.svg';
import jsIcon from '../assets/icons/js.svg';
import wpIcon from '../assets/icons/wordpress.svg';
import psIcon from '../assets/icons/photoshop.svg';
import prIcon from '../assets/icons/premiere.svg';


function Home() {
  return (
    <div className="home-wrapper container mt-5">

      <div className="header-section">
        <h1 className="header-name">
          Akseli Rajahalme <span className="asterisk">*</span>
        </h1>
        <p className="fst-italic subtext">
          Web developer / UI, UX Designer
        </p>
      </div>

      <div className="skills-section">
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
      <HighlightSection />
    </div>
  );
}

export default Home;
