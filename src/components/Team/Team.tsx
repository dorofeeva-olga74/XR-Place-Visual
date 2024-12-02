import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Team.module.scss';

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['team']}>
      <h2 className={styles['team-title']}>{t('components.team.title')}</h2>
      <div className={styles['team-grid']}>
        {Array(12)
          .fill('1')
          .map((item, index) => (
            <div key={`${item} - ${index}`} className={styles['grid-item']} />
          ))}
      </div>
    </div>
  );
};

export default Team;
