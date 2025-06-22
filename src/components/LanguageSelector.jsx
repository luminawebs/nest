import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackButtonClick } from '../utils/analytics';

const LanguageSelector = ({ className = '', style = {} }) => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    switchLanguage(newLanguage);
    trackButtonClick(`Language Switch - ${newLanguage}`, 'Language Selector');
  };

  return (
    <div className={`language-selector ${className}`} style={style}>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('es');
        }}
        style={{
          textDecoration: 'none',
          color: language === 'es' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'es' ? 'bold' : 'normal',
          fontSize: '14px',
          marginRight: '8px',
          cursor: 'pointer'
        }}
      >
        esp
      </a>
      <span style={{ color: '#6c757d', fontSize: '14px' }}>|</span>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleLanguageChange('en');
        }}
        style={{
          textDecoration: 'none',
          color: language === 'en' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'en' ? 'bold' : 'normal',
          fontSize: '14px',
          marginLeft: '8px',
          cursor: 'pointer'
        }}
      >
        eng
      </a>
    </div>
  );
};

export default LanguageSelector;

