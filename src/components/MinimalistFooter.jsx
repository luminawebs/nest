import React from 'react';
import { Link } from 'react-router-dom';

const MinimalistFooter = () => {
  return (
    <footer id="footer" className="footer minimalist-footer">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">
                <img src="/assets/img/edunest-dark.svg" alt="Edunest" width="120" />
              </span>
            </Link>
          </div>
          
          <div className="col-lg-4 col-md-6 text-center">
            <div className="footer-links">
              <Link to="/" className="me-3">Home</Link>
              <Link to="/resources" className="me-3">Recursos</Link>
              <a href="#contact">Contacto</a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12 text-end">
            <div className="social-links d-flex justify-content-end">
              <a href="https://www.linkedin.com/company/l%C3%BAmina-interactiva/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright text-center mt-3 pt-3" style={{borderTop: '1px solid #eee'}}>
          <p className="mb-0">
            © <span>Copyright</span> <strong className="px-1 sitename">Lúmina Interactiva - Edunest.co</strong> 
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;

