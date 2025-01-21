import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from './GridItem.module.scss';
import GlowingCircle from '../../Ui/GlowingCircle/GlowingCircle';
import { Sceleton } from '../../Ui/Sceleton/Sceleton';

interface GridItemProps {
  type?: 'image' | 'custom';
  content?: string;
  gridArea: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  customContent?: React.ReactNode;
}
const GridItem: React.FC<GridItemProps> = ({ type, content = '', gridArea, alt, title, subtitle, customContent }) => {
  const containerClass = gridArea === 'title' ? `${styles.gridItem__container} ${styles.gridItem__container_title}` : styles.gridItem__container;
  const shouldShowCircle = gridArea === 'victor' || gridArea === 'item12';
  const shouldShowRayX = gridArea === 'artem' || gridArea === 'victor' || gridArea === 'item12';
  const shouldShowRayY = gridArea === 'victor' || gridArea === 'item12';

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
    <div className={containerClass} style={{ gridArea }} ref={ref}>
      {shouldShowCircle && (
        <motion.div className={styles.gridItem__circleContainer} initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1, scale: [1, 2, 1.5] } : { opacity: 0 }} transition={{ delay: 1, duration: 1, repeat: 2, repeatType: 'mirror' }}>
          <GlowingCircle />
        </motion.div>
      )}
      {shouldShowRayY && (
        <motion.div className={styles.gridItem__rayY} initial={{ opacity: 0, height: 0 }} animate={isVisible ? { opacity: 1, height: '100%' } : { opacity: 0, height: '0%' }} transition={{ delay: 1, duration: 1, ease: 'easeIn', repeat: 1.9, repeatType: 'mirror' }}>
          <Sceleton height="100%" width="4px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
      )}
      {shouldShowRayX && (
        <motion.div className={styles.gridItem__rayX} initial={{ opacity: 0, width: 0 }} animate={isVisible ? { opacity: 1, width: '100%' } : { opacity: 0, width: '0%' }} transition={{ delay: 1, duration: 1, ease: 'easeIn', repeat: 1.75, repeatType: 'mirror' }}>
          <Sceleton width="100%" height="4px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
      )}
      {type === 'image' && content ? (
        <>
          <motion.img className={styles.gridItem__image} src={content} alt={alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} />
          <motion.p className={styles.gridItem__title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            {title}
          </motion.p>
          <motion.p className={styles.gridItem__subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            {subtitle}
          </motion.p>
        </>
      ) : type === 'custom' && customContent ? (
        <motion.div className={styles.gridItem__custom} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
          {customContent}
        </motion.div>
      ) : null}
    </div>
  );
};
export default GridItem;
