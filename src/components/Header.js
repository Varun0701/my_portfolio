// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the updated header CSS

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Varun Choudary Tammineni</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/skills" className="nav-link">Skills</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
