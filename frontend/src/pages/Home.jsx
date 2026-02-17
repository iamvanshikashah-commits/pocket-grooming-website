import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';
import '../styles/Home.css';

const Home = () => {
  const { hero, category, systemPoints, product, useContexts, trust } = mockData.home;

  const scrollToMicroGrooming = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.getElementById('category').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section hero-section-refined">
        {/* Video Background */}
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23F4F4F2' width='1920' height='1080'/%3E%3C/svg%3E">

            <source
              src="https://customer-assets.emergentagent.com/job_pocket-grooming/artifacts/ekli3eph_Gen-4_5%20Controlled%20high-density%20fluid%20motion%2C%20slow%20twisting%20vortex%20movement%20inspired%20by%20air-dispersion%20engineering%20Heavy%20sculptural%20folds%20glide%20past%20each%20other%20with%20tension%20and%20precision%20Subtle%20ligh.gen-4_5%20controlled%20high-density%20fluid%20mot.mp4"
              type="video/mp4" />

          </video>
          <div className="hero-video-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="container hero-content-wrapper">
          <p className="eyebrow !bg-[#FFFFFF]">{hero.eyebrow}</p>
          <h1 className="hero-display">{hero.headline}</h1>
          <p className="hero-subheadline">{hero.subheadline}</p>
          <p className="hero-body" style={{ maxWidth: '600px' }}>
            {hero.description}
          </p>
          
          <div className="hero-pillars">
            {hero.pillars.map((pillar, index) =>
            <React.Fragment key={index}>
                <span className="pillar-text">{pillar}</span>
                {index < hero.pillars.length - 1 && <span className="pillar-divider">|</span>}
              </React.Fragment>
            )}
          </div>

          <div className="hero-actions">
            <Link to="/product" className="btn-primary-solid">
              Explore Pocket Shaving Foam
            </Link>
            <Link to="/contact" className="btn-text-link">
              Inquire Now
            </Link>
          </div>
        </div>
        <hr className="divider-thin" style={{ maxWidth: '1600px', margin: '80px auto 0' }} />
      </section>

      {/* Category Introduction */}
      <section id="category" className="category-section section-padding">
        <div className="container">
          <div className="category-content">
            <h2 className="heading-1">{category.title}</h2>
            <p className="body-large mt-lg" style={{ maxWidth: '700px' }}>
              {category.description}
            </p>
            <a href="#category" onClick={scrollToMicroGrooming} className="btn-secondary mt-lg">
              Learn Micro Grooming <ArrowRight size={14} style={{ display: 'inline', marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* System Architecture Block */}
      <section className="system-section">
        <div className="system-dark-band">
          <div className="container">
            {systemPoints.map((point, index) =>
            <div key={index} className="system-item">
                <div className="system-content">
                  <h3 className="heading-3">{point.title}</h3>
                  <p className="body-regular mt-sm">{point.description}</p>
                </div>
                <div className="system-number">{point.number}</div>
                {index < systemPoints.length - 1 && <hr className="divider-thin mt-xl mb-xl" />}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="product-preview-section section-padding">
        <div className="container">
          <div className="product-preview-grid">
            <div className="product-preview-content">
              <h2 className="heading-1">{product.name}</h2>
              <p className="heading-3 mt-md" style={{ color: 'var(--text-secondary)' }}>
                {product.size}
              </p>
              
              <ul className="product-highlights mt-xl">
                {product.highlights.map((highlight, index) =>
                <li key={index} className="body-regular">{highlight}</li>
                )}
              </ul>

              <p className="body-small mt-xl" style={{ color: 'var(--text-meta)' }}>
                {product.inquiry}
              </p>

              <div className="mt-xl">
                <Link to="/product" className="btn-primary">
                  View Product Details
                </Link>
              </div>
            </div>

            <div className="product-preview-media">
              <div className="media-placeholder">
                <p className="body-small" style={{ color: 'var(--text-light)' }}>
                  [Product render]<br />
                  Recommended: 600×800px<br />
                  Aspect ratio: 3:4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Contexts */}
      <section className="use-contexts-section section-padding">
        <div className="container">
          <div className="contexts-grid">
            {useContexts.map((context, index) =>
            <div key={index} className="context-card">
                <h3 className="heading-3">{context.title}</h3>
                <p className="body-regular mt-md">{context.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-section section-padding-small">
        <div className="container">
          <div className="trust-content">
            <h2 className="heading-2">{trust.headline}</h2>
            <p className="body-large mt-md">{trust.description}</p>
            <Link to={trust.linkPath} className="btn-secondary mt-lg">
              {trust.linkText} <ArrowRight size={14} style={{ display: 'inline', marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="hero-medium">Bring Micro Grooming to your property.</h2>
            <p className="body-large mt-md">
              Request details, pricing, sampling, and supply capability.
            </p>
            <Link to="/contact" className="btn-primary mt-xl">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>);

};

export default Home;