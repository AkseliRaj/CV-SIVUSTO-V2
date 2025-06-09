import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "./sites/Landing";
import Home from "./sites/Home";
import Projects from "./sites/Projects";
import Navigation from "./components/Navigation";
import FooterMarquee from "./components/FooterMarquee.js";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="app-wrapper position-relative">
      {/* Dot background */}
      <div className="grid-background" aria-hidden="true"></div>

      {!isLanding && <Navigation />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {!isLanding && <FooterMarquee />}
    </div>
  );
}

export default App;
