import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesWidgetSection.module.scss';
import List from '../List/List';

const FeaturesWidgetSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['features-widget-set']}>
      <h2 className={styles['features-widget-title']}>{t('components.widget.featuresWidgetSection.title')}</h2>
      <div className={styles['features-widget-fragment']}>
        <div className={styles['features-widget-iframe-container']}>
          <iframe className={styles['features-widget-iframe']} src="https://xrplace.io/video/apartment_1.mp4" title={t('components.widget.featuresWidgetSection.imageAlt')}></iframe>
        </div>
        <List />
      </div>
    </div>
  );
};

export default FeaturesWidgetSection;
