import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('sigma-language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('sigma-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return Array.isArray(value) ? value : [];
  };

  return {
    currentLanguage,
    setCurrentLanguage,
    t,
    tArray
  };
};