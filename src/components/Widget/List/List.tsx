import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './List.module.scss';
import { motion, useInView } from 'motion/react';
import { Sceleton } from '../../Ui/Sceleton/Sceleton';

interface ListItemProps {
  text: string;
  index: number;
}
const ListItem: React.FC<ListItemProps> = ({ text, index }) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: false });
  const [isVisible, setIsVisible] = useState(false);
  const startColor = '#A5A7A7';
  const endColor = '#A5A7A7';

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <motion.li className={styles.listItem} ref={ref}>
      <p>{text}</p>
      <motion.div key={index} className={styles.listItem__gradient} initial={{ opacity: 0, width: 0 }} animate={isVisible ? { opacity: 1, width: '100%' } : { opacity: 0, width: '0%' }} transition={{ delay: 0, duration: 1, ease: 'linear' }}>
        <Sceleton width="100%" height="2px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
      </motion.div>
    </motion.li>
  );
};

const List: React.FC = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const data: string[] = t('components.widget.list.items', { returnObjects: true }) as unknown as string[];

  return (
    <ul ref={ref} className={styles.list}>
      {data.map((item, index) => (
        <ListItem key={index} text={item} index={index} />
      ))}
    </ul>
  );
};

export default List;
