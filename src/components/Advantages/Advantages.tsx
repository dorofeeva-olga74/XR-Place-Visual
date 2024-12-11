import React from 'react';
import { useAdvantages } from '../../utils/hooks/useAdvantages';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.scss';

const Advantages: React.FC = () => {
  const { t } = useTranslation();
  const advantages = useAdvantages('RU');

  if (advantages.isError) {
    return null;
  }

  return (
    <section className={styles.advantages}>
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
