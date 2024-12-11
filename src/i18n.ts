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
            advantages: {
              title: 'НАШИ ПРЕИМУЩЕСТВА',
            },
            metrics: {
              title: 'МЕТРИКИ',
            },
            team: {
              title: 'КТО МЫ?',
              imageAlt: 'Фотография ',
              missionTitle5: 'МИССИЯ',
              missionSubtitle5: 'НАША',
              missionText5: 'Увеличение продаж недвижимости для наших клиентов с использованием инновационных 3D веб-технологий',
              valuesTitle9: 'ЦЕННОСТИ',
              valuesSubtitle9: 'НАШИ',
              valuesText9: 'Честность, открытость, доверие, уважение, целостность, взаимопомощь — эти ценности помогают создать хорошую атмосферу в команде.',
            },
            claim: {
              title: 'НАЗНАЧИТЬ ДЕМО',
              username: 'Имя*',
              contacts: 'Телефон / WhatsApp / Почта*',
              company: 'Компания',
              comment: 'Комментарий',
              submit: 'Отправить заявку',
              submitting: 'Отправляю ...',
              annotation: 'Нажимая на кнопку, вы принимаете',
              policy1: 'условия использования',
              and: 'и',
              policy2: 'политику конфиденциальности',
            },
            projects: {
              completedProjects: 'Реализованные проекты',
              projectsWithBigCompanies: 'проектов с крупными заказчиками',
              yourBrowserDoesnotSupportEmbeddedVideos: 'Ваш браузер не поддерживает встроенные видео',
              loadMore: 'Загрузить ещё',
            },
            footer: {
              logoAlt: 'Логотип компании',
              description: 'Создайте новый образ недвижимости в digital',
              conditions: 'Условия использования',
              confidentiality: 'Политика конфиденциальности',
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
            advantages: {
              title: 'OUR ADVANTAGES',
            },
            metrics: {
              title: 'METRICS',
            },
            team: {
              title: 'WHO ARE WE?',
              imageAlt: 'Photo',
              missionTitle5: 'MISSION',
              missionSubtitle5: 'OUR',
              missionText5: 'Increase real estate sales for our clients using innovative 3D web technologies',
              valuesTitle9: 'VALUES',
              valuesSubtitle9: 'OUR',
              valuesText9: 'Honesty, openness, trust, respect, integrity, mutual assistance—these values help to build a good atmosphere in the team.',
            },
            claim: {
              title: 'BOOK A DEMO',
              username: 'Name*',
              contacts: 'Phone / WhatsApp / E-mail*',
              company: 'Company',
              comment: 'Comments',
              submit: 'Book a demo',
              submitting: 'Booking ...',
              annotation: 'By submitting this form you agree to the',
              policy1: 'terms and conditions',
              and: 'and',
              policy2: 'privacy policy',
            },
            projects: {
              completedProjects: 'Projects completed',
              projectsWithBigCompanies: 'projects with big companies',
              yourBrowserDoesnotSupportEmbeddedVideos: 'Your browser does not support embedded videos',
              loadMore: 'Load more',
            },
            footer: {
              logoAlt: 'Company logo',
              description: 'Create  a new image of real estate in digital',
              conditions: 'Terms of use',
              confidentiality: 'Privaсy Policy',
              allRightsReserved: 'All rights reserved',
            },
          },
        },
      },
    },
  });

export default i18n;
