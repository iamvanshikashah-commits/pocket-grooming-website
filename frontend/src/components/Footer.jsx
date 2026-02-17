import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Pocket</h3>
            <p className="footer-subtitle">Micro Grooming</p>
            <p className="body-small mt-md">
              Built by Jaivanti Cosmetics<br />
              Est. 1990
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-section-title">Navigation</h4>
            <ul className="footer-link-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/product" className="footer-link">Product</Link></li>
              <li><Link to="/micro-grooming" className="footer-link">Micro Grooming</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-section-title">Inquiries</h4>
            <p className="body-small">
              For sampling, pricing, and supply information
            </p>
            <Link to="/contact" className="btn-secondary mt-md">
              Inquire Now
            </Link>
          </div>
        </div>

        <hr className="divider-thin mt-xxl" />

        <div className="footer-bottom">
          <p className="body-small">
            © {currentYear} Pocket by Jaivanti Cosmetics. All rights reserved.
          </p>
          <p className="body-small">
            Premium hospitality amenities & institutional supply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
