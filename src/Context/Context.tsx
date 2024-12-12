import { createContext, useState } from 'react';
import i18n from '../i18n';

export interface ContextType {
  language: string;
  handleLangChange: (language: string) => void;
}

const Context = createContext<ContextType | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('ru');

  const handleLangChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return <Context.Provider value={{ language, handleLangChange }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
