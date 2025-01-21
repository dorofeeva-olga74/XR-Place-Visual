import React, { useRef, useEffect, useState } from 'react';
import styles from './Widget.module.scss';
import FeaturesTextSection from './FeaturesTextSection/FeaturesTextSection';
import FeaturesWidgetSection from './FeaturesWidgetSection/FeaturesWidgetSection';
import GlowingCircle from '../Ui/GlowingCircle/GlowingCircle';
import { Sceleton } from '../Ui/Sceleton/Sceleton';
import { gridElements } from '../../utils/consts';
import { motion, useInView } from 'motion/react';

const Widget: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [isVisible, setIsVisible] = useState(false);
  const startColor = '#0a2c2d';
  const endColor = '#b7e0e2';

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <section id="widget" className={styles.widget}>
      <div ref={ref} className={styles.widget__gridBackground}>
        {gridElements.map((item, index) => (
          <div key={`${item} - ${index}`} className={styles.widget__gridBackground_item} />
        ))}
      </div>
      <motion.div initial={'hidden'} whileInView={'visible'} className={styles.widget__textContainer}>
        <motion.div className={styles.widget__textContainer_circleContainer} initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1, scale: [1, 1.5, 1.2] } : { opacity: 0 }} transition={{ delay: 0.5, duration: 1, repeat: 1.5, repeatType: 'mirror' }}>
          <GlowingCircle />
        </motion.div>
        <motion.div className={styles.widget__textContainer_rayContainer} initial={{ opacity: 0, width: 0 }} animate={isVisible ? { opacity: 1, width: '100%' } : { opacity: 0, width: '0%' }} transition={{ delay: 0.5, duration: 1, repeat: 1.35, repeatType: 'mirror' }}>
          <Sceleton width="100%" height="4px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
        <motion.div className={styles.widget__textContainer_rayContainer} initial={{ opacity: 0, height: 0 }} animate={isVisible ? { opacity: 1, height: '100%' } : { opacity: 0, height: '0%' }} transition={{ delay: 0.5, duration: 1, ease: 'easeIn', repeat: 0.7 }}>
          <Sceleton height="100%" width="4px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
        <FeaturesTextSection />
      </motion.div>
      <div className={styles.widget__container}>
        <FeaturesWidgetSection />
      </div>
    </section>
  );
};
export default Widget;
