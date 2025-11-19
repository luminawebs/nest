import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { trackSliderInteraction } from '../utils/analytics';

const ImpactoDemostrado = () => {
  const { t } = useTranslation();
  const caseStudy = t('testimonial.caseStudy.politecnico');

  return (
    <section id="testimonial" className="testimonial-section section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Title and Navigation */}
          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
            <div className="testimonial-intro">
              <h2 className="section-title mb-3">{t('testimonial.title')}</h2>
              <p className="lead mb-4">{t('testimonial.subtitle')}</p>
              <div className="swiper-nav-buttons d-flex gap-3">
                <button
                  className="slider-prev btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px' }}
                  onClick={() => trackSliderInteraction('previous')}
                  aria-label={t('testimonial.navigation.prev')}
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button
                  className="slider-next btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px' }}
                  onClick={() => trackSliderInteraction('next')}
                  aria-label={t('testimonial.navigation.next')}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Case Study Content */}
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="testimonial-slider swiper init-swiper">
              <script
                type="application/json"
                className="swiper-config"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    loop: true,
                    speed: 800,
                    autoplay: {
                      delay: 5000,
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    navigation: {
                      nextEl: ".slider-next",
                      prevEl: ".slider-prev",
                    },
                    breakpoints: {
                      768: {
                        slidesPerView: 1,
                      },
                    },
                  }),
                }}
              ></script>

              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item rounded-4 p-4 p-md-5 shadow-lg h-100">
                    <div className="testimonial-header d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 mb-4 pb-4 border-bottom">
                      <img 
                        src="/assets/img/Logo_del_Politecnico_Grancolombiano.svg" 
                        alt="Politécnico Grancolombiano" 
                        className="testimonial-logo"
                        style={{ maxWidth: '180px', height: 'auto' }}
                      />
                      <div className="flex-grow-1">
                        <h3 className="h4 mb-0 fw-bold">{caseStudy.title}</h3>
                      </div>
                    </div>
                    <div className="testimonial-challenge mb-4">
                      <p className="mb-2">
                        <strong className="text-primary">{caseStudy.challenge.label}</strong>
                      </p>
                      <p className="mb-0">{caseStudy.challenge.text}</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item rounded-4 p-4 p-md-5 shadow-lg h-100">
                    <div className="testimonial-header d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 mb-4 pb-4 border-bottom">
                      <img 
                        src="/assets/img/Logo_del_Politecnico_Grancolombiano.svg" 
                        alt="Politécnico Grancolombiano" 
                        className="testimonial-logo"
                        style={{ maxWidth: '180px', height: 'auto' }}
                      />
                      <div className="flex-grow-1">
                        <h3 className="h4 mb-0 fw-bold">{caseStudy.title}</h3>
                      </div>
                    </div>
                    <div className="testimonial-solution mb-4">
                      <p className="mb-3">
                        <strong className="text-primary">{caseStudy.solution.label}</strong>
                      </p>
                      <ul className="case-study-features list-unstyled mb-0">
                        {caseStudy.solution.features.map((feature, index) => {
                          const isSubItem = feature.startsWith('Visualización') || feature.startsWith('Descarga') || feature.startsWith('Progress') || feature.startsWith('Report');
                          return (
                            <li 
                              key={index} 
                              className={`d-flex align-items-start mb-2 ${isSubItem ? 'ms-4' : ''}`}
                            >
                              <i className={`bi bi-check-circle-fill text-primary me-2 mt-1`} style={{ fontSize: '1.1rem', flexShrink: 0 }}></i>
                              <span className={isSubItem ? 'text-muted small' : ''}>{feature}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item rounded-4 p-4 p-md-5 shadow-lg h-100">
                    <div className="testimonial-header d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 mb-4 pb-4 border-bottom">
                      <img 
                        src="/assets/img/Logo_del_Politecnico_Grancolombiano.svg" 
                        alt="Politécnico Grancolombiano" 
                        className="testimonial-logo"
                        style={{ maxWidth: '180px', height: 'auto' }}
                      />
                      <div className="flex-grow-1">
                        <h3 className="h4 mb-0 fw-bold">{caseStudy.title}</h3>
                      </div>
                    </div>
                    <div className="testimonial-results">
                      <p className="mb-3">
                        <strong className="text-primary">{caseStudy.results.label}</strong>
                      </p>
                      <div className="results-grid row g-3">
                        {caseStudy.results.stats.map((stat, index) => (
                          <div key={index} className="col-md-4">
                            <div className="result-item text-center p-3 rounded-3 h-100">
                              <div className="result-number display-5 fw-bold text-primary mb-2">
                                {stat.number}
                              </div>
                              <div className="result-label small mb-0">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-section {
          background: linear-gradient(135deg, rgba(227, 161, 39, 0.05) 0%, rgba(227, 161, 39, 0.02) 100%);
        }

        .testimonial-intro h2 {
          color: var(--heading-color);
          font-size: 2.5rem;
          font-weight: 700;
        }

        .testimonial-intro .lead {
          color: var(--default-color);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .testimonial-item {
          min-height: 100%;
        }

        .testimonial-header {
          border-bottom: 2px solid rgba(227, 161, 39, 0.2) !important;
        }

        .testimonial-logo {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .case-study-features li {
          line-height: 1.8;
        }

        .results-grid .result-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .results-grid .result-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(227, 161, 39, 0.15) !important;
        }

        .slider-prev,
        .slider-next {
          border: 2px solid #e3a127;
          color: #e3a127;
          transition: all 0.3s ease;
        }

        .slider-prev:hover,
        .slider-next:hover {
          background-color: #e3a127;
          color: #ffffff;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .testimonial-intro h2 {
            font-size: 2rem;
          }

          .testimonial-header {
            flex-direction: column;
            text-align: center;
          }

          .testimonial-logo {
            max-width: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactoDemostrado;
