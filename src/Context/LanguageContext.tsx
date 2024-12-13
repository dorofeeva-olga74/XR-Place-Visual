import { createContext, useState } from 'react';
import i18n from '../i18n';
import { Lang } from '../utils/api/apiTypes';

export interface LanguageContextType {
  language: Lang;
  handleLangChange: (language: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'RU',
  handleLangChange: () => {},
});

const LanguageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Lang>('RU');

  const handleLangChange = (lang: Lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
  };

  return <LanguageContext.Provider value={{ language, handleLangChange }}>{children}</LanguageContext.Provider>;
};

export { LanguageContextProvider, LanguageContext };
