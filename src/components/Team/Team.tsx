import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Team.module.scss';
import GridItem from './GridItem/GridItem';
import { useTeam } from '../../utils/hooks/useTeam';
import { useInView } from 'motion/react';

const Team: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const team = useTeam('RU', isInView);

  return (
    <section ref={ref} className={styles['team']}>
      <div className={styles['team-grid']}>
        <GridItem type="custom" gridArea="title" customContent={<h2 className={styles['team-title']}>{t('components.team.title')}</h2>} />
        <GridItem gridArea="item2" />
        <GridItem gridArea="item3" />
        {team.isSuccess &&
          team.data.map((item, index) => {
            return <GridItem key={`${item.id} - ${index}`} type="image" content={item.image} gridArea={item.item_number === 1 ? 'artem' : 'victor'} alt={`${t('components.team.imageAlt')} ${item.name}`} title={item.name} subtitle={item.position} />;
          })}
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
    </section>
  );
};

export default Team;
