import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Landing.css';

function Landing() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  const handleTransition = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/home');
    }, 1000); // Odotetaan 1s ennen siirtymistä
  };

  return (
    <div className={`landing-background d-flex flex-column justify-content-center align-items-center text-white text-center vh-100 ${isFading ? 'fade-out' : ''}`}>
      <h1 className={`landing-heading px-3 px-md-5 ${isFading ? 'fade' : ''}`}>
        Hei,<span className="d-inline d-sm-none"><br /></span> olen Akseli
      </h1>
      <button
        className={`gradient-text-button mt-3 mt-lg-5 px-4 px-md-5 ${isFading ? 'fade' : ''}`}
        onClick={handleTransition}
      >
        <span className="visually-hidden">Siirry sivustolle</span>
      </button>
    </div>
  );
}

export default Landing;
