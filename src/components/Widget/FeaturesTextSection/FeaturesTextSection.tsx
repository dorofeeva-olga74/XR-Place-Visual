import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'motion/react';
import styles from './FeaturesTextSection.module.scss';

const FeaturesTextSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <motion.div className={styles.shimmer} ref={ref} initial={{ opacity: 0, x: '-40px' }} animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-40px' }} transition={{ delay: 0.2, duration: 2, ease: 'easeInOut' }}>
      <p className={styles.shimmer__text}>
        {t('components.widget.featuresTextSection.p')}
        <span className={styles.shimmer__text_span}>{t('components.widget.featuresTextSection.span')}</span>
        {t('components.widget.featuresTextSection.p2')}
      </p>
    </motion.div>
  );
};

export default FeaturesTextSection;
