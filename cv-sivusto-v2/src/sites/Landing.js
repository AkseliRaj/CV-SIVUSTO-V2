import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Landing.css';

function Landing() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 🔹 Käytetään näkyvyyden ohjaamiseen

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 800); // ⏱️ 2 sekunnin viive ennen elementtien näkyvyyttä

    return () => clearTimeout(timeout);
  }, []);

  const handleTransition = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/home');
    }, 1000); // 1s fade-out
  };

  return (
    <div className={`landing-background d-flex flex-column justify-content-center align-items-center text-white text-center vh-100 ${isFading ? 'fade-out' : ''}`}>
      <h1
        className={`landing-heading px-3 px-md-5 
    ${!isVisible ? 'hidden-before-fade' : 'fade-in'} 
    ${isFading ? 'fade' : ''}`}
      >
        Hei,<span className="d-inline d-sm-none"><br /></span> olen Akseli
      </h1>

      <button
        className={`gradient-text-button mt-3 mt-lg-5 px-4 px-md-5 
    ${!isVisible ? 'hidden-before-fade' : 'fade-in'} 
    ${isFading ? 'fade' : ''}`}
        onClick={handleTransition}
      >
        <span className="visually-hidden">Siirry sivustolle</span>
      </button>

    </div>
  );
}

export default Landing;
