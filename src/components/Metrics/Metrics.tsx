import React, { useContext, useRef } from 'react';
import { useMetrics } from '../../utils/hooks/useMetrics';
import { useTranslation } from 'react-i18next';
import styles from './Metrics.module.scss';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Lang } from '../../utils/api/apiTypes';
import MetricsItem from './MetricsItem/MetricsItem';

const Metrics: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const metrics = useMetrics(language as Lang, isInView);

  return (
    <section id="metrics" ref={ref} className={styles.metrics}>
      <h2 className={styles.metrics__title}>{t('components.metrics.title')}</h2>
      <div className={styles.metrics__details}>{metrics.isSuccess && metrics.data && metrics.data.map((item, index) => <MetricsItem key={`${item.id}`} id={`${item.id}`} description={item.description} percent={item.percent} index={index} />)}</div>
    </section>
  );
};

export default Metrics;
