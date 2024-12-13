import React, { useRef } from 'react';
import styles from './Widget.module.scss';
import FeaturesTextSection from './FeaturesTextSection/FeaturesTextSection';
import FeaturesWidgetSection from './FeaturesWidgetSection/FeaturesWidgetSection';
import { gridElements } from '../../utils/consts';
import { motion, useScroll, MotionValue } from 'motion/react';
import horizontalLine from './../../vendor/images/horizontal-line.png';
import virticalLine from './../../vendor/images/vertical-line.png';

const RayX = ({ progress }: { progress: MotionValue }) => {
  return <motion.img src={horizontalLine} className={styles['progress-ray-x']} style={{ scaleX: progress }} />;
};
const RayY = ({ progress }: { progress: MotionValue }) => {
  return <motion.img src={virticalLine} className={styles['progress-bar-y']} style={{ scaleY: progress }} />;
};

const Widget: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.7'],
  });
  return (
    <section id="widget" className={styles['widget']}>
      <div ref={ref} className={styles['grid-background']}>
        {gridElements.map((item, index) => (
          <div key={`${item} - ${index}`} className={styles['grid-item']} />
        ))}
      </div>
      <motion.div initial={'hidden'} whileInView={'visible'} className={styles['widget-text-container']}>
        <div className={styles['widget-circle-container']}>
          <div className={styles.widget_circle} />
          <RayX progress={scrollYProgress} />
          <RayY progress={scrollYProgress} />
        </div>
        <FeaturesTextSection />
      </motion.div>
      <div className={styles['widget-container']}>
        <FeaturesWidgetSection />
      </div>
    </section>
  );
};
export default Widget;
