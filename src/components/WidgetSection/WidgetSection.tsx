import React from 'react';
import styles from './WidgetSection.module.scss';
import GlowingCircle from '../Ui/GlowingCircle/GlowingCircle';
import FeaturesTextSection from '../FeaturesTextSection/FeaturesTextSection';
import FeaturesWidgetSection from '../FeaturesWidgetSection/FeaturesWidgetSection';

const WidgetSection: React.FC = () => {
  return (
    <section className={styles['widget-section']}>
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
export default WidgetSection;
