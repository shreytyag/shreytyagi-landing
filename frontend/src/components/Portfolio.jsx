import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import StartupsSection from './StartupsSection';
import PassionsSection from './PassionsSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';
import './Portfolio.css';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <StartupsSection />
      <PassionsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;