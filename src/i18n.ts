import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: {
          components: {
            header: {
              advantages: 'Преимущества',
            },
            footer: {
              allRightsReserved: 'Все права защищены',
            },
          },
        },
      },
      en: {
        translation: {
          components: {
            header: {
              advantages: 'Advantages',
            },
            footer: {
              allRightsReserved: 'All rights reserved',
            },
          },
        },
      },
    },
  });

export default i18n;
