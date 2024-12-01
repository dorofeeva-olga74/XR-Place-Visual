import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesTextSection.module.scss';

const FeaturesTextSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['shimmer-text-set']}>
      {/* <div className={styles['grid-background']}>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
      </div> */}
      <p className={styles['shimmer-text']}>
        {t('components.widget.featuresTextSection.p')}
        <span className={styles['shimmer-span']}>{t('components.widget.featuresTextSection.span')}</span>
        {t('components.widget.featuresTextSection.p2')}
      </p>
    </div>
  );
};

export default FeaturesTextSection;
