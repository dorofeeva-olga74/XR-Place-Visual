import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from './MetricsItem.module.scss';
import { WINDOW_WIDTH_TABLET } from '../../../utils/consts';

interface MetricsItemProps {
  id: string;
  description: string;
  percent: string | number;
  index: number;
}

const MetricsItem: React.FC<MetricsItemProps> = ({ id, description, percent, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef);
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView, screenWidth]);

  return (
    <motion.div className={styles.metricsItem} ref={itemRef} key={id} initial={screenWidth <= WINDOW_WIDTH_TABLET ? { opacity: 0, x: -200 } : { opacity: 0, y: -50 }} animate={isVisible ? (screenWidth <= WINDOW_WIDTH_TABLET ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }) : screenWidth <= WINDOW_WIDTH_TABLET ? { opacity: 0, x: -200 } : { opacity: 0, y: -50 }} transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.4 }}>
      <p className={styles.metricsItem__text}>{description}</p>
      <span className={styles.metricsItem__span}>{percent}%</span>
    </motion.div>
  );
};

export default MetricsItem;
