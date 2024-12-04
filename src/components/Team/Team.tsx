import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Team.module.scss';
import GridItem from './GridItem/GridItem';

const Team: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['team']}>
      <div className={styles['team-grid']}>
        <GridItem type="custom" gridArea="title" customContent={<h2>{t('components.team.title')}</h2>} />
        <GridItem gridArea="item2" />
        <GridItem gridArea="item3" />
        <GridItem type="image" content="https://test-xrp.ru/media/image_team/person_01.png" gridArea="artem" alt={t('components.team.imageAlt4')} title={t('components.team.name4')} subtitle="Co-founder & CEO" />
        <GridItem
          type="custom"
          gridArea="mission"
          customContent={
            <div className={styles['custom-content']}>
              <h2>{t('components.team.missionSubtitle5')}</h2>
              <h1>{t('components.team.missionTitle5')}</h1>
              <p>{t('components.team.missionText5')}</p>
            </div>
          }
        />
        <GridItem gridArea="item6" />
        <GridItem gridArea="item7" />
        <GridItem type="image" content="https://test-xrp.ru/media/image_team/person_02.png" gridArea="victor" alt={t('components.team.imageAlt8')} title={t('components.team.name8')} subtitle="Co-founder & Production Director" />
        <GridItem
          type="custom"
          gridArea="values"
          customContent={
            <div className={styles['custom-content']}>
              <h2>{t('components.team.valuesSubtitle9')}</h2>
              <h1>{t('components.team.valuesTitle9')}</h1>
              <p>{t('components.team.valuesText9')}</p>
            </div>
          }
        />
        <GridItem gridArea="item10" />
        <GridItem gridArea="item11" />
        <GridItem gridArea="item12" />
      </div>
    </div>
  );
};

export default Team;
