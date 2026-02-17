import React, { useState } from 'react';
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

      toast.success('Thank you! We\'ll respond within 1–2 business days.');
      
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
          <h1 className="hero-medium text-center">Get in touch.</h1>
          <p className="body-large mt-md text-center" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '16px auto 0' }}>
            For sampling, pricing, and supply inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section section-padding-small">
        <div className="container">
          <div className="form-wrapper">
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
                  rows="6"
                  className="form-textarea"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="form-group mt-lg">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="requestSamples"
                    checked={formData.requestSamples}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="body-regular">Request samples</span>
                </label>
              </div>

              <div className="mt-xl">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="contact-info-content">
            <h2 className="heading-3">Direct Contact</h2>
            <p className="body-regular mt-md">
              For urgent inquiries or specific questions, reach out directly to our institutional supply team.
            </p>
            <p className="body-small mt-lg" style={{ color: 'var(--text-secondary)' }}>
              Response time: 1–2 business days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
