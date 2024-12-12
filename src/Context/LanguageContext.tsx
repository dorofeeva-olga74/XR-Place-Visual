import { createContext, useState } from 'react';
import i18n from '../i18n';

export interface LanguageContextType {
  language: 'RU' | 'EN';
  handleLangChange: (language: 'RU' | 'EN') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'RU',
  handleLangChange: () => {},
});

const LanguageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'RU' | 'EN'>('RU');

  const handleLangChange = (lang: 'RU' | 'EN') => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
  };

  return <LanguageContext.Provider value={{ language, handleLangChange }}>{children}</LanguageContext.Provider>;
};

export { LanguageContextProvider, LanguageContext };
