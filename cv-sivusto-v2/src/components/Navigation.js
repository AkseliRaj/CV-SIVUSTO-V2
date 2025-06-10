import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navigation.css';

import { ReactComponent as HamburgerIcon } from '../assets/icons/HamburgerMenuIcon.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/CloseButtonIcon.svg';

import instagramIcon from '../assets/icons/instagram.svg';
import githubIcon from '../assets/icons/github.svg';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Yläpalkki */}
      <nav className={`top-bar ${fadeIn ? 'fade-in' : ''}`}>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Avaa valikko">
          <HamburgerIcon className="icon" />
        </button>
        <button
          className="contact-link"
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ota yhteyttä
        </button>
      </nav>

      {/* Sivupalkki */}
      <div className={`side-nav ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu} aria-label="Sulje valikko">
          <CloseIcon className="icon" />
        </button>
        <ul>
          <li><Link to="/home" onClick={closeMenu}>Etusivu</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Portfolio</Link></li>
          <li>
            <a
              href="/path/to/your-cv.pdf"
              download="AkseliRaj_CV.pdf"
              onClick={closeMenu}
            >
              Ansioluettelo
            </a>
          </li>
        </ul>

        {/* Sosiaalisen median ikonit */}
        <div className="social-icons">
          <a href="https://github.com/AkseliRaj" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <img src={githubIcon} alt="Github" className="social-icon" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Tumma overlay, näkyy vain kun valikko on auki */}
      {open && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navigation;
