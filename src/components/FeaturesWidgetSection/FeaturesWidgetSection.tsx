import React from 'react';
import styles from './FeaturesWidgetSection.module.scss';
import List from '../List/List';

const FeaturesWidgetSection: React.FC = () => {
  return (
    <div className={styles['features-widget-set']}>
      <h2 className={styles['features-widget-title']}>3-D ВИДЖЕТ</h2>
      <div className={styles['features-widget-fragment']}>
        <div className={styles['features-widget-img']}>
          <img src="/src/vendor/images/WidgetImage.png" alt="Изображение комнаты" />
        </div>
        <List />
      </div>
    </div>
  );
};

export default FeaturesWidgetSection;
