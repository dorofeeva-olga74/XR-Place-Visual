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
            team: {
              title: 'КТО МЫ?',
              imageAlt4: 'Фотография Артема Тарханова',
              name4: 'Артем Тарханов',
              missionTitle5: 'МИССИЯ',
              missionSubtitle5: 'НАША',
              missionText5: 'Увеличить продажи недвижимости нашим клиентам с помощью инновационных 3D web технологий',
              imageAlt8: 'Фотография Виктора Карнеева',
              name8: 'Виктор Карнеев',
              valuesTitle9: 'ЦЕННОСТИ',
              valuesSubtitle9: 'НАШИ',
              valuesText9: 'Честность, открытость, доверие, уважение, порядочность, взаимовыручка — такие ценности помогают выстроить хорошую атмосферу в команде',
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
            team: {
              title: 'WHO ARE WE?',
              imageAlt4: 'Photo by Artem Tarkhanov',
              name4: 'Artem Tarkhanov',
              missionTitle5: 'MISSION',
              missionSubtitle5: 'OUR',
              missionText5: 'Increase real estate sales for our clients using innovative 3D web technologies',
              imageAlt8: 'Photo by Victor Karneev',
              name8: 'Victor Karneev',
              valuesTitle9: 'VALUES',
              valuesSubtitle9: 'OUR',
              valuesText9: 'Honesty, openness, trust, respect, integrity, mutual assistance—these values help to build a good atmosphere in the team.',
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
            footer: {
              allRightsReserved: 'All rights reserved',
            },
          },
        },
      },
    },
  });

export default i18n;
