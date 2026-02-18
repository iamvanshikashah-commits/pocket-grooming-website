import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/About.css';

const About = () => {
  const { hero, heritage, capability, pocket } = mockData.about;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero-section section-padding-large">
        <div className="container">
          <h1 className="hero-large text-center">{hero.title}</h1>
          <p className="heading-2 mt-lg text-center" style={{ color: 'var(--text-secondary)' }}>
            {hero.subtitle}
          </p>
        </div>
      </section>

      <hr className="divider-thin" style={{ maxWidth: '1600px', margin: '0 auto' }} />

      {/* Heritage */}
      <section className="heritage-section section-padding">
        <div className="container">
          <div className="heritage-content">
            <div className="heritage-header">
              <h2 className="heading-1">{heritage.title}</h2>
              <p className="eyebrow mt-sm">{heritage.established}</p>
            </div>
            <p className="body-large mt-lg">
              {heritage.description}
            </p>
            <p className="body-large mt-md">
              {heritage.focus}
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing & Supply Capability */}
      <section className="capability-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="heading-1 text-center mb-xxl">{capability.title}</h2>
          
          <div className="capability-grid">
            {capability.points.map((point, index) => (
              <div key={index} className="capability-card">
                <h3 className="heading-3">{point.title}</h3>
                <p className="body-regular mt-md">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pocket Exists */}
      <section className="pocket-section section-padding">
        <div className="container">
          <div className="pocket-content">
            <h2 className="heading-1">{pocket.title}</h2>
            <p className="body-large mt-lg">
              {pocket.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="cta-content">
            <h2 className="hero-medium">Let's work together.</h2>
            <p className="body-large mt-md">
              Connect with our team for institutional supply inquiries.
            </p>
            <Link to="/contact" className="btn-primary mt-xl">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
