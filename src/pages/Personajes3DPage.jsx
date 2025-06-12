import React from 'react';
// import '../styles/personajes3d.css';

const Personajes3DPage = () => {
  return (



    <div className="personajes3d-page">

      <section id="hero" className="hero section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 content-col" data-aos="fade-up">
              <div className="content">
                <div className="agency-name">
                  <h5>Experiencias inmersivas con personajes tridimensionales</h5>
                </div>

                <div className="main-heading">
                  <h1>Asistentes 3D</h1>
                </div>

                <div className="divider"></div>

                <div className="description">
                  <p>Descubre estrategias innovadoras para la educación digital. Transformamos contenidos en experiencias
                    interactivas que cautivan a los estudiantes. Nuestro equipo especializado combina tecnología
                    pedagógica y diseño impactante para crear cursos que destacan en el competitivo mundo del aprendizaje
                    en línea.</p>
                </div>

                <div className="cta-button">
                  <a href="#services" className="btn">
                    <span>VER SERVICIOS</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-12" data-aos="zoom-out">
              <div className="visual-content">
                <div className="fluid-shape">
                  <div style={{ position: 'relative', paddingTop: '56.25%' }}><iframe
                    src="https://iframe.mediadelivery.net/embed/354319/33fc09af-d689-4669-8c79-82816f38f0a7?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                    loading="lazy" style={{
                      border: '0',
                      position: 'absolute',
                      top: '0',
                      height: '100%',
                      width: '100%'
                    }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                    title="Video ejemplo de 3D personajes"></iframe></div>
                </div>

                {/* <div className="stats-card">
                  <div className="stats-number">
                    <h2>100+</h2>
                  </div>
                  <div className="stats-label">
                    <p>Cursos Implementados</p>
                  </div>
                  <div className="stats-arrow">
                    <a href="#portafolio"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section">
        <div className="container">
        </div>
      </section>

 

    <section id="service-details" className="service-details section">

      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">

          <div className="col-lg-8 order-lg-1 order-2">
            <div className="service-main-content">
              <div className="service-header aos-init aos-animate" data-aos="fade-up">
                <h1>Digital Marketing Excellence</h1>
                <div className="service-meta">
                  <span><i className="bi bi-award"></i> Premium Service</span>
                  <span><i className="bi bi-clock"></i> Since 2015</span>
                  <span><i className="bi bi-star-fill"></i> 4.9/5 Rating</span>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo erat at malesuada bibendum. Nullam eu risus sit amet nunc fermentum lacinia.
                </p>
              </div>

              <div className="service-tabs aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <ul className="nav nav-tabs" id="serviceTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#service-details-tab-1" type="button" role="tab" aria-controls="overview" aria-selected="true">
                      <i className="bi bi-info-circle"></i> Overview
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#service-details-tab-2" type="button" role="tab" aria-controls="process" aria-selected="false" tabIndex="-1">
                      <i className="bi bi-diagram-3"></i> Process
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#service-details-tab-3" type="button" role="tab" aria-controls="benefits" aria-selected="false" tabIndex="-1">
                      <i className="bi bi-graph-up-arrow"></i> Benefits
                    </button>
                  </li>
                </ul>

                <div className="tab-content">

                  <div className="tab-pane fade active show" id="service-details-tab-1" role="tabpanel" aria-labelledby="overview-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="content-block">
                          <h3>Strategic Marketing Approach</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis erat nibh. Praesent a nibh at eros sodales finibus. Suspendisse potenti. Sed vitae sagittis nulla.</p>
                          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam consequat, nulla nec commodo finibus, ipsum magna pretium libero.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <img src="assets/img/services/services-7.webp" alt="Digital Marketing Strategy" className="img-fluid rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="service-details-tab-2" role="tabpanel" aria-labelledby="process-tab">
                    <div className="process-timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker">01</div>
                        <div className="timeline-content">
                          <h4>Discovery & Research</h4>
                          <p>Thorough market analysis and competitor research to define your target audience and marketing goals.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker">02</div>
                        <div className="timeline-content">
                          <h4>Strategy Development</h4>
                          <p>Creating comprehensive marketing strategies tailored to your specific business objectives and target demographics.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker">03</div>
                        <div className="timeline-content">
                          <h4>Implementation</h4>
                          <p>Executing the marketing plan across various channels with precise targeting and creative content delivery.</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker">04</div>
                        <div className="timeline-content">
                          <h4>Analysis & Optimization</h4>
                          <p>Continuous monitoring, data analysis, and strategy refinement to maximize ROI and campaign effectiveness.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="service-details-tab-3" role="tabpanel" aria-labelledby="benefits-tab">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="benefit-card">
                          <div className="benefit-icon">
                            <i className="bi bi-graph-up"></i>
                          </div>
                          <h4>Increased Brand Visibility</h4>
                          <p>Expand your digital footprint and reach more potential customers through targeted marketing efforts.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="benefit-card">
                          <div className="benefit-icon">
                            <i className="bi bi-people"></i>
                          </div>
                          <h4>Higher Engagement Rates</h4>
                          <p>Create meaningful connections with your audience through relevant and compelling content strategies.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="benefit-card">
                          <div className="benefit-icon">
                            <i className="bi bi-cash-coin"></i>
                          </div>
                          <h4>Improved ROI</h4>
                          <p>Maximize your marketing budget with data-driven campaigns that deliver measurable results.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="benefit-card">
                          <div className="benefit-icon">
                            <i className="bi bi-bar-chart-line"></i>
                          </div>
                          <h4>Data-Driven Decisions</h4>
                          <p>Make informed marketing choices based on comprehensive analytics and performance metrics.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-gallery aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <h3>Our Marketing Portfolio</h3>
                <div className="service-details-slider swiper init-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  {/* Swiper config moved to component initialization */}
                  <div className="swiper-wrapper" id="swiper-wrapper-f7858dc9f9b3a7d7" aria-live="off" style={{transitionDuration: '0ms', transform: 'translate3d(-383px, 0px, 0px)', transitionDelay: '0ms'}}>
                    
                    
                    
                  <div className="swiper-slide swiper-slide-prev" style={{width: '353px', marginRight: '30px'}} role="group" aria-label="2 / 3" data-swiper-slide-index="1">
                      <div className="portfolio-item">
                        <img src="assets/img/services/services-4.webp" alt="" className="img-fluid" loading="lazy" />
                        <div className="portfolio-info">
                          <h5>SEO Optimization</h5>
                          <p>Ranked #1 for target keywords</p>
                        </div>
                      </div>
                    </div><div className="swiper-slide swiper-slide-active" style={{width: '353px', marginRight: '30px'}} role="group" aria-label="3 / 3" data-swiper-slide-index="2">
                      <div className="portfolio-item">
                        <img src="assets/img/services/services-10.webp" alt="" className="img-fluid" loading="lazy" />
                        <div className="portfolio-info">
                          <h5>Content Marketing</h5>
                          <p>200% increase in organic traffic</p>
                        </div>
                      </div>
                    </div><div className="swiper-slide swiper-slide-next" style={{width: '353px', marginRight: '30px'}} role="group" aria-label="1 / 3" data-swiper-slide-index="0">
                      <div className="portfolio-item">
                        <img src="assets/img/services/services-2.webp" alt="" className="img-fluid" loading="lazy" />
                        <div className="portfolio-info">
                          <h5>Social Media Campaign</h5>
                          <p>Increased engagement by 187%</p>
                        </div>
                      </div>
                    </div></div>
                  <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 order-lg-2 order-1">
            <div className="service-sidebar aos-init aos-animate" data-aos="fade-left">
              <div className="action-card aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <h3>Ready to Boost Your Online Presence?</h3>
                <p>Get a free consultation with our digital marketing experts and discover how we can help grow your business.</p>
                <a href="#" className="btn-primary">Schedule Consultation</a>
                <span className="guarantee"><i className="bi bi-shield-check"></i> 100% Satisfaction Guarantee</span>
              </div>

              <div className="service-features-list aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <h4>What We Offer</h4>
                <ul>
                  <li>
                    <i className="bi bi-megaphone"></i>
                    <div>
                      <h5>Social Media Marketing</h5>
                      <p>Strategic presence across all relevant platforms</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-search"></i>
                    <div>
                      <h5>SEO Optimization</h5>
                      <p>Improve your search engine rankings</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-newspaper"></i>
                    <div>
                      <h5>Content Marketing</h5>
                      <p>Engaging content that converts visitors</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-envelope-paper"></i>
                    <div>
                      <h5>Email Campaigns</h5>
                      <p>Targeted email marketing strategies</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-graph-up-arrow"></i>
                    <div>
                      <h5>Analytics & Reporting</h5>
                      <p>Comprehensive performance tracking</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="testimonial-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="testimonial-header">
                  <i className="bi bi-quote"></i>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
                <p className="testimonial-text">
                  "Their digital marketing strategies transformed our online presence completely. We've seen a 300% increase in qualified leads within just 3 months."
                </p>
                <div className="client-info">
                  <img src="assets/img/person/person-m-5.webp" alt="Client" className="client-image" />
                  <div className="client-details">
                    <h5>Robert Johnson</h5>
                    <span>CEO, TechSolutions Inc.</span>
                  </div>
                </div>
              </div>

              <div className="contact-info aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <h4>Have Questions?</h4>
                <div className="contact-method">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <span>Call Us Now</span>
                    <p>+1 (803) 952-3845</p>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <span>Email Us</span>
                    <p>marketing@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    

      <section id="pricing" className="pricing section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Paquetes</h2>
          <div><span>Nuestros</span> <span className="description-title">Planes</span> 3D </div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* <!-- Basic Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-person-video3"></i>
                  </div>
                  <h3>Básico</h3>
                  <p>Para proyectos pequeños</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">3.2M</span>
                    <span className="period">/min</span>
                  </div>
                  <div className="price-total">Total: $3.200.000</div>
                </div>
                <div className="plan-features">
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> 1 minuto incluido</li>
                    <li><i className="bi bi-check-circle-fill"></i> 1 personaje 3D</li>
                    <li><i className="bi bi-check-circle-fill"></i> Edición básica en Blender</li>
                    <li><i className="bi bi-check-circle-fill"></i> Audio + musicalización</li>
                    <li><i className="bi bi-check-circle-fill"></i> Formato MP4</li>
                    <li><i className="bi bi-check-circle-fill"></i> 2 revisiones</li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">Contratar</a>
                </div>
              </div>
            </div>
            {/* <!-- End Basic Plan --> */}

            {/* <!-- Standard Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="250">
              <div className="pricing-card popular">
                <div className="popular-tag">Más Popular</div>
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3>Estándar</h3>
                  <p>Para cursos medianos</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">1.3M</span>
                    <span className="period">/min</span>
                  </div>
                  <div className="price-total">Total: $26.000.000</div>
                </div>
                <div className="plan-features">
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> 20 minutos incluidos</li>
                    <li><i className="bi bi-check-circle-fill"></i> 2 personajes 3D</li>
                    <li><i className="bi bi-check-circle-fill"></i> Edición básica en Blender</li>
                    <li><i className="bi bi-check-circle-fill"></i> Audio + musicalización</li>
                    <li><i className="bi bi-check-circle-fill"></i> Formato MP4</li>
                    <li><i className="bi bi-check-circle-fill"></i> 20 revisiones</li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">Contratar</a>
                </div>
              </div>
            </div>
            {/* <!-- End Standard Plan --> */}

            {/* <!-- Advanced Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-stars"></i>
                  </div>
                  <h3>Avanzado</h3>
                  <p>Para proyectos complejos</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">1.15M</span>
                    <span className="period">/min</span>
                  </div>
                  <div className="price-total">Total: $57.500.000</div>
                </div>
                <div className="plan-features">
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> 50 minutos incluidos</li>
                    <li><i className="bi bi-check-circle-fill"></i> 3 personajes 3D</li>
                    <li><i className="bi bi-check-circle-fill"></i> Edición media en Blender</li>
                    <li><i className="bi bi-check-circle-fill"></i> Audio + musicalización</li>
                    <li><i className="bi bi-check-circle-fill"></i> Formato MP4</li>
                    <li><i className="bi bi-check-circle-fill"></i> 50 revisiones</li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">Contratar</a>
                </div>
              </div>
            </div>
            {/* <!-- End Advanced Plan --> */}

            {/* <!-- Premium Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="350">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <h3>Premium</h3>
                  <p>Para instituciones educativas</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">1M</span>
                    <span className="period">/min</span>
                  </div>
                  <div className="price-total">Total: $100.000.000</div>
                </div>
                <div className="plan-features">
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> 100 minutos incluidos</li>
                    <li><i className="bi bi-check-circle-fill"></i> 3 personajes 3D</li>
                    <li><i className="bi bi-check-circle-fill"></i> Edición avanzada en Blender</li>
                    <li><i className="bi bi-check-circle-fill"></i> Audio + musicalización</li>
                    <li><i className="bi bi-check-circle-fill"></i> Formatos múltiples (MP4, FBX, OBJ)</li>
                    <li><i className="bi bi-check-circle-fill"></i> 100 revisiones</li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">Contratar</a>
                </div>
              </div>
            </div>
            {/* <!-- End Premium Plan --> */}
          </div>

          {/* <!-- Terms & Conditions --> */}
          <div className="terms-conditions mt-5 pt-4" data-aos="fade-up">
            <h4>Términos y Condiciones</h4>
            <ul>
              <li><strong>Plazos:</strong> 10 días por minuto en versión Básica</li>
              <li><strong>Revisiones:</strong> 2 revisiones por minuto incluidas (adicionales $200.000 c/u)</li>
              <li><strong>Pago:</strong> Cuenta corriente 21004202069 - Lúmina Interactiva SAS</li>
              <li><strong>Derechos:</strong> El cliente tiene derechos completos sobre los videos finales</li>
              <li>Precios sujetos a cambios según complejidad del proyecto</li>
            </ul>
            <div className="text-center mt-4">
              <a href="#contact" className="btn btn-outline-primary">¿Preguntas? Contáctanos</a>
            </div>
          </div>
        </div>
      </section>
    </div>









  );
};

export default Personajes3DPage;

