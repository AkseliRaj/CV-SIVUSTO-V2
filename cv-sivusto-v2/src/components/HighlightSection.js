import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import '../CSS/HighlightSection.css';

function HighlightSection() {
  return (
    <div className="highlight-wrapper container mt-5">
      <h2 className="highlight-heading">
        Olen hyvä<br></br>{' '}
        <span className="typewriter-text">
          <Typewriter
            words={['yliajattelemaan', 'stressaamaan', 'loivertelemaan', 'web-suunnittelussa']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p className="highlight-subtext mt-3">
        Katso projekteja mitä olen tehnyt{' '}
        <Link to="/projects" className="highlight-link">täältä</Link>
      </p>
    </div>
  );
}

export default HighlightSection;
