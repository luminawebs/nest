import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Personajes3DPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure the component is fully rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]); // Listen for hash changes


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

                {/* <div className="cta-button">
                  <a href="#services" className="btn">
                    <span>VER SERVICIOS</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div> */}
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
                  <h1>Animación 3D que Cautiva a tu Audiencia</h1>
                  <div className="service-meta">
                    <span><i className="bi bi-award"></i> Solución Asequible</span>
                    <span><i className="bi bi-clock"></i> Entrega en 3-4 Semanas</span>
                    <span><i className="bi bi-star-fill"></i> Alta Retención de Audiencia</span>
                  </div>
                  <p className="lead">
                    Impresiona a tus usuarios con personajes 3D animados que elevan la calidad de tus contenidos educativos y corporativos sin gastar una fortuna.
                  </p>
                </div>

                <div className="service-tabs aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <ul className="nav nav-tabs" id="serviceTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#service-details-tab-1" type="button" role="tab" aria-controls="overview" aria-selected="true">
                        <i className="bi bi-info-circle"></i> ¿Por Qué 3D?
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#service-details-tab-2" type="button" role="tab" aria-controls="process" aria-selected="false">
                        <i className="bi bi-diagram-3"></i> Paso a Paso
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#service-details-tab-3" type="button" role="tab" aria-controls="benefits" aria-selected="false">
                        <i className="bi bi-graph-up-arrow"></i> Beneficios
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content">

                    <div className="tab-pane fade active show" id="service-details-tab-1" role="tabpanel">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="content-block">
                            <h3>Impacto del Contenido Animado</h3>
                            <p>📈 Los videos con personajes animados 3D tienen un 30% más de retención que los formatos tradicionales (2D o live-action).</p>
                            <p>💬 El 70% de los marketers considera el 3D la herramienta más efectiva para engagement, según HubSpot.</p>
                            <p>🛒 Las campañas con animación 3D aumentan las tasas de conversión un 40% en e-commerce.</p>
                            <p>🧠 El 90% de los consumidores recuerda mejor una marca con contenido audiovisual animado frente a solo texto.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img src="assets/img/services/3d_assistants.png" alt="Ventajas del contenido animado" className="img-fluid rounded" />
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="service-details-tab-2" role="tabpanel">
                      <div className="process-timeline">
                        <div className="timeline-item">
                          <div className="timeline-marker">01</div>
                          <div className="timeline-content">
                            <h4>Elección del Personaje</h4>
                            <p>Selecciona entre una galería de personajes 3D prediseñados o solicita uno personalizado según tu marca.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker">02</div>
                          <div className="timeline-content">
                            <h4>Desarrollo de Guión</h4>
                            <p>Te ayudamos a redactar un guión claro y didáctico para maximizar la conexión con la audiencia.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker">03</div>
                          <div className="timeline-content">
                            <h4>Grabación de Voz</h4>
                            <p>Locución profesional grabada en estudio o de forma remota con tu voz preferida.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker">04</div>
                          <div className="timeline-content">
                            <h4>Animación y Render</h4>
                            <p>Animamos tu personaje con movimiento facial, corporal y expresión emocional. Luego lo renderizamos con calidad HD.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <div className="timeline-marker">05</div>
                          <div className="timeline-content">
                            <h4>Motion Graphics + Entrega</h4>
                            <p>Agregamos transiciones, música y subtítulos. Entregamos en múltiples formatos para plataformas, LMS o redes.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="service-details-tab-3" role="tabpanel">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="benefit-card">
                            <div className="benefit-icon">
                              <i className="bi bi-eye"></i>
                            </div>
                            <h4>Mayor Retención</h4>
                            <p>Tu audiencia recuerda más y se compromete mejor con personajes animados realistas.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-card">
                            <div className="benefit-icon">
                              <i className="bi bi-cash-coin"></i>
                            </div>
                            <h4>Accesible para Todos</h4>
                            <p>Producción profesional sin presupuestos excesivos. Ideal para empresas educativas y comerciales.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-card">
                            <div className="benefit-icon">
                              <i className="bi bi-lightning-charge"></i>
                            </div>
                            <h4>Producción Ágil</h4>
                            <p>Todo el proceso en solo 3 a 4 semanas. Con avances iterativos y entregas rápidas.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="benefit-card">
                            <div className="benefit-icon">
                              <i className="bi bi-bar-chart-line"></i>
                            </div>
                            <h4>Resultados Medibles</h4>
                            <p>Mejora en conversiones, leads y recordación de marca garantizados con estadísticas reales.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="service-gallery aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <h3>Ejemplos de Animación 3D</h3>
                  <div className="service-details-slider swiper init-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="portfolio-item">
                          <div style={{ position: "relative", paddingTop: "56.25%" }}>
                            <iframe
                              src="https://iframe.mediadelivery.net/embed/183081/1323c7e2-7340-4126-9268-63bd3a247164?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                              loading="lazy"
                              style={{
                                border: 0,
                                position: "absolute",
                                top: 0,
                                height: "100%",
                                width: "100%",
                              }}
                              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>



                          <div className="portfolio-info">
                            <h5>Asistente Virtual Educativo</h5>
                            <p>Transforma PDFs en contenido animado</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="swiper-slide">
                        <div className="portfolio-item">
                          <img src="assets/img/services/services-10.webp" alt="Demo 2" className="img-fluid" loading="lazy" />
                          <div className="portfolio-info">
                            <h5>Personaje 3D Interactivo</h5>
                            <p>Guías dinámicas para plataformas LMS</p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="portfolio-item">
                          <img src="assets/img/services/services-2.webp" alt="Demo 3" className="img-fluid" loading="lazy" />
                          <div className="portfolio-info">
                            <h5>Campaña Corporativa</h5>
                            <p>Mensaje institucional con animación facial</p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="swiper-pagination"></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 order-lg-2 order-1">
              <div className="service-sidebar aos-init aos-animate" data-aos="fade-left">

                <div className="action-card aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <h3>¿Listo para Impresionar con 3D?</h3>
                  <p>Solicita una animación personalizada para tu curso, empresa o presentación. Producción rápida, profesional y accesible.</p>

                  <a
                    href="https://wa.me/573103339208?text=Hola,%20quiero%20saber%20más%20sobre%20los%20asistentes%203D"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer">
                    Solicita Cotización
                  </a>

                  <span className="guarantee"><i className="bi bi-shield-check"></i> 100 % Entrega Garantizada</span>
                </div>

                <div className="service-features-list aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <h4>¿Qué Incluye?</h4>
                  <ul>
                    <li>
                      <i className="bi bi-person-bounding-box"></i>
                      <div>
                        <h5>Personajes 3D</h5>
                        <p>Prediseñados o personalizados con branding institucional</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-mic-fill"></i>
                      <div>
                        <h5>Guión + Locución</h5>
                        <p>Apoyo en redacción y voz profesional</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-film"></i>
                      <div>
                        <h5>Render + Motion</h5>
                        <p>Animación + edición con subtítulos y música</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-tv"></i>
                      <div>
                        <h5>Entrega Multiformato</h5>
                        <p>Video final listo para LMS, YouTube o eventos</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-clock-history"></i>
                      <div>
                        <h5>Producción Rápida</h5>
                        <p>Entrega en 3 a 4 semanas</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <div className="testimonial-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
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
                    “El asistente 3D transformó por completo nuestra inducción virtual. Fue como tener un presentador real, pero automatizado y listo para todos los empleados.”
                  </p>
                  <div className="client-info">
                    <img src="assets/img/person/person-m-5.webp" alt="Cliente" className="client-image" />
                    <div className="client-details">
                      <h5>María González</h5>
                      <span>RRHH, Grupo Monteazul</span>
                    </div>
                  </div>
                </div> */}

                <div className="contact-info aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                  <h4>¿Tienes Preguntas?</h4>
                  <div className="contact-method">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <span>Llámanos</span>
                      <p>+57 310 333 9208</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <i className="bi bi-envelope-fill"></i>
                    <div>
                      <span>Escríbenos</span>
                      <p>luminawebs@gmail.com</p>
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

