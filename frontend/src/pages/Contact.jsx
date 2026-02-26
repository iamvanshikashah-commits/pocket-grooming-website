import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mock';
import { toast } from 'sonner';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    city: '',
    requirement: '',
    message: '',
    requestSamples: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend API
    setTimeout(() => {
      mockData.contactSubmissions.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });

      toast.success('Thanks — we\'ve received your inquiry. Our team will reach out shortly.');
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        city: '',
        requirement: '',
        message: '',
        requestSamples: false
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero-section section-padding">
        <div className="container">
          <h1 className="contact-hero-title">Get in touch.</h1>
          <p className="contact-hero-subtitle">
            For sampling, pricing, custom branding, and institutional supply inquiries.
          </p>
          <p className="contact-hero-note">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column - Company Info */}
            <div className="contact-info-column">
              {/* Company Card */}
              <div className="info-card">
                <h3 className="info-card-title">Jaivanti Cosmetics Pvt. Ltd. (JCOS)</h3>
                <p className="info-card-meta">Established: 1990 • Kolkata</p>
                <p className="info-card-text">
                  <strong>About:</strong> Manufacturers of hotel-grade toiletries and grooming essentials.
                </p>
                <p className="info-card-text">
                  <strong>Manufacturing Licence:</strong> AL-925 (M)
                </p>
              </div>

              {/* Address Card */}
              <div className="info-card">
                <h3 className="info-card-title">Address</h3>
                <p className="info-card-text">
                  14, Ganesh Chandra Avenue<br />
                  KGN House, Near Mission Café<br />
                  Mezzanine Floor<br />
                  Kolkata – 700013
                </p>
              </div>

              {/* Direct Contacts Card */}
              <div className="info-card">
                <h3 className="info-card-title">Direct Contacts</h3>
                
                <div className="contact-entry">
                  <p className="contact-name">Jayant Shah</p>
                  <p className="contact-role">Director</p>
                  <p className="contact-detail">+91 98300 85235</p>
                  <p className="contact-detail">jayantshah65@gmail.com</p>
                </div>

                <div className="contact-entry">
                  <p className="contact-name">Vanshika Shah</p>
                  <p className="contact-role">Product Development & Marketing</p>
                  <p className="contact-detail">+91 90512 78459</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-column">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role" className="form-label">Role *</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your role"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city" className="form-label">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="City"
                    />
                  </div>
                </div>

                <div className="form-group mt-lg">
                  <label htmlFor="requirement" className="form-label">Requirement Type *</label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select requirement type</option>
                    {mockData.contactForm.requirementOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mt-lg">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="form-group mt-lg">
                  <label className="checkbox-row">
                    <input
                      type="checkbox"
                      name="requestSamples"
                      checked={formData.requestSamples}
                      onChange={handleChange}
                      className="form-checkbox-input"
                    />
                    <span className="checkbox-label-text">Request samples</span>
                  </label>
                </div>

                <div className="form-submit-section">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-solid"
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  <p className="form-privacy-note">
                    We'll only use your details to respond to this inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
