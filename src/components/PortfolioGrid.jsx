import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { trackLinkClick } from '../utils/analytics';

const PortfolioGrid = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('courses-section');

  // Smooth scroll to section
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      setActiveSection(sectionId);
      trackLinkClick(`Portfolio Navigation - ${sectionId}`, 'Courses');
    }
  };

  // Portfolio content configuration
  const portfolioContent = [
    {
      id: 'covinoc',
      title: 'COVINOC',
      image: '/assets/img/portfolio/courses/covinoc.jpg',
      content: '/assets/portfolio/video/COVINOC-VIDEO.mp4',
      type: 'video',
      description: 'Video corporativo COVINOC'
    },
    {
      id: 'covinoc-pdf',
      title: 'COVINOC - Documento',
      image: '/assets/img/portfolio/courses/pdf-covinoc.jpg',
      content: '/assets/portfolio/pdf/pdf-generalidades-compensaciones-laborales.pdf',
      type: 'pdf',
      description: 'Generalidades de compensaciones laborales'
    },
    {
      id: 'dnp',
      title: 'DNP',
      image: '/assets/img/portfolio/courses/vid-sanitas.jpg',
      content: '/assets/portfolio/video/DNP-VIDEO.mp4',
      type: 'video',
      description: 'Video DNP'
    },
    {
      id: 'transmilenio',
      title: 'TransMilenio',
      image: '/assets/img/portfolio/courses/pdf-transmi.jpg',
      content: '/assets/portfolio/pdf/pdf-transmilenio.pdf',
      type: 'pdf',
      description: 'Documento TransMilenio'
    },
    {
      id: 'fondo-empleados',
      title: 'Fondo de Empleados',
      image: '/assets/img/portfolio/courses/fng.jpg',
      content: '/assets/portfolio/pdf/pdf-generalidades-fondo-de-empleados.pdf',
      type: 'pdf',
      description: 'Generalidades del fondo de empleados'
    },
    {
      id: 'control-interno',
      title: 'Sistema de Control Interno',
      image: '/assets/img/portfolio/courses/politecnico.jpg',
      content: '/assets/portfolio/pdf/pdf-sistema-de-control-interno.pdf',
      type: 'pdf',
      description: 'Sistema de control interno'
    },
    {
      id: 'ciberseguridad',
      title: 'Ciberseguridad',
      image: '/assets/img/portfolio/courses/ciberseguridad.jpg',
      content: '/assets/portfolio/html5/escom-html5/escom-html5/index.html',
      type: 'course',
      description: 'Curso de Ciberseguridad'
    },
    {
      id: 'contrasenas',
      title: 'Contraseñas Seguras',
      image: '/assets/img/portfolio/courses/contrasenas.jpg',
      content: '/assets/portfolio/html5/escom-html5/escom2-html5-actividad/index.html',
      type: 'course',
      description: 'Curso sobre contraseñas seguras'
    },
    {
      id: 'emprender',
      title: 'Emprendimiento',
      image: '/assets/img/portfolio/courses/emprender.jpg',
      content: '/assets/portfolio/html5/escom-html5/emprendimiento-html5-actividad/index.html',
      type: 'course',
      description: 'Curso de emprendimiento'
    },
    {
      id: 'caninos-felinos',
      title: 'Caninos y Felinos',
      image: '/assets/img/portfolio/courses/caninos-felinos.jpg',
      content: '/assets/portfolio/articulate/lasalle-mascotas/02 exportado/NEFE_RED3_OVA - Storyline output/story_html5.html',
      type: 'course',
      description: 'Curso sobre caninos y felinos'
    },
    {
      id: 'bcs-soporte',
      title: 'BCS Soporte Operativo',
      image: '/assets/img/portfolio/courses/bcs-soporte-operativo.jpg',
      content: '/assets/portfolio/articulate/BCS/BCS-Soporte-Operativo - Storyline output/story_html5.html',
      type: 'course',
      description: 'Soporte operativo BCS'
    },
    {
      id: 'sanitas',
      title: 'Sanitas',
      image: '/assets/img/portfolio/courses/sanitas.jpg',
      content: '/assets/portfolio/html5/escom-html5/unisanitas-html5/bienvenida.html',
      type: 'course',
      description: 'Proyecto Sanitas'
    },
    {
      id: 'unisanitas',
      title: 'UniSanitas',
      image: '/assets/img/portfolio/courses/unisanitas.jpg',
      content: '/assets/portfolio/articulate/unisanitas-MCBF/story_html5.html',
      type: 'course',
      description: 'Proyecto UniSanitas'
    }
  ];

  const handleContentClick = (item) => {
    trackLinkClick(`Portfolio Content - ${item.title}`, 'Courses');
    
    if (item.type === 'video' || item.type === 'pdf' || item.type === 'course') {
      // Open in new tab for videos, PDFs, and courses
      window.open(item.content, '_blank');
    } else {
      // For other content types, could navigate to detail page
      if (process.env.NODE_ENV === 'development') {
        console.log(`Opening ${item.title} content:`, item.content);
      }
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return 'bi bi-play-circle-fill';
      case 'pdf':
        return 'bi bi-file-earmark-pdf-fill';
      case 'course':
        return 'bi bi-book-fill';
      case 'html':
        return 'bi bi-globe';
      default:
        return 'bi bi-file-fill';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'video':
        return 'Video';
      case 'pdf':
        return 'PDF';
      case 'course':
        return 'Curso';
      case 'html':
        return 'HTML';
      default:
        return 'Contenido';
    }
  };

  // Organize content by type
  const videoContent = portfolioContent.filter(item => item.type === 'video');
  const pdfContent = portfolioContent.filter(item => item.type === 'pdf');
  const courseContent = portfolioContent.filter(item => item.type === 'course');
  const htmlContent = portfolioContent.filter(item => item.type === 'html');

  const renderContentSection = (items, sectionTitle, sectionSubtitle, sectionId) => {
    if (items.length === 0) return null;

    return (
      <div className="portfolio-section" id={sectionId}>
        <div className="container section-title" data-aos="fade-up">
          <h3>{sectionTitle}</h3>
          <div>
            <span>{sectionSubtitle}</span>
          </div>
        </div>
        
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="col-lg-4 col-md-6 col-sm-12" 
                data-aos="zoom-in" 
                data-aos-delay={200 + (index * 50)}
              >
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="portfolio-type">
                          <i className={getTypeIcon(item.type)}></i>
                          <span>{getTypeLabel(item.type)}</span>
                        </div>
                      </div>
                      <button
                        className="portfolio-link"
                        onClick={() => handleContentClick(item)}
                        disabled={item.content === '#'}
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio-grid" className="portfolio-grid section">
     

      {/* Navigation Pills */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <ul className="nav nav-pills portfolio-filter" role="tablist">
              <li className="nav-item" role="presentation">
                <a 
                  className={`nav-link ${activeSection === 'courses-section' ? 'active' : ''}`}
                  href="#courses-section"
                  onClick={(e) => scrollToSection('courses-section', e)}
                >
                  Cursos ({courseContent.length})
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a 
                  className={`nav-link ${activeSection === 'videos-section' ? 'active' : ''}`}
                  href="#videos-section"
                  onClick={(e) => scrollToSection('videos-section', e)}
                >
                  Videos ({videoContent.length})
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a 
                  className={`nav-link ${activeSection === 'pdfs-section' ? 'active' : ''}`}
                  href="#pdfs-section"
                  onClick={(e) => scrollToSection('pdfs-section', e)}
                >
                  PDFs ({pdfContent.length})
                </a>
              </li>
              {htmlContent.length > 0 && (
                <li className="nav-item" role="presentation">
                  <a 
                    className={`nav-link ${activeSection === 'html-section' ? 'active' : ''}`}
                    href="#html-section"
                    onClick={(e) => scrollToSection('html-section', e)}
                  >
                    HTML ({htmlContent.length})
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {renderContentSection(
        courseContent, 
        'Cursos Interactivos', 
        'Experiencias de aprendizaje completas y estructuradas', 
        'courses-section'
      )}
      
      {renderContentSection(
        videoContent, 
        'Videos Educativos', 
        'Contenido audiovisual interactivo y demostrativo', 
        'videos-section'
      )}
      
      {renderContentSection(
        pdfContent, 
        'Documentos PDF', 
        'Materiales educativos y recursos descargables', 
        'pdfs-section'
      )}
      
      {htmlContent.length > 0 && renderContentSection(
        htmlContent, 
        'Contenido HTML', 
        'Experiencias web interactivas y simulaciones', 
        'html-section'
      )}
    </section>
  );
};

export default PortfolioGrid;
