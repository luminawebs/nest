import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { trackFormSubmission, trackButtonClick } from '../utils/analytics';
import { sendFormData } from '../services/emailService';

const LeadCaptureForm = ({ source = 'courses', className = '' }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data for email service
      const emailData = {
        fullName: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: `Quote Request from ${formData.company || 'Courses Page'}`,
        message: formData.message || `Lead captured from ${source} page`,
        source: source,
        subscribe: false
      };

      // Track form submission
      trackFormSubmission(`Lead Capture - ${source}`, 'lead_generation');
      trackButtonClick(`Form Submit - ${source}`, 'Lead Generation');

      // Send via email service
      await sendFormData(emailData, {}, []);

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });

      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 1.0,
          currency: 'USD'
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`lead-capture-form ${className}`}>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">{t('courses.cta.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('courses.cta.form.name')}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">{t('courses.cta.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('courses.cta.form.email')}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="company">{t('courses.cta.form.company')}</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-control"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder={t('courses.cta.form.company')}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">{t('courses.cta.form.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('courses.cta.form.phone')}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label htmlFor="message">{t('courses.cta.form.message')}</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('courses.cta.form.message')}
              />
            </div>
          </div>

          <div className="col-12">
            {submitStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle"></i> {t('courses.cta.form.success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle"></i> {t('common.error')}. Por favor intenta nuevamente.
              </div>
            )}
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  {t('common.loading')}...
                </>
              ) : (
                <>
                  <i className="bi bi-send me-2"></i>
                  {t('courses.cta.form.submit')}
                </>
              )}
            </button>
            <p className="text-center mt-3 small text-muted">
              <i className="bi bi-shield-check me-1"></i>
              {t('courses.cta.form.privacy')}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;

