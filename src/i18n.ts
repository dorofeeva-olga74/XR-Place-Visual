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
            widget: {
              featuresWidgetSection: {
                title: '3D-ВИДЖЕТ',
                imageAlt: 'Изображение комнаты',
              },
              featuresTextSection: {
                p: 'Мы создаем фотореалистичные',
                span: ' 3D-визуализации',
                p2: ', которые увеличивают привлекательность ваших проектов, вызывая у клиентов чувство полного погружения',
              },
              list: {
                items: ['Виджет легко встраивается в любой сайт', 'Доступно с любого устройства', 'Интерактивное вовлечение покупателей', 'Точный вид из окна для каждой планировки', 'Свобода перемещения как в компьютерной игре'],
              },
            },
            claim: {
              title: 'НАЗНАЧИТЬ ДЕМО',
              username: 'Имя*',
              contacts: 'Телефон / WhatsApp / Почта*',
              company: 'Компания',
              comment: 'Комментарий',
              submit: 'Отправить заявку',
              annotation: 'Нажимая на кнопку, вы принимаете',
              policy1: 'условия использования',
              and: 'и',
              policy2: 'политику конфиденциальности',
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
            widget: {
              featuresWidgetSection: {
                title: '3D-WIDGET',
                imageAlt: 'Room Image',
              },
              featuresTextSection: {
                p: 'We create photorealistic',
                span: ' 3D visualizations',
                p2: '", which enhance the appeal of your projects by giving clients a sense of full immersion',
              },
              list: {
                items: ['Widget easily integrates into any site', 'Available on any device', 'Interactive customer engagement', 'Accurate window view for each layout', 'Freedom of movement like in a computer game'],
              },
            },
            claim: {
              title: 'BOOK A DEMO',
              username: 'Name*',
              contacts: 'Phone / WhatsApp / E-mail*',
              company: 'Company',
              comment: 'Comments',
              submit: 'Book a demo',
              annotation: 'By submitting this form you agree to the',
              policy1: 'terms and conditions',
              and: 'and',
              policy2: 'privacy policy',
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
