import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Navigation.css';

function Navigation() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="top-bar">
        <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
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

      <div className={`side-nav ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <ul>
          <li><Link to="/home" onClick={closeMenu}>Etusivu</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Portfolio</Link></li>
          <li>
            <a
              href="https://github.com/AkseliRaj"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
