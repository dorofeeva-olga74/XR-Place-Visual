import React, { useContext, useRef } from 'react';
import { useMetrics } from '../../utils/hooks/useMetrics';
import { useTranslation } from 'react-i18next';
import styles from './Metrics.module.scss';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Lang } from '../../utils/api/apiTypes';

const Metrics: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const metrics = useMetrics(language as Lang, isInView);

  return (
    <section id="metrics" ref={ref} className={styles['metrics']}>
      <h2 className={styles['metrics-title']}>{t('components.metrics.title')}</h2>
      <div className={styles['metrics-details']}>
        {metrics.isSuccess &&
          metrics.data.map((item) => {
            return (
              <div className={styles['metrics-set']} key={`${item.id}`}>
                <p className={styles['metrics-text']}>{item.description}</p>
                <span className={styles['metrics-span']}>{item.percent} %</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Metrics;
