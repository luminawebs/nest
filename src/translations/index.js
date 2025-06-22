import { es } from './es';
import { en } from './en';

export const translations = {
  es,
  en
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let translation = translations[language];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object' && k in translation) {
      translation = translation[k];
    } else {
      // Fallback to Spanish if translation not found
      let fallback = translations.es;
      for (const fallbackKey of keys) {
        if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
          fallback = fallback[fallbackKey];
        } else {
          return key; // Return the key itself if no translation found
        }
      }
      return fallback;
    }
  }
  
  return translation || key;
};

