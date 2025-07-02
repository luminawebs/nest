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

  // GeoIP-based language detection (only on first visit)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('edunest-language');
    if (savedLanguage) return; // user already has preference

    // Fetch geolocation info from free ipapi.co (1k req/day free)
    fetch('https://ipapi.co/json/')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (!data) return;
        const country = data.country_code;
        // Simple mapping: common English-speaking countries → 'en', rest → 'es'
        const englishCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'];
        const detectedLang = englishCountries.includes(country) ? 'en' : 'es';
        setLanguage(detectedLang);
      })
      .catch(() => {
        /* silent fail – keep current language */
      });
  }, []);

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

