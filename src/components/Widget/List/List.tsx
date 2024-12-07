import { forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './List.module.scss';
import { motion, useScroll } from 'motion/react';

const ListItem = forwardRef(({ text }: { text: string }, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  return (
    <li ref={ref} className={styles['list-item']}>
      <p>{text}</p>
      <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }}></motion.div>
    </li>
  );
});

const List: React.FC = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const data: string[] = t('components.widget.list.items', { returnObjects: true }) as unknown as string[];
  return (
    <ul ref={ref} className={styles['list']}>
      {data.map((item, index) => {
        return <ListItem key={`${item}-${index}`} text={item} ref={ref} />;
      })}
    </ul>
  );
};

export default List;
