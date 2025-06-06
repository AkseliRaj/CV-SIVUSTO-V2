import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Landing.css';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-background d-flex flex-column justify-content-center align-items-center text-white text-center vh-100">
            <h1 className="landing-heading px-3 px-md-5">
                Hei,<span className="d-inline d-sm-none"><br /></span> olen Akseli
            </h1>
            <button
                className="gradient-text-button mt-3 mt-lg-5 px-4 px-md-5"
                onClick={() => navigate('/home')}
            >
                <span className="visually-hidden">Siirry sivustolle</span>
            </button>
        </div>
    );
}

export default Landing;