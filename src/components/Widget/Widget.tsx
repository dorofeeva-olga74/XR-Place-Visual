import React, { useRef } from 'react';
import styles from './Widget.module.scss';
import GlowingCircle from '../Ui/GlowingCircle/GlowingCircle';
import FeaturesTextSection from './FeaturesTextSection/FeaturesTextSection';
import FeaturesWidgetSection from './FeaturesWidgetSection/FeaturesWidgetSection';
import { gridElements } from '../../utils/consts';
import { motion, useScroll, MotionValue } from 'motion/react';

const RayAnimationX = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 100,
    opacity: 1,
    transition: { delay: custom * 0.7 },
  }),
  visualViewport: {
    amount: 0.2,
    once: true,
  },
};
const RayAnimationY = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 50,
    opacity: 1,
    transition: { delay: custom * 0.7 },
  }),
  visualViewport: {
    amount: 0.2,
    once: true,
  },
};
const RayX = ({ progress }: { progress: MotionValue }) => {
  return <motion.div custom={1} variants={RayAnimationX} initial="hidden" animate="visible" className={styles['progress-ray-x']} style={{ scaleX: progress }} />;
};
const RayY = ({ progress }: { progress: MotionValue }) => {
  return <motion.div custom={2} variants={RayAnimationY} initial="hidden" animate="visible" className={styles['progress-bar-y']} style={{ scaleY: progress }} />;
};

const Widget: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return (
    <section className={styles['widget']} ref={ref}>
      <div className={styles['grid-background']}>
        {gridElements.map((item, index) => (
          <div key={`${item} - ${index}`} className={styles['grid-item']} />
        ))}
      </div>
      <motion.div initial={'hidden'} whileInView={'visible'} className={styles['widget-text-container']}>
        <div className={styles['widget-circle-container']}>
          <GlowingCircle />
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
