import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/MicroGrooming.css';

const MicroGrooming = () => {
  const { hero, shift, pillars, vision } = mockData.microGrooming;

  return (
    <div className="micro-grooming-page">
      {/* Hero */}
      <section className="mg-hero-section section-padding-large">
        <div className="container">
          <h1 className="hero-large">{hero.title}</h1>
          <p className="hero-medium mt-lg" style={{ maxWidth: '900px' }}>
            {hero.subtitle}
          </p>
        </div>
      </section>

      <hr className="divider-thin" style={{ maxWidth: '1600px', margin: '0 auto' }} />

      {/* The Shift - Problem/Solution */}
      <section className="shift-section section-padding">
        <div className="container">
          <div className="shift-grid">
            <div className="shift-card">
              <h2 className="heading-2">{shift.problem.title}</h2>
              <ul className="shift-list mt-lg">
                {shift.problem.points.map((point, index) => (
                  <li key={index} className="body-regular">{point}</li>
                ))}
              </ul>
            </div>

            <div className="shift-card">
              <h2 className="heading-2">{shift.solution.title}</h2>
              <ul className="shift-list mt-lg">
                {shift.solution.points.map((point, index) => (
                  <li key={index} className="body-regular">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT | FLOW | FUNCTION */}
      <section className="pillars-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-header">
                  <h2 className="heading-1">{pillar.title}</h2>
                  {index < pillars.length - 1 && <div className="pillar-divider-vert"></div>}
                </div>
                <p className="body-regular mt-lg">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Vision */}
      <section className="vision-section section-padding">
        <div className="container">
          <div className="vision-content">
            <h2 className="heading-1">{vision.title}</h2>
            <p className="body-large mt-lg">
              {vision.description}
            </p>
            <p className="body-small mt-lg" style={{ color: 'var(--text-meta)' }}>
              {vision.note}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mg-cta-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="cta-content">
            <h2 className="hero-medium">Ready to explore Micro Grooming?</h2>
            <Link to="/contact" className="btn-primary mt-xl">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroGrooming;
