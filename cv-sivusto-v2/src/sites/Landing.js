import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Landing.css'; // Muista luoda tämä CSS-tiedosto!

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-background d-flex flex-column justify-content-center align-items-center text-white text-center vh-100">
      <h1 className="display-1 fw-bold">Hei,</h1>
      <button
        className="btn btn-light mt-4 px-4 py-2 fw-bold"
        onClick={() => navigate('/home')}
      >
        Siirry sivustolle
      </button>
    </div>
  );
}

export default Landing;
