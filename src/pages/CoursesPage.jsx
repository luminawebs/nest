import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  trackButtonClick, 
  trackServiceInquiry, 
  trackLinkClick,
  trackContactClick,
  trackFormSubmission 
} from '../utils/analytics';
import ImpactoDemostrado from '../components/ImpactoDemostrado';
import FAQSection from '../components/FAQSection';
import PortfolioGrid from '../components/PortfolioGrid';
import LeadCaptureForm from '../components/LeadCaptureForm';

const CoursesPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main className="main">
      {/* Hero Section - Above the fold */}
      <section id="hero" className="hero section courses-hero">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="hero-content">
                <span className="hero-badge">{t('courses.hero.trustBadge')}</span>
                <h1 className="hero-title">{t('courses.hero.title')}</h1>
                <p className="hero-subtitle">{t('courses.hero.subtitle')}</p>
                <p className="hero-description">{t('courses.hero.description')}</p>
                
                <div className="hero-cta d-flex flex-wrap gap-3 mt-4">
                  <a
                    href="#quote-form"
                    className="btn btn-primary btn-lg "
                    onClick={() => trackButtonClick('Hero CTA - Request Quote', 'Courses Landing')}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    {t('courses.hero.ctaPrimary')}
                  </a>
                  <a
                    href="#portfolio"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => trackButtonClick('Hero CTA - View Portfolio', 'Courses Landing')}
                  >
                    <i className="bi bi-folder2-open me-2"></i>
                    {t('courses.hero.ctaSecondary')}
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="hero-trust mt-5">
                  <div className="row g-4">
                    <div className="col-4 text-center">
                      <div className="trust-stat">
                        <div className="trust-number">50+</div>
                        <div className="trust-label">Instituciones</div>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div className="trust-stat">
                        <div className="trust-number">95%</div>
                        <div className="trust-label">Satisfacción</div>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div className="trust-stat">
                        <div className="trust-number">2-4</div>
                        <div className="trust-label">Semanas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-media">
                <img 
                  src="/assets/img/courses.png" 
                  alt="eLearning Courses" 
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section section">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2>{t('courses.problem.title')}</h2>
            <p className="lead">{t('courses.problem.subtitle')}</p>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
            {(t('courses.problem.challenges') || []).map((challenge, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="challenge-card h-100 p-4 border-primary border rounded-4 shadow-sm">
                  <div className="challenge-icon mb-3">
                    <i className={`bi ${challenge.icon} text-primary`} style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h4>{challenge.title}</h4>
                  <p className=" mb-0 color-primary white">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section section">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2>{t('courses.solution.title')}</h2>
            <p className="lead">{t('courses.solution.subtitle')}</p>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
            {(t('courses.solution.features') || []).map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="feature-card h-100 p-4 border rounded-4">
                  <div className="feature-icon mb-3">
                    <i className={`bi ${feature.icon} text-primary`} style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p className=" mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Stats Section */}
      <section id="benefits" className="benefits-section section bg-primary text-white">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2 className="text-white">{t('courses.benefits.title')}</h2>
            <p className="lead text-white-50">{t('courses.benefits.subtitle')}</p>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
            {(t('courses.benefits.stats') || []).map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 text-center">
                <div className="stat-card">
                  <div className="stat-number display-4 fw-bold mb-2">{stat.number}</div>
                  <div className="stat-label h5 mb-2">{stat.label}</div>
                  <p className="stat-description text-white-50 small mb-0">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section section">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <h2>{t('courses.process.title')}</h2>
            <p className="lead">{t('courses.process.subtitle')}</p>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
            {(t('courses.process.steps') || []).map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="process-step text-center">
                  <div className="step-number mb-3">
                    <span className="badge bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      {step.number}
                    </span>
                  </div>
                  <h4>{step.title}</h4>
                  <p className="">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section section ">
        <div className="container section-title mb-4" data-aos="fade-up">
          <h2>{t('courses.portfolio.title')}</h2>
          <p className="lead">{t('courses.portfolio.subtitle')}</p>
        </div>
        <PortfolioGrid />
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="social-proof-section section">
        <ImpactoDemostrado />
      </section>

      {/* Lead Capture CTA Section */}
      <section id="quote-form" className="cta-section section bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="text-white mb-3">{t('courses.cta.title')}</h2>
              <p className="lead text-white-50 mb-4">{t('courses.cta.subtitle')}</p>
              <p className="text-white mb-4">{t('courses.cta.description')}</p>
              
              <div className="trust-elements">
                {(t('courses.cta.trustElements') || []).map((element, index) => (
                  <div key={index} className="trust-element d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-white me-2" style={{ fontSize: '1.25rem' }}></i>
                    <span className="text-white">{element}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-7" data-aos="fade-left">
              <div className="quote-form-wrapper bg-white rounded-4 p-4 shadow-lg">
                <h3 className="mb-4 text-dark">{t('courses.cta.form.title')}</h3>
                <LeadCaptureForm source="courses" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section section">
        <FAQSection />
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="final-cta-section section">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="mb-3">{t('courses.finalCta.title')}</h2>
              <p className="lead mb-4">{t('courses.finalCta.subtitle')}</p>
              <a
                href={t('courses.finalCta.calendlyUrl')}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkClick('Final CTA - Calendly 30min', 'Courses Landing')}
              >
                <i className="bi bi-telephone-outbound me-2"></i>
                {t('courses.finalCta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;

