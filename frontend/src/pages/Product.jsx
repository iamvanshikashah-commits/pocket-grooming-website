import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/Product.css';

const Product = () => {
  const { hero, quality, system, specifications, scenarios } = mockData.product;

  return (
    <div className="product-page">
      {/* Product Hero */}
      <section className="product-hero-section section-padding-large">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-hero-content">
              <h1 className="hero-medium">{hero.title}</h1>
              <p className="heading-3 mt-md" style={{ color: 'var(--text-secondary)' }}>
                {hero.subtitle}
              </p>

              <div className="product-specs mt-xl">
                {hero.specs.map((spec, index) => (
                  <span key={index} className="spec-chip">{spec}</span>
                ))}
              </div>

              <div className="mt-xxl">
                <Link to="/contact" className="btn-primary">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="product-hero-media">
              <div className="media-placeholder">
                <p className="body-small" style={{ color: 'var(--text-light)' }}>
                  [Product hero render or loop video]<br />
                  Recommended: 800×1000px<br />
                  Aspect ratio: 4:5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-thin" style={{ maxWidth: '1600px', margin: '0 auto' }} />

      {/* Foam Quality */}
      <section className="quality-section section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">{quality.title}</h2>
          
          <div className="quality-grid mt-xxl">
            {quality.points.map((point, index) => (
              <div key={index} className="quality-card">
                <h3 className="heading-3">{point.title}</h3>
                <p className="body-regular mt-md">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="foam-media mt-xxl">
            <div className="media-placeholder">
              <p className="body-small" style={{ color: 'var(--text-light)' }}>
                [Foam macro image]<br />
                Recommended: 1200×600px<br />
                Aspect ratio: 2:1
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Aerosol System */}
      <section className="system-section-product section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="system-content-product">
            <h2 className="heading-1">{system.title}</h2>
            <p className="body-large mt-lg" style={{ maxWidth: '700px' }}>
              {system.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="specs-section section-padding">
        <div className="container">
          <h2 className="heading-2 text-center mb-xxl">Technical Specifications</h2>
          
          <div className="specs-table">
            {specifications.map((spec, index) => (
              <div key={index} className="spec-row">
                <div className="spec-label body-regular">{spec.label}</div>
                <div className="spec-value body-regular">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Scenarios */}
      <section className="scenarios-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="heading-1 text-center mb-xxl">Integration Scenarios</h2>
          
          <div className="scenarios-grid">
            {scenarios.map((scenario, index) => (
              <div key={index} className="scenario-card">
                <h3 className="heading-3">{scenario.title}</h3>
                <p className="body-regular mt-md">{scenario.benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-xxl">
            <Link to="/contact" className="btn-primary">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="hero-medium">Inquire for pricing, sampling, and supply.</h2>
            <Link to="/contact" className="btn-primary mt-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
