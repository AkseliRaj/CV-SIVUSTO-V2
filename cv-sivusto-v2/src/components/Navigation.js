import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Navigation.css';

function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Header bar */}
      <nav className="top-bar">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <button className="contact-link" onClick={() => {
          const section = document.getElementById('contact');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}>
          Ota yhteyttä
        </button>
      </nav>

      {/* Slide-in menu */}
      <div className={`side-nav ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <ul>
          <li><button onClick={() => { navigate('/projects'); closeMenu(); }}>Projektit</button></li>
          <li><a href="https://github.com/kayttajatunnus" target="_blank" rel="noreferrer">GitHub-profiili</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
