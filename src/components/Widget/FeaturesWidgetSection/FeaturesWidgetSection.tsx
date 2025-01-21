import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesWidgetSection.module.scss';
import WidgetImage from '../../../vendor/images/WidgetImage.png';
import List from '../List/List';

const FeaturesWidgetSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.featuresWidget}>
      <h2 className={styles.featuresWidget__title}>{t('components.widget.featuresWidgetSection.title')}</h2>
      <div className={styles.featuresWidget__fragment}>
        <div className={styles.featuresWidget__fragment_container}>
          <img className={styles.featuresWidget__fragment_img} src={WidgetImage} alt={t('components.widget.featuresWidgetSection.imageAlt')} />
        </div>
        <List />
      </div>
    </div>
  );
};

export default FeaturesWidgetSection;
