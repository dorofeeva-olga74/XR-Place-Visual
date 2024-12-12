import { createContext, useState } from 'react';
import i18n from '../i18n';

export interface LanguageContextType {
  language: 'RU' | 'EN';
  handleLangChange: (language: 'RU' | 'EN') => void;
}

const ContextProvider = createContext<LanguageContextType>({
  language: 'RU',
  handleLangChange: () => {},
});

const LanguageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'RU' | 'EN'>('RU');

  const handleLangChange = (lang: 'RU' | 'EN') => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
  };

  return <ContextProvider.Provider value={{ language, handleLangChange }}>{children}</ContextProvider.Provider>;
};

export { LanguageContextProvider, ContextProvider };
