// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import Personajes3DPage from './pages/Personajes3DPage';
// import ScrollComponent from "./components/ScrollComponent";

function App() {


  // Remove preloader when component mounts
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Add a small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }
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

            <a className="btn-getstarted" href="#contact">Contacto</a>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes3d" element={<Personajes3DPage />} />
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
                      <button className="slider-prev"><i className="bi bi-arrow-left"></i></button>
                      <button className="slider-next"><i className="bi bi-arrow-right"></i></button>
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
                            <li><i className="bi bi-check-circle"></i> Asistente virtual 3D que guía el aprendizaje durante todo
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
        <section id="services" className="services section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Soluciones</h2>
            <div>
              <span>Descubre nuestras</span>
              <span className="description-title">herramientas educativas</span>
            </div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="service-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="service-intro">
                    <h2 className="service-heading">
                      <div>Transformación educativa</div>
                      <div><span>con tecnología innovadora</span></div>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="service-summary">
                    <p>
                      Combinamos diseño pedagógico, herramientas interactivas (como personajes 3D y plataformas ágiles)
                      y contenido multimedia para crear experiencias de aprendizaje que cautivan a los estudiantes
                      y simplifican la gestión académica.
                    </p>
                    <a href="#services" className="service-btn">
                      Ver todas las soluciones
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
                  <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="#navmenu">
                      Asistentes <span>3D</span>
                    </a>
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
        {/* <!-- /Services Section --> */}

        {/* <!-- Steps Section --> */}
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
                  <a href="#contact" className="btn btn-primary">Solicitar demostración</a>
                  <a href="#services" className="btn btn-outline">Ver casos de éxito</a>
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

        {/* <!-- Testimonials Section --> */}



        {/* <!-- /Team Section --> */}


        {/* <!-- Faq Section --> */}
        <section className="faq-9 faq section" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-up">
                <h2 className="faq-title">¿Preguntas frecuentes?</h2>
                <p className="faq-description">Encuentra respuestas sobre nuestros servicios de personajes 3D, desarrollo de
                  cursos y plataforma educativa.</p>
                <div className="faq-arrow d-none d-lg-block" data-aos="fade-up" data-aos-delay="200">
                  <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                <div className="faq-container">

                  <div className="faq-item faq-active">
                    <h3>¿Qué incluye el servicio de personajes 3D?</h3>
                    <div className="faq-content">
                      <p>Nuestros paquetes incluyen: diseño del personaje, animaciones básicas (gestos y movimientos),
                        integración con tu contenido educativo, y formatos listos para usar en tu plataforma (MP4, FBX o
                        OBJ). Los paquetes premium incluyen más animaciones y personalización avanzada.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div className="faq-item">
                    <h3>¿Cuánto tiempo toma desarrollar un curso completo?</h3>
                    <div className="faq-content">
                      <p>Con nuestra plataforma express: 2-4 semanas para cursos estándar. Los tiempos varían según:
                        cantidad de contenido, integraciones requeridas con LMS, y complejidad de las interacciones.
                        Ofrecemos entregas parciales semanales para tu revisión.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div className="faq-item">
                    <h3>¿Pueden integrar el contenido con nuestro LMS existente?</h3>
                    <div className="faq-content">
                      <p>Sí, trabajamos con Moodle, Blackboard, Canvas y otros sistemas. Nuestros contenidos son compatibles
                        con estándares SCORM y xAPI. Solo necesitamos acceso de desarrollador a tu LMS para configurar la
                        integración.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div className="faq-item">
                    <h3>¿Qué pasa si necesito cambios después de la entrega?</h3>
                    <div className="faq-content">
                      <p>Cada paquete incluye revisiones (2 por minuto en el plan básico). Revisiones adicionales tienen un
                        costo de $200.000 COP c/u. Para proyectos grandes recomendamos el plan premium que incluye 100
                        revisiones.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div className="faq-item">
                    <h3>¿Cómo funciona el pago y qué garantías ofrecen?</h3>
                    <div className="faq-content">
                      <p>Requerimos el 50% para iniciar y 50% al finalizar. Trabajamos con contratos que especifican plazos,
                        entregables y derechos de autor (que serán 100% tuyos al finalizar el pago). Facturamos por Lúmina
                        Interactiva SAS (NIT 900713256-1).</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                  <div className="faq-item">
                    <h3>¿Ofrecen capacitación para usar la plataforma?</h3>
                    <div className="faq-content">
                      <p>Sí, incluimos: 1) Sesión inicial de onboarding (2 horas), 2) Manuales técnicos y pedagógicos, 3)
                        Soporte prioritario por 30 días, y 4) Videos tutoriales. Para equipos grandes ofrecemos talleres
                        presenciales adicionales.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* <!-- End Faq item--> */}

                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <p>luminawebs@gmail.com</p>
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

                  <form action="https://formspree.io/f/mblovblv" method="POST" className="php-email-form">
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

        <footer id="footer" className="footer">

          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-about">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename"><img src="assets/img/edunest-dark.svg" alt="" /></span>
                </a>
                <p>Descubre estrategias innovadoras para la educación digital. Transformamos contenidos en experiencias
                  interactivas que cautivan a los estudiantes. Nuestro equipo especializado combina tecnología
                  pedagógica y diseño impactante para crear cursos que destacan en el competitivo mundo del aprendizaje
                  en línea.</p>
                <div className="social-links d-flex mt-4">
                  {/* <!-- <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a> --> */}
                  <a href="https://www.linkedin.com/company/l%C3%BAmina-interactiva/" target="_blank" rel="noreferrer"><i
                    className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Links</h4>
                <ul>
                  <li><a href="#hero" className="active">Home</a></li>
                  <li><a href="#about">Nosotros</a></li>
                  <li><a href="#services">Soluciones</a></li>
                  <li><a href="#pricing">Planes</a></li>
                  <li><a href="#contact">Contacto</a></li>
                </ul>
              </div>

              {/* <!-- <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div> --> */}

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contacto</h4>
                <p>Cll 18 # 9 39</p>
                <p>Bogotá</p>
                <p>Colombia</p>
                <p className="mt-4"><strong>Teléfono:</strong> <span>+57 310 3339208</span></p>
                <p><strong>Email:</strong> <span>luminawebs@gmail.com</span></p>
              </div>

            </div>
          </div>

          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Lúmina Interactiva - Edunest.co</strong> <span>All
              Rights Reserved</span></p>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you've purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> --> */}
            </div>
          </div>

        </footer>

        {/* <!-- Scroll Top --> */}
        <a href="#header" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
          className="bi bi-arrow-up-short"></i></a>

        {/* <!-- Preloader --> */}
        <div id="preloader"></div>

      </div>
    </Router>
  );
}

export default App;
