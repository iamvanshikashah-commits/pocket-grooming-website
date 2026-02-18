import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/MicroGrooming.css';

const MicroGrooming = () => {
  const { hero, industryShift, problem, system, performance, integration, cta } = mockData.microGrooming;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="micro-grooming-page">
      {/* Hero Section */}
      <section className="mg-hero-section">
        <div className="container">
          <div className="mg-hero-content">
            <h1 className="mg-hero-title">{hero.title}</h1>
            <hr className="hero-divider" />
            <p className="mg-hero-subheadline">{hero.subheadline}</p>
            <p className="mg-hero-description">{hero.description}</p>
            
            <div className="mg-hero-actions">
              <Link to="/contact" className="btn-primary-solid">
                Request Technical Overview
              </Link>
              <Link to="/contact" className="btn-text-link-dark">
                Download Product Sheet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Shift */}
      <section className="mg-shift-section section-padding">
        <div className="container">
          <h2 className="mg-section-title">{industryShift.title}</h2>
          
          <div className="mg-shift-grid">
            {industryShift.columns.map((column, index) => (
              <div key={index} className="mg-shift-column">
                <h3 className="mg-column-title">{column.title}</h3>
                <p className="mg-column-description">{column.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mg-problem-section section-padding">
        <div className="container">
          <div className="mg-problem-layout">
            <div className="mg-problem-content">
              <h2 className="mg-section-title">{problem.title}</h2>
              <ul className="mg-problem-list">
                {problem.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="mg-problem-visual">
              <div className="mg-visual-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Micro Grooming System */}
      <section className="mg-system-section section-padding">
        <div className="container">
          <h2 className="mg-section-title text-center">{system.title}</h2>
          
          <div className="mg-system-grid">
            {system.features.map((feature, index) => (
              <div key={index} className="mg-system-block">
                <div className="mg-system-number">{feature.number}</div>
                <h3 className="mg-system-feature-title">{feature.title}</h3>
                <p className="mg-system-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Statement */}
      <section className="mg-performance-section">
        <div className="container">
          <div className="mg-performance-content">
            <div className="mg-performance-watermark">01</div>
            <h2 className="mg-performance-headline">{performance.headline}</h2>
            <blockquote className="mg-performance-statement">
              {performance.statement}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="mg-integration-section section-padding">
        <div className="container">
          <h2 className="mg-section-title">{integration.title}</h2>
          <p className="mg-integration-description">{integration.description}</p>
          
          <div className="mg-integration-highlights">
            {integration.highlights.map((highlight, index) => (
              <div key={index} className="mg-highlight-item">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical CTA */}
      <section className="mg-cta-section section-padding-small">
        <div className="container">
          <div className="mg-cta-content">
            <h2 className="mg-cta-headline">{cta.headline}</h2>
            
            <div className="mg-cta-actions">
              <Link to="/contact" className="btn-primary-solid">
                {cta.primaryText}
              </Link>
              <Link to="/contact" className="btn-secondary-outline">
                {cta.secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroGrooming;
