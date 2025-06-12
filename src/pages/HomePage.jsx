import React from 'react';

const HomePage = () => {
  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 content-col" data-aos="fade-up">
              <div className="content">
                <div className="agency-name">
                  <h5>LÚMINA INTERACTIVA</h5>
                </div>

                <div className="main-heading">
                  <h1>SOLUCIONES DE <br />ELEARNING</h1>
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
                    <p>Cursos Implementados</p>
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
          <h2>Nosotros</h2>
          <div>
            <span>Conoce más</span>
            <span className="description-title">sobre nuestra misión</span>
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
                  <span className="text">Años en Educación Digital</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <h2>Transformamos la Educación con Tecnología Innovadora</h2>
                <p className="lead">Diseñamos soluciones de eLearning personalizadas que simplifican la creación de cursos y
                  mejoran la experiencia de aprendizaje.</p>
                <p>Combinamos pedagogía, diseño interactivo y tecnología avanzada para ayudar a universidades y educadores
                  a destacar en la era digital.</p>

                <div className="row g-4 mt-3">
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="feature-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <h5>Soporte Integral</h5>
                      <p>Nuestro equipo especializado acompaña cada etapa, desde el diseño hasta la implementación de tus
                        cursos.</p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                    <div className="feature-item">
                      <i className="bi bi-lightbulb-fill"></i>
                      <h5>Tecnología Pedagógica</h5>
                      <p>Utilizamos herramientas innovadoras (como personajes 3D y plataformas ágiles) para maximizar el
                        engagement estudiantil.</p>
                    </div>
                  </div>
                </div>

                <a href="#services" className="btn btn-primary mt-4">Conoce Nuestras Soluciones</a>
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

