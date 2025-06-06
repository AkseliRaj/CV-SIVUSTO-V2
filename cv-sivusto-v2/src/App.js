import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "./sites/Landing";
import Home from "./sites/Home";
import Projects from "./sites/Projects";
import Navigation from "./components/Navigation";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="container-fluid p-0 m-0">
      {!isLanding && <Navigation />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
