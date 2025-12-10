import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate about building products that make a difference</p>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a tech entrepreneur with a passion for solving complex problems at scale. 
              Through my ventures, I've touched the lives of hundreds of thousands of users, 
              building products that empower people to learn and find meaningful opportunities.
            </p>
            <p className="about-paragraph">
              My journey in tech has been driven by a simple belief: technology should make 
              life better, simpler, and more accessible for everyone. Whether it's through 
              education or career advancement, I'm committed to building the future.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">260K+</div>
              <div className="stat-label">Total Users Impacted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Startups Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Paid Learners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment to Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;