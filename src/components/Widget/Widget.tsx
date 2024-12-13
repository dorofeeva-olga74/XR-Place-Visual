import React from 'react';
import styles from './Widget.module.scss';
import GlowingCircle from '../Ui/GlowingCircle/GlowingCircle';
import FeaturesTextSection from './FeaturesTextSection/FeaturesTextSection';
import FeaturesWidgetSection from './FeaturesWidgetSection/FeaturesWidgetSection';
import { gridElements } from '../../utils/consts';

const Widget: React.FC = () => {
  return (
    <section id="widget" className={styles['widget']}>
      <div className={styles['grid-background']}>
        {gridElements.map((item, index) => (
          <div key={`${item} - ${index}`} className={styles['grid-item']} />
        ))}
      </div>
      <div className={styles['widget-text-container']}>
        <div className={styles['widget-circle-container']}>
          <GlowingCircle />
        </div>
        <FeaturesTextSection />
      </div>
      <div className={styles['widget-container']}>
        <FeaturesWidgetSection />
      </div>
    </section>
  );
};
export default Widget;
