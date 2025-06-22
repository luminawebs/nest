import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick } from '../utils/analytics';

const ConditionalLayout = ({ children }) => {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Routes that should use minimalist layout (no regular header/footer)
  const minimalistRoutes = [
    '/ai-proficiency-challenge',
    '/coming-soon'
  ];
  
  // Check if current route should use minimalist layout
  const isMinimalistRoute = minimalistRoutes.some(route => 
    location.pathname.startsWith(route)
  );
  
  return (
    <>
      {/* Only render regular header for non-minimalist routes */}
      {!isMinimalistRoute && (
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
              <h1 className="sitename">
                <img src="assets/img/edunest-dark.svg" alt="" width="180" style={{ marginTop: "4px" }} />
              </h1>
            </a>
            
            <Menu />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <LanguageSelector />
              
              <a
                className="btn-getstarted"
                href="#contact"
                onClick={() => trackButtonClick('Header Contact Button', 'Navigation')}
              >
                {t('header.contact')}
              </a>
            </div>
          </div>
        </header>
      )}
      
      {children}
      
      {/* Only render regular footer and scroll-to-top for non-minimalist routes */}
      {!isMinimalistRoute && (
        <>
          <Footer />
          {/* Scroll Top */}
          <a
            href="#header"
            id="scroll-top"
            className="scroll-top d-flex align-items-center justify-content-center"
            onClick={() => trackButtonClick('Scroll to Top', 'Navigation')}
          >
            <i className="bi bi-arrow-up-short"></i>
          </a>
        </>
      )}
    </>
  );
};

export default ConditionalLayout;

