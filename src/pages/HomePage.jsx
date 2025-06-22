import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { 
  trackButtonClick, 
  trackServiceInquiry, 
  trackLinkClick,
  trackContactClick,
  trackFormSubmission 
} from '../utils/analytics';
import ImpactoDemostrado from '../components/ImpactoDemostrado';
import FAQSection from '../components/FAQSection';


const HomePage = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 content-col" data-aos="fade-up">
              <div className="content">
                <div className="agency-name">
                  <h5>{t('hero.agency')}</h5>
                </div>

                <div className="main-heading">
                  <h1>{t('hero.mainHeading')}</h1>
                </div>

                <div className="divider"></div>

                <div className="description">
                  <p>{t('hero.description')}</p>
                </div>

                <div className="cta-button">
                  <a
                    href="#services"
                    className="btn"
                    onClick={() => trackButtonClick('Hero CTA - Ver Servicios', 'Hero')}
                  >
                    <span>{t('hero.ctaButton')}</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="zoom-out">
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

                <div className="stats-card">
                  <div className="stats-number">
                    <h2>100+</h2>
                  </div>
                  <div className="stats-label">
                    <p>{t('hero.statsLabel')}</p>
                  </div>
                  <div className="stats-arrow">
                    <a href="#portafolio"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('about.title')}</h2>
          <div>
            <span>{t('about.subtitle')} </span>
            <span className="description-title">{t('about.subtitleHighlight')}</span>
          </div>
        </div>

        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="about-image position-relative">
                <img src="assets/img/courses.png" className="img-fluid rounded-4 shadow-sm" alt="Equipo de eLearning"
                  loading="lazy" />
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">{t('about.yearsExperience')}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <h2>{t('about.mainTitle')}</h2>
                <p className="lead">{t('about.leadText')}</p>
                <p>{t('about.description')}</p>

                <div className="row g-4 mt-3">
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="feature-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <h5>{t('about.integralSupport')}</h5>
                      <p>{t('about.integralSupportDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                    <div className="feature-item">
                      <i className="bi bi-lightbulb-fill"></i>
                      <h5>{t('about.pedagogicalTech')}</h5>
                      <p>{t('about.pedagogicalTechDesc')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#services"
                  className="btn btn-primary mt-4"
                  onClick={() => trackButtonClick('About CTA - Conoce Nuestras Soluciones', 'About')}
                >
                  {t('about.ctaButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('services.title')}</h2>
          <div>
            <span>{t('services.subtitle')}</span>
            <span className="description-title">{t('services.subtitleHighlight')}</span>
          </div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="service-header">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="service-intro">
                  <h2 className="service-heading">
                    <div>{t('services.mainHeading')}</div>
                    <div><span>{t('services.mainHeadingHighlight')}</span></div>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-summary">
                  <p>
                    {t('services.summary')}
                  </p>
                  <a href="#services" className="service-btn">
                    {t('services.viewAllSolutions')}
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* <!-- Service 1: Articulate Content --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    Cursos en <span>Articulate 360</span>
                  </a>
                </h3>
                <p>
                  Contenido interactivo y responsive diseñado pedagógicamente con Storyline y Rise. Incluye evaluaciones,
                  simulaciones y compatibilidad SCORM para tu LMS.
                </p>
              </div>
            </div>

            {/* <!-- Service 2: HTML5 Multimedia --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    Contenido <span>HTML5</span>
                  </a>
                </h3>
                <p>
                  Módulos multimedia con animaciones, gamificación y actividades interactivas compatibles con cualquier
                  dispositivo móvil o computadora.
                </p>
              </div>
            </div>

            {/* <!-- Service 3: 3D Characters --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-person-video3"></i>
                </div>

                <Link to="/personajes3d#hero" className="card-action d-flex align-items-center justify-content-center rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                <h3>
                  <Link to="/personajes3d#hero" className="active">Avatars 3D</Link>
                </h3>
                <p>
                  Avatares virtuales económicos que guían a los estudiantes, explican conceptos complejos y hacen el
                  aprendizaje más cercano y memorable.
                </p>
              </div>
            </div>

            {/* <!-- Service 4: Rapid Course Platform --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    Plataforma <span>Express</span>
                  </a>
                </h3>
                <p>
                  Sistema para crear cursos universitarios en semanas, no meses. Sube tus PDFs, videos y contenido
                  existente - nosotros lo convertimos en un curso profesional.
                </p>
              </div>
            </div>

            {/* <!-- Service 5: Video Production --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-camera-reels"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    Producción <span>de Video</span>
                  </a>
                </h3>
                <p>
                  Videos educativos profesionales con animaciones, capturas de pantalla y locuciones. Ideal para explicar
                  procesos complejos de manera visual.
                </p>
              </div>
            </div>

            {/* <!-- Service 6: LMS Integration --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-puzzle"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    Integración <span>LMS</span>
                  </a>
                </h3>
                <p>
                  Conectamos tus cursos con Moodle, Blackboard, Canvas y otros sistemas. Reportes de progreso automáticos
                  y certificación SCORM/xAPI.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>









      <section id="steps" className="steps section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Proceso</h2>
          <div><span>Nuestro método</span> <span className="description-title">de trabajo</span></div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="steps-wrapper">
            {/* <!-- Step 1 --> */}
            <div className="step-item" data-aos="fade-right" data-aos-delay="200">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-mortarboard"></i>
                  {/* <!-- Education-focused icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">Paso 01</span>
                  <h3>Diagnóstico Educativo</h3>
                  <p>Analizamos tus objetivos de aprendizaje, público objetivo y contenido existente para recomendar la
                    mejor combinación de herramientas (Articulate, HTML5, 3D o plataforma express).</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 2 --> */}
            <div className="step-item" data-aos="fade-left" data-aos-delay="300">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-kanban"></i>
                  {/* <!-- Planning icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">Paso 02</span>
                  <h3>Diseño Instruccional</h3>
                  <p>Creamos la estructura pedagógica: guiones para tus videos, flujos de interacción, actividades
                    evaluativas y la personalización de tu personaje 3D si aplica.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 3 --> */}
            <div className="step-item" data-aos="fade-right" data-aos-delay="400">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-code-slash"></i>
                  {/* <!-- Development icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">Paso 03</span>
                  <h3>Producción Ágil</h3>
                  <p>Desarrollamos tu curso en 2-4 semanas: grabamos videos, programamos interacciones HTML5, configuramos
                    la plataforma y te entregamos avances semanales para revisión.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 4 --> */}
            <div className="step-item" data-aos="fade-left" data-aos-delay="500">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                  {/* <!-- Results icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">Paso 04</span>
                  <h3>Implementación con Métricas</h3>
                  <p>Publicamos tu curso en tu LMS o nuestra plataforma, con reportes automáticos de progreso estudiantil
                    y soporte continuo para actualizaciones.</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- /Steps Section --> */}

      {/* <!-- Call To Action Section --> */}
      <section id="call-to-action" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

            {/* <!-- Left Content --> */}
            <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
              <span className="badge text-uppercase mb-2">¡Oferta especial!</span>
              <h2>Transforma tu educación digital en semanas, no meses</h2>
              <p className="my-4">Lúmina Interactiva ayuda a universidades a crear cursos profesionales con nuestra plataforma
                express, personajes 3D y contenido interactivo. Únete a las 50+ instituciones que ya modernizaron su
                enseñanza.</p>

              <div className="features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Cursos listos en 15 días</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Integración con tu LMS</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Soporte pedagógico 24/7</span>
                </div>
              </div>

              <div className="cta-buttons d-flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => trackButtonClick('CTA - Solicitar demostración', 'Call to Action')}
                >
                  Solicitar demostración
                </a>
                <a
                  href="#services"
                  className="btn btn-outline"
                  onClick={() => trackButtonClick('CTA - Ver casos de éxito', 'Call to Action')}
                >
                  Ver casos de éxito
                </a>
              </div>
            </div>

            {/* <!-- Right Content --> */}
            <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
              <img src="assets/img/misc/plataforma-elearning.webp" alt="Plataforma de eLearning"
                className="img-fluid rounded-4" />
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="card-content">
                  <span className="stats-number">95%</span>
                  <span className="stats-text">Satisfacción estudiantil</span>
                </div>
              </div>
            </div>

            {/* <!-- Decorative Elements --> */}
            <div className="decoration">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
      </section>
      <ImpactoDemostrado />
      {/* <!-- Faq Section --> */}
      <FAQSection />
      {/* <!-- /Faq Section --> */}
<section id="contact" className="contact section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contacto</h2>
            <div><span>Vamos a</span> <span className="description-title">Conectarnos</span></div>
          </div>
          {/* <!-- End Section Title --> */}


          <div className="container" data-aos="fade-up" data-aos-delay="100">

            {/* <!-- Contact Info Boxes --> */}
            <div className="row gy-4 mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Nuestra dirección</h4>
                    <p>Cll 18 # 9 39</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>
                      <a
                        href="mailto:luminawebs@gmail.com"
                        onClick={() => trackContactClick('Email', 'luminawebs@gmail.com')}
                      >
                        luminawebs@gmail.com
                      </a>
                    </p>
                    <p>David Castañeda</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-info-box">
                  <div className="icon-box">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="info-content">
                    <h4>Horario</h4>
                    <p>Lunes-Viernes: 9 AM - 6 PM</p>
                    <p>Sábado: 9 AM - 12 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Google Maps (Full Width) --> */}
          <div className="map-section" data-aos="fade-up" data-aos-delay="200">
            {/* <!-- <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe> --> */}
          </div>

          {/* <!-- Contact Form Section (Overlapping) --> */}
          <div className="container form-container-overlap">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
              <div className="col-lg-10">
                <div className="contact-form-wrapper">
                  <h2 className="text-center mb-4">Ponte en Contacto</h2>

                  <form
                    action="https://formspree.io/f/mblovblv"
                    method="POST"
                    className="php-email-form"
                    onSubmit={() => trackFormSubmission('Contact Form', 'main_contact')}
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-person"></i>
                            <input type="text" className="form-control" name="name" placeholder="Nombre" required />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-envelope"></i>
                            <input type="email" className="form-control" name="email" placeholder="Correo electrónico"
                              required />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-text-left"></i>
                            <input type="text" className="form-control" name="subject" placeholder="Asunto" required />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <div className="input-with-icon">
                            <i className="bi bi-chat-dots message-icon"></i>
                            <textarea className="form-control" name="message" placeholder="Escribe tu mensaje..."
                              style={{ height: '180px' }} required></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="loading">Cargando</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Tu mensaje ha sido enviado. ¡Gracias!</div>
                      </div>

                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-submit">ENVIAR MENSAJE</button>
                      </div>
                    </div>
                  </form>


                </div>
              </div>
            </div>
          </div>


        </section>

      {/* Rest of sections... */}
    </main>
  );
};

export default HomePage;

