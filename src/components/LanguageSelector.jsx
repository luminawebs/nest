import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackButtonClick } from '../utils/analytics';

const LanguageSelector = ({ className = '', style = {} }) => {
  const { language, switchLanguage, getLocalizedPath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLanguage) => {
    // Prevent switching to the same language
    if (newLanguage === language) {
      return;
    }
    
    // Get current path without language prefix
    const currentPath = location.pathname;
    // Remove language prefix (e.g., /es or /en) and any trailing slash, but keep the rest
    let pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
    // Ensure we have at least a single slash
    if (!pathWithoutLang || pathWithoutLang === '') {
      pathWithoutLang = '/';
    }
    
    // Navigate to new language path
    const newPath = getLocalizedPath(pathWithoutLang, newLanguage);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Language switch:', { currentPath, pathWithoutLang, newPath, newLanguage });
    }
    
    // Navigate to the new path - LanguageRouter will handle updating the language state
    // based on the URL parameter, so we don't need to call switchLanguage here
    navigate(newPath, { replace: false });
    
    // Track the language switch
    trackButtonClick(`Language Switch - ${newLanguage}`, 'Language Selector');
  };

  return (
    <div className={`language-selector ${className}`} style={style}>
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleLanguageChange('es');
        }}
        style={{
          background: 'none',
          border: 'none',
          textDecoration: 'none',
          color: language === 'es' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'es' ? 'bold' : 'normal',
          fontSize: '14px',
          marginRight: '8px',
          cursor: 'pointer',
          padding: 0,
          zIndex: 1000,
          position: 'relative'
        }}
        aria-label="Switch to Spanish"
      >
        esp
      </button>
      <span style={{ color: '#6c757d', fontSize: '14px' }}>|</span>
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleLanguageChange('en');
        }}
        style={{
          background: 'none',
          border: 'none',
          textDecoration: 'none',
          color: language === 'en' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'en' ? 'bold' : 'normal',
          fontSize: '14px',
          marginLeft: '8px',
          cursor: 'pointer',
          padding: 0,
          zIndex: 1000,
          position: 'relative'
        }}
        aria-label="Switch to English"
      >
        eng
      </button>
    </div>
  );
};

export default LanguageSelector;

