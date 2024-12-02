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
        <div className={styles['features-widget-img']}>
          <img src="/src/vendor/images/WidgetImage.png" alt={t('components.widget.featuresWidgetSection.imageAlt')} />
        </div>
        <List />
      </div>
    </div>
  );
};

export default FeaturesWidgetSection;
