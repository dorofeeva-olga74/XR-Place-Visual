import React, { useRef, useContext } from 'react';
import { useAdvantages } from '../../utils/hooks/useAdvantages';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.scss';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Lang } from '../../utils/api/apiTypes';

const Advantages: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const advantages = useAdvantages(language as Lang, isInView);

  if (advantages.isError) {
    return null;
  }

  return (
    <section ref={ref} className={styles.advantages}>
      <h2 className={styles.advantages__title}>{t('components.advantages.title')}</h2>
      <div className={styles.advantages__details}>
        {advantages.isSuccess &&
          advantages.data.slice(0, 3).map((item, index) => {
            return (
              <div className={styles.advantages__card} key={`${item.id}`}>
                <div className={styles.advantages__circleContainer}>
                  <div className={styles.advantages__circle}></div>
                  {index >= 1 && <div className={`${styles.advantages__circle} ${styles.advantages__circleSecond}`}></div>}
                  {index === 2 && <div className={`${styles.advantages__circle} ${styles.advantages__circleSecond} ${styles.advantages__circleThird}`}></div>}
                </div>
                <h3 className={styles.advantages__cardTitle}>{item.title}</h3>
                <ul className={styles.advantages__textSet}>
                  <li className={styles.advantages__text}>{item.description}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Advantages;
