import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/Customise.css';

const Customise = () => {
  const { hero, capabilities, process, cta } = mockData.customise;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customise-page">
      {/* Hero Section */}
      <section className="customise-hero-section section-padding">
        <div className="container">
          <div className="customise-hero-content">
            <p className="customise-page-label">CUSTOMISE</p>
            <p className="customise-subtitle">Institutional adaptation. Precision at scale.</p>
            <h1 className="customise-hero-title">{hero.title}</h1>
            <p className="customise-hero-description">{hero.description}</p>
            
            <div className="customise-hero-cta">
              <Link to="/contact" className="btn-primary-solid">
                Speak to Distribution Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customisation Capabilities */}
      <section className="customisation-capabilities-section section-padding">
        <div className="container">
          <h2 className="customise-section-title">{capabilities.title}</h2>
          
          <div className="capabilities-grid">
            <div className="capabilities-column">
              <ul className="capabilities-list">
                {capabilities.leftColumn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="capabilities-divider"></div>
            
            <div className="capabilities-column">
              <ul className="capabilities-list">
                {capabilities.rightColumn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="integration-process-section section-padding">
        <div className="container">
          <h2 className="customise-section-title text-center">{process.title}</h2>
          
          <div className="process-steps-grid">
            {process.steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="customise-cta-section section-padding">
        <div className="container">
          <div className="customise-cta-content">
            <h2 className="customise-cta-headline">{cta.headline}</h2>
            
            <div className="customise-cta-actions">
              <Link to="/contact" className="btn-primary-solid">
                {cta.primaryText}
              </Link>
              <Link to="/contact" className="btn-text-link-dark">
                {cta.secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customise;
