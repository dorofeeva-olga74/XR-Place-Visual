import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Team.module.scss';
import GridItem from './GridItem/GridItem';
import { useTeam } from '../../utils/hooks/useTeam';
import { motion, useInView } from 'motion/react';

const Team: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  const team = useTeam('RU', isInView);

  useEffect(() => {
    const gradientElement = ref.current?.querySelector(`.${styles.team__grid}`);
    if (isInView && gradientElement instanceof HTMLElement) {
      gradientElement.classList.add(styles.animateGradient);
      const animationEndHandler = () => {
        gradientElement.classList.remove(styles.animateGradient);
        gradientElement.classList.add(styles.finalGradient);
      };
      gradientElement.addEventListener('animationend', animationEndHandler);
      return () => {
        gradientElement.removeEventListener('animationend', animationEndHandler);
        gradientElement.classList.remove(styles.finalGradient);
      };
    }
  }, [isInView]);

  return (
    <motion.section id="team" ref={ref} className={styles.team} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}>
      <motion.div className={styles.team__grid} initial={{ backgroundPosition: '100% 100%' }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}>
        {isInView && (
          <>
            <GridItem type="custom" gridArea="title" customContent={<h2 className={styles.team__grid_title}>{t('components.team.title')}</h2>} />
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
                <div className={styles.team__customContent}>
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
                <div className={styles.team__customContent}>
                  <h2>{t('components.team.valuesSubtitle9')}</h2>
                  <h1>{t('components.team.valuesTitle9')}</h1>
                  <p>{t('components.team.valuesText9')}</p>
                </div>
              }
            />
            <GridItem gridArea="item10" />
            <GridItem gridArea="item11" />
            <GridItem gridArea="item12" />
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Team;
