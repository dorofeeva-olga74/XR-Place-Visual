import React from 'react';
import { useMetrics } from '../../utils/hooks/useMetrics';
import { useTranslation } from 'react-i18next';
import styles from './Metrics.module.scss';

const Metrics: React.FC = () => {
  const { t } = useTranslation();
  const metrics = useMetrics('RU');

  return (
    <div className={styles['metrics']}>
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
    </div>
  );
};

export default Metrics;

// return (
//   <div className={styles['metrics']}>
//       <h2 className={styles['metrics-title']}>{t('components.metrics.title')}</h2>
//       <div className={styles['metrics-details']}>
//         <div className={styles['metrics-set']}>
//           <p className={styles['metrics-text']}>{t('components.metrics.first')}</p>
//           <span className={styles['metrics-span']}>15%</span>
//         </div>
//         <div className={styles['metrics-set']}>
//           <p className={styles['metrics-text']}>{t('components.metrics.second')}</p>
//           <span className={styles['metrics-span']}>20%</span>
//         </div>
//         <div className={styles['metrics-set']}>
//           <p className={styles['metrics-text']}>{t('components.metrics.third')}</p>
//           <span className={styles['metrics-span']}>60%</span>
//         </div>
//       </div>
//   </div>
// );
// };

// export default Metrics;
