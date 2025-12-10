import React from 'react';
import { ExternalLink, Users, TrendingUp, Zap } from 'lucide-react';
import './StartupsSection.css';

const StartupsSection = () => {
  const startups = [
    {
      name: 'Skillarena',
      tagline: 'Empowering learners through interactive education',
      description: 'An edtech platform that has scaled to impact 100,000+ learners with 25,000 paid learners, providing practical courses in programming, business, and more.',
      category: 'EdTech',
      metrics: [
        { icon: Users, label: '100K+ Learners' },
        { icon: TrendingUp, label: '25K Paid Users' },
        { icon: Zap, label: 'Live Platform' }
      ],
      link: 'https://skillarena.in/',
      bgClass: 'startup-card-1'
    },
    {
      name: 'myjobb AI',
      tagline: 'AI-powered job matching that actually works',
      description: 'An AI job tool revolutionizing how people find relevant opportunities. Currently live with 160,000+ active users, providing hyper-relevant job matches.',
      category: 'AI Job Tech',
      metrics: [
        { icon: Users, label: '160K+ Users' },
        { icon: Zap, label: 'AI-Powered' },
        { icon: TrendingUp, label: 'Fast Growing' }
      ],
      link: 'https://myjobb.ai/',
      bgClass: 'startup-card-2'
    }
  ];

  return (
    <section className="startups-section section" id="startups">
      <div className="container">
        <h2 className="section-title">My Startups</h2>
        <p className="section-subtitle">Building products that make a real impact</p>
        
        <div className="startups-grid">
          {startups.map((startup, index) => (
            <div key={index} className={`startup-card ${startup.bgClass}`}>
              <div className="startup-header">
                <div className="startup-category">{startup.category}</div>
                <a href={startup.link} target="_blank" rel="noopener noreferrer" className="startup-link">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <div className="startup-content">
                <h3 className="startup-name">{startup.name}</h3>
                <p className="startup-tagline">{startup.tagline}</p>
                <p className="startup-description">{startup.description}</p>
                
                <div className="startup-metrics">
                  {startup.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <metric.icon size={18} className="metric-icon" />
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;