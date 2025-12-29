import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shrey@myjobb.ai');
    alert('Email copied to clipboard!');
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Let's Collaborate</h2>
          <p className="contact-subtitle">Book a call with me –</p>
        </div>
        
        <div className="contact-center">
          <a href="https://calendly.com/tyagishrey996/30min" target="_blank" rel="noopener noreferrer" className="contact-circle-link">
            <div className="contact-circle">
              <ArrowUpRight size={32} className="contact-circle-icon" />
            </div>
          </a>
        </div>

        <div className="contact-right">
          <div className="contact-email-section">
            <p className="contact-email">shrey@myjobb.ai</p>
            <button onClick={handleCopyEmail} className="copy-button">
              📋 Copy to clipboard
            </button>
          </div>
        </div>
      </div>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/yourjobwithshrey/" target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href="mailto:shrey@myjobb.ai" className="contact-link">
          Email
        </a>
        <a href="https://cal.com/yourjobwithshrey" target="_blank" rel="noopener noreferrer" className="contact-link cta">
          Get in Touch
        </a>
      </div>

      <div className="footer">
        <p className="footer-text">© Shrey Tyagi 2025</p>
      </div>
    </section>
  );
};

export default ContactSection;