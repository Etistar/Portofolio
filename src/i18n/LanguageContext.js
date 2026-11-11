import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy } from './copy';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = window.localStorage.getItem('lang');
    return saved === 'en' || saved === 'fr' ? saved : 'fr';
  });

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.title = copy[lang].pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', copy[lang].meta);
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: copy[lang]
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within LanguageProvider');
  }
  return context;
};
