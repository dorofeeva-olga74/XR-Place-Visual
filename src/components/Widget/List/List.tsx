import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './List.module.scss';
import { motion, MotionValue, useScroll } from 'motion/react';

const ListItem = ({ text, progress }: { text: string; progress: MotionValue }) => {
  return (
    <li className={styles['list-item']}>
      <p>{text}</p>
      <motion.div className={styles['progress-bar']} style={{ scaleX: progress }}></motion.div>
    </li>
  );
};

const List: React.FC = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const data: string[] = t('components.widget.list.items', { returnObjects: true }) as unknown as string[];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.7'],
  });
  return (
    <ul ref={ref} className={styles['list']}>
      {data.map((item, index) => {
        return <ListItem key={`${item}-${index}`} text={item} progress={scrollYProgress} />;
      })}
    </ul>
  );
};

export default List;
