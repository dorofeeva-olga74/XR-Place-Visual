import React, { useRef, useContext } from 'react';
import { useAdvantages } from '../../utils/hooks/useAdvantages';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.scss';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';
import { Lang } from '../../utils/api/apiTypes';
import AdvantagesCard from './AdvantagesCard/AdvantagesCard';

const Advantages: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const advantages = useAdvantages(language as Lang, isInView);

  if (advantages.isError) {
    return null;
  }

  const displayedAdvantages = advantages.isSuccess ? advantages.data.slice(0, 3) : [];

  return (
    <section id="advantages" ref={ref} className={styles.advantages}>
      <h2 className={styles.advantages__title}>{t('components.advantages.title')}</h2>
      <div className={styles.advantages__details}>
        {displayedAdvantages.map((card, displayIndex) => (
          <AdvantagesCard key={`${card.id}`} index={displayIndex} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
