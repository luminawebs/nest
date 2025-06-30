import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick } from '../utils/analytics';

const PortfolioDetails = ({ 
  projectData = {
    title: "Innovative Financial Dashboard App",
    badge: "UX/UI Design",
    date: "September 2024",
    client: "DigitalCraft Solutions",
    website: "projectwebsite.example.com",
    websiteUrl: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
    mainImages: [
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-7.webp",
      "assets/img/portfolio/portfolio-8.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-4.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    techStack: ["Angular", "Express.js", "PostgreSQL", "GraphQL", "Firebase"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus.",
        expanded: false
      }
    ],
    features: [
      "Real-time Data Visualization",
      "User Role Management",
      "Secure Authentication",
      "Customizable Dashboards",
      "Data Export Options",
      "Multi-device Support"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  },
  onClose
}) => {
  const { t } = useTranslation();

  // Initialize Swiper when component mounts
  useEffect(() => {
    // Dynamically initialize Swiper if needed
    if (window.Swiper) {
      const swiper = new window.Swiper('.portfolio-details-slider', {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 6000
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        },
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });

      return () => {
        if (swiper) swiper.destroy();
      };
    }
  }, []);

  const handleFeatureClick = (feature) => {
    trackButtonClick(`Portfolio Feature: ${feature}`, 'Portfolio Details');
  };

  const handleAccordionClick = (accordionTitle) => {
    trackButtonClick(`Portfolio Accordion: ${accordionTitle}`, 'Portfolio Details');
  };

  return (
    <div className="portfolio-details-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
        
        <section className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              {/* Single Column Layout */}
              <div className="col-12">
                <div className="portfolio-details-content">
                  {/* Project Meta - First */}
                  <div className="project-meta" data-aos="fade-up">
                    <div className="badge-wrapper">
                      <span className="project-badge">{projectData.badge}</span>
                    </div>
                    <div className="date-client">
                      <div className="meta-item">
                        <i className="bi bi-calendar-check"></i>
                        <span>{projectData.date}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-buildings"></i>
                        <span>{projectData.client}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h2 className="project-title" data-aos="fade-up" data-aos-delay="100">{projectData.title}</h2>

                  {/* Project Website */}
                  <div className="project-website" data-aos="fade-up" data-aos-delay="150">
                    <i className="bi bi-link-45deg"></i>
                    <a href={projectData.websiteUrl} target="_blank" rel="noopener noreferrer">
                      {projectData.website}
                    </a>
                  </div>

                  {/* Project Description */}
                  <div className="project-overview" data-aos="fade-up" data-aos-delay="200">
                    <p className="lead">{projectData.description}</p>
                  </div>

                  {/* Main Images Slider */}
                  <div className="portfolio-details-media" data-aos="fade-up" data-aos-delay="250">
                    <div className="main-image">
                      <div className="portfolio-details-slider swiper init-swiper">
                        <div className="swiper-wrapper">
                          {projectData.mainImages.map((image, index) => (
                            <div key={index} className="swiper-slide">
                              <img src={image} alt={`${projectData.title} Image ${index + 1}`} className="img-fluid" />
                            </div>
                          ))}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="thumbnail-grid" data-aos="fade-up" data-aos-delay="300">
                    <div className="row g-2 mt-3">
                      {projectData.thumbnailImages.map((image, index) => (
                        <div key={index} className="col-3">
                          <img src={image} alt={`Gallery Image ${index + 1}`} className="img-fluid glightbox" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="350">
                    {projectData.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  {/* Project Accordion */}
                  <div className="project-overview" data-aos="fade-up" data-aos-delay="400">
                    <div className="accordion project-accordion" id="portfolio-details-projectAccordion">
                      {projectData.accordion.map((item, index) => (
                        <div key={item.id} className="accordion-item">
                          <h2 className="accordion-header">
                            <button 
                              className={`accordion-button ${!item.expanded ? 'collapsed' : ''}`}
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target={`#portfolio-details-collapse-${index + 1}`}
                              aria-expanded={item.expanded}
                              aria-controls={`portfolio-details-collapse-${index + 1}`}
                              onClick={() => handleAccordionClick(item.title)}
                            >
                              <i className={`bi ${item.icon} me-2`}></i> {item.title}
                            </button>
                          </h2>
                          <div 
                            id={`portfolio-details-collapse-${index + 1}`} 
                            className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`}
                            data-bs-parent="#portfolio-details-projectAccordion"
                          >
                            <div className="accordion-body">
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="project-features" data-aos="fade-up" data-aos-delay="450">
                    <h3><i className="bi bi-stars"></i> Key Features</h3>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <ul className="feature-list">
                          {projectData.features.slice(0, Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                            <li key={index} onClick={() => handleFeatureClick(feature)}>
                              <i className="bi bi-check2-circle"></i> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="feature-list">
                          {projectData.features.slice(Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                            <li key={index} onClick={() => handleFeatureClick(feature)}>
                              <i className="bi bi-check2-circle"></i> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
                    <a 
                      href={projectData.liveProjectUrl} 
                      className="btn-view-project"
                      onClick={() => trackButtonClick('View Live Project', 'Portfolio Details')}
                    >
                      View Live Project
                    </a>
                    <a 
                      href={projectData.nextProjectUrl} 
                      className="btn-next-project"
                      onClick={() => trackButtonClick('Next Project', 'Portfolio Details')}
                    >
                      Next Project <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioDetails;

