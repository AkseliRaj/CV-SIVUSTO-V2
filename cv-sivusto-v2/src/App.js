import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Landing from "./sites/Landing";
import Home from "./sites/Home";
import Projects from "./sites/Projects";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="container-fluid p-0 m-0">
      {!isLanding && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav px-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Landing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;