import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('edunest-language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.startsWith('es')) {
      return 'es';
    }
    
    // Default to Spanish
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('edunest-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    switchLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

