import React, { useRef } from 'react';
import styles from './AdvantagesCard.module.scss';

interface AdvantagesCardProps {
  index: number;
  title: string;
  description: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = ({ index, title, description }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const circles = Array.from({ length: index + 1 }, (_, i) => <div key={i} className={`${styles.advantagesCard__circleContainer_circle} ${i > 0 ? styles[`advantagesCard__circleContainer_circle--${i + 1}`] : ''}`}></div>);

  return (
    <div className={styles.advantagesCard} ref={itemRef}>
      <div className={styles.advantagesCard__circleContainer}>{circles}</div>
      <div className={styles.advantagesCard__descriptionContainer}>
        <h3 className={styles.advantagesCard__descriptionContainer_title}>{title}</h3>
        <ul className={styles.advantagesCard__descriptionContainer_textSet}>
          <li className={styles.advantagesCard__descriptionContainer_textSet_text}>{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default AdvantagesCard;
