import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Landing.css';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-background d-flex flex-column justify-content-center align-items-center text-white text-center vh-100">
            <h1 className="display-1 fw-bold">Hei,</h1>
            <button
                className="gradient-text-button mt-4"
                onClick={() => navigate('/home')}
            >
                <span className="visually-hidden">Siirry sivustolle</span>
            </button>
        </div>
    );
}

export default Landing;