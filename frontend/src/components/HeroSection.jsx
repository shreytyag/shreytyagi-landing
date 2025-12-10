import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Building the
              <span className="hero-title-accent"> Future</span>
            </h1>
            <p className="hero-subtitle">
              Tech Entrepreneur solving complex problems at scale
            </p>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_multi-passion-tech/artifacts/kf1h59t8_WhatsApp%20Image%202023-12-20%20at%203.17.16%20AM.jpeg" 
            alt="Shrey - Tech Entrepreneur" 
            className="hero-image"
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;