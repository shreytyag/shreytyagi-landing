import React from 'react';
import { Car, Mountain, Plane, Award } from 'lucide-react';
import './PassionsSection.css';

const PassionsSection = () => {
  const passions = [
    {
      title: 'German Cars',
      description: 'Passionate about precision engineering and automotive excellence',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
      icon: Car
    },
    {
      title: 'Cricket',
      description: 'Following the game that teaches strategy, patience, and teamwork',
      image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=800&q=80',
      icon: Award
    },
    {
      title: 'Mountaineering',
      description: 'Conquering peaks and embracing the challenge of the climb',
      image: 'https://images.unsplash.com/photo-1632309776371-7bbf10dbc97c?w=800&q=80',
      icon: Mountain
    },
    {
      title: 'Travelling',
      description: 'Exploring new cultures, places, and perspectives around the world',
      image: 'https://images.unsplash.com/photo-1609373176920-6b15c5954cfe?w=800&q=80',
      icon: Plane
    }
  ];

  return (
    <section className="passions-section section" id="passions">
      <div className="container">
        <h2 className="section-title">Beyond Tech</h2>
        <p className="section-subtitle">Life is about more than just code and startups</p>
        
        <div className="passions-grid">
          {passions.map((passion, index) => (
            <div key={index} className="passion-card">
              <div className="passion-image-container">
                <img 
                  src={passion.image} 
                  alt={passion.title} 
                  className="passion-image"
                  loading="lazy"
                />
                <div className="passion-overlay">
                  <passion.icon size={40} className="passion-icon" />
                </div>
              </div>
              <div className="passion-content">
                <h3 className="passion-title">{passion.title}</h3>
                <p className="passion-description">{passion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;