import React from 'react';
import styles from './FeaturesTextSection.module.scss';
import GlowingCircle from '../Ui/GlowingCircle/GlowingCircle';

const FeaturesTextSection: React.FC = () => {
  return (
    <div className={styles['shimmer-text-set']}>
      <GlowingCircle />
      <p className={styles['shimmer-text']}>
        Мы создаем фотореалистичные
        <span className={styles['shimmer-span']}> 3D-визуализации</span>, которые увеличивают привлекательность ваших проектов, вызывая у клиентов чувство полного погружения
      </p>
    </div>
  );
};

export default FeaturesTextSection;
