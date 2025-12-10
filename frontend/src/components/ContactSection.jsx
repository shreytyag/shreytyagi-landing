import React from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Always open to discussing new opportunities and collaborations</p>
        
        <div className="contact-content">
          <div className="contact-cards">
            <a href="mailto:shrey@myjobb.ai" className="contact-card">
              <div className="contact-icon-wrapper">
                <Mail size={28} className="contact-icon" />
              </div>
              <div className="contact-info">
                <h3 className="contact-title">Email</h3>
                <p className="contact-detail">shrey@myjobb.ai</p>
              </div>
              <ArrowUpRight size={20} className="contact-arrow" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yourjobwithshrey/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <Linkedin size={28} className="contact-icon" />
              </div>
              <div className="contact-info">
                <h3 className="contact-title">LinkedIn</h3>
                <p className="contact-detail">yourjobwithshrey</p>
              </div>
              <ArrowUpRight size={20} className="contact-arrow" />
            </a>
          </div>
          
          <div className="contact-cta">
            <p className="cta-text">Ready to build something amazing together?</p>
            <a href="mailto:shrey@myjobb.ai" className="cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2025 Shrey. Building the future, one startup at a time.</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;