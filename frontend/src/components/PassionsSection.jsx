import React from 'react';
import './PassionsSection.css';

const PassionsSection = () => {
  const workPrinciples = [
    {
      title: 'Problem solve from first principle',
      description: "I've seen teams spin their wheels — not because they lack ideas, but because they never truly defined the problem they were solving. I believe that if I can articulate 80% of a problem with absolute clarity, the right solution reveals itself almost effortlessly. That's why I spend most of my time digging deep, reframing, and stress-testing user problems until they're undeniable. My strength is ideation, but creativity isn't about throwing ideas at a wall — it's about knowing exactly which ideas matter."
    },
    {
      title: 'You can never over-communicate',
      description: "Clarity isn't just about what's said—it's about what's understood. Great product teams thrive on alignment, and alignment only happens when communication is intentional, frequent, and transparent. I over-communicate to set the tone for a culture where nothing gets lost in translation."
    },
    {
      title: 'Prioritization is about defending your \'why\'',
      description: 'Focus is a superpower. I prioritize ruthlessly based on impact and alignment with our core mission. Every decision is a deliberate choice about what matters most.'
    }
  ];

  return (
    <section className="passions-section section" id="work">
      <div className="work-container">
        <div className="work-header">
          <span className="work-number">02</span>
          <h2 className="work-title">How I like to work</h2>
        </div>

        <div className="work-principles">
          {workPrinciples.map((principle, index) => (
            <div key={index} className="principle-card">
              <h3 className="principle-title">{principle.title}</h3>
              <div className="principle-separator"></div>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;