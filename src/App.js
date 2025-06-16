// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Personajes3DPage from './pages/Personajes3DPage';
import LMSPricing from './pages/LMSPricing';
import FAQSection from './components/FAQSection';
import PageTracker from './components/PageTracker';
import useScrollTracking from './hooks/useScrollTracking';
import { initializeAutoTracking } from './utils/autoTracking';
import { trackButtonClick, trackContactClick, trackFormSubmission, trackPageView, trackSliderInteraction, trackContactSectionView } from './utils/analytics';
// import ScrollComponent from "./components/ScrollComponent";

function App() {
  // Initialize scroll tracking
  useScrollTracking();

  // Remove preloader when component mounts and initialize tracking
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Add a small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }

    // Initialize automatic tracking for elements without React handlers
    initializeAutoTracking();
  }, []);


  return (
    <Router>
      <div className="App">
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div
            className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">

              <h1 className="sitename"><img src="assets/img/edunest-dark.svg" alt="" width="180" style={{ marginTop: "4px" }} /></h1>
            </a>

            <Menu />

            <a 
              className="btn-getstarted" 
              href="#contact"
              onClick={() => trackButtonClick('Header Contact Button', 'Navigation')}
            >
              Contacto
            </a>

          </div>
        </header>

        <PageTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes3d" element={<Personajes3DPage />} />
          <Route path="/lmspricing" element={<LMSPricing />} />
        </Routes>


    
        <section id="about" className="about section">


         

          <div className="container">

         

            <div className="testimonial-section mt-5 pt-5" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="testimonial-intro">
                    <h3>Impacto Demostrado</h3>
                    <p>Descubre cómo nuestras soluciones han transformado la educación en instituciones como la tuya.</p>
                    <div className="swiper-nav-buttons mt-4">
                      <button 
                        className="slider-prev"
                        onClick={() => trackSliderInteraction('previous')}
                      >
                        <i className="bi bi-arrow-left"></i>
                      </button>
                      <button 
                        className="slider-next"
                        onClick={() => trackSliderInteraction('next')}
                      >
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
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
                        <div className="testimonial-item">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '30px' }}>

                            <img src="assets/img/Logo_del_Politecnico_Grancolombiano.svg" alt="" width="200px" />
                            <h3>Sistema Integral de Inducción para el Politécnico Grancolombiano</h3>
                          </div>
                          <p><strong>Desafío:</strong> Implementar un curso masivo de inducción con seguimiento en tiempo
                            real del progreso de miles de estudiantes.</p>

                          <p><strong>Solución Innovadora:</strong></p>
                          <ul className="case-study-features" style={{ listStyle: "none" }}>
                            <li><i className="bi bi-check-circle"></i> Plataforma personalizada con integración directa a
                              contenido Articulate 360</li>
                            <li><i className="bi bi-check-circle"></i> Avatar virtual 3D que guía el aprendizaje durante todo
                              el curso</li>
                            <li><i className="bi bi-check-circle"></i> Sistema de seguimiento automatizado con:</li>
                            <ul>
                              <li>Visualización de progreso por porcentaje</li>
                              <li>Descarga de reportes para administradores</li>
                            </ul>
                            <li><i className="bi bi-check-circle"></i> Actividades interactivas para mayor engagement</li>
                          </ul>

                          <p><strong>Resultados Clave:</strong></p>
                          <div className="results-grid">
                            <div className="result-item">
                              <span className="result-number">95%</span>
                              <span className="result-label">Satisfacción estudiantil</span>
                            </div>
                            <div className="result-item">
                              <span className="result-number">100%</span>
                              <span className="result-label">Cobertura de inducción</span>
                            </div>
                            <div className="result-item">
                              <span className="result-number">2x</span>
                              <span className="result-label">Más rápido que métodos tradicionales</span>
                            </div>
                          </div>
                        </div>
                      </div>

                     



                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        {/* <!-- /About Section --> */}

        {/* <!-- Services Section --> */}
        
        {/* <!-- /Services Section --> */}

        {/* <!-- Steps Section --> */}
        
        {/* <!-- Testimonials Section --> */}



        {/* <!-- /Team Section --> */}


        {/* <!-- Faq Section --> */}
        <FAQSection />
        {/* <!-- /Faq Section --> */}

        {/* <!-- Contact Section --> */}
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
        {/* <!-- /Contact Section --> */}

        

        <Footer></Footer>

        {/* <!-- Scroll Top --> */}
        <a 
          href="#header" 
          id="scroll-top" 
          className="scroll-top d-flex align-items-center justify-content-center"
          onClick={() => trackButtonClick('Scroll to Top', 'Navigation')}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* <!-- Preloader --> */}
        <div id="preloader"></div>

      </div>
    </Router>
  );
}

export default App;
