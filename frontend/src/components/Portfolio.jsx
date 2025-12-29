import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import StartupsSection from './StartupsSection';
import PassionsSection from './PassionsSection';
import BooksSection from './BooksSection';
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
      <StartupsSection />
      <PassionsSection />
      <BooksSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;