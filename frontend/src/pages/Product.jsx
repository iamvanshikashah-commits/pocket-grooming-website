import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mock';
import '../styles/Product.css';

const Product = () => {
  const { hero, quality, system, specifications, scenarios } = mockData.product;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const imageSection = document.querySelector('.product-image-section');
    if (imageSection) {
      observer.observe(imageSection);
    }

    return () => {
      if (imageSection) {
        observer.unobserve(imageSection);
      }
    };
  }, []);

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
              <div className="product-video-wrapper">
                <video
                  className="product-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect fill='%23EAEAE7' width='800' height='1000'/%3E%3C/svg%3E"
                  onClick={(e) => {
                    if (e.currentTarget.muted) {
                      e.currentTarget.muted = false;
                    } else {
                      e.currentTarget.muted = true;
                    }
                  }}
                  onError={(e) => {
                    console.log('Video failed to load, showing fallback');
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source
                    src="https://customer-assets.emergentagent.com/job_pocket-grooming/artifacts/fk5pjpod_Gen%20z%20%28corrected%29.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="video-fallback" style={{ display: 'none' }}>
                  <p className="body-small" style={{ color: 'var(--text-light)' }}>
                    [PSF Product Video]<br />
                    Loading...
                  </p>
                </div>
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
        </div>
      </section>

      {/* Product Image Section - Full Width */}
      <section className="product-image-section">
        <div className="product-image-wrapper">
          <img
            src="https://customer-assets.emergentagent.com/job_pocket-grooming/artifacts/6zjdkepz_ChatGPT%20Image%20Feb%2017%2C%202026%2C%2004_45_39%20PM.png"
            alt="Pocket Shaving Foam Product"
            className="product-full-image"
            loading="lazy"
          />
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
