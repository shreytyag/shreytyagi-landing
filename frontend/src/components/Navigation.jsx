import React from 'react';
import './Navigation.css';

const Navigation = ({ scrolled }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Shrey</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('startups')} className="nav-link">Startups</button>
          <button onClick={() => scrollToSection('passions')} className="nav-link">Passions</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link cta">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;