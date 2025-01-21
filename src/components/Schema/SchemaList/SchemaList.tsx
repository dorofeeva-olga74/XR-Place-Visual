import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from './SchemaList.module.scss';
import { SchemaStage } from '../../../utils/api/apiTypes';
import GlowingCircle from '../../Ui/GlowingCircle/GlowingCircle';
import { Sceleton } from '../../Ui/Sceleton/Sceleton';

interface SchemaItemProps {
  index: number;
  id: number;
  title: string;
  description: string;
}

const SchemaItem: React.FC<SchemaItemProps> = ({ id, title, description, index }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [isVisible, setIsVisible] = useState(false);
  const startColor = '#f5f5f5';
  const endColor = '#f5f5f5';

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <motion.li className={`${styles.schema__list_item}`} key={id} ref={ref}>
      <motion.div className={styles.schema__list_item_animate} initial={{ opacity: 0, scale: 1 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? [1, 1.8, 1.5] : 1 }} transition={{ delay: 0.7 * (index + 1), duration: 0.5, ease: 'easeInOut' }}>
        <GlowingCircle />
      </motion.div>
      <motion.div className={`${styles.schema__list_item_ray}`} initial={{ opacity: 0, height: 0 }} animate={isVisible ? { opacity: 1, height: 'calc(100% - 40px)' } : { opacity: 0, height: '0%' }} transition={{ delay: 0.72 * (index + 1), duration: 1, ease: 'linear' }}>
        <Sceleton height="100%" width="4px" radius="0" startColor={startColor} endColor={endColor} />
      </motion.div>
      <motion.div className={styles.schema__list_item_content}>
        <motion.h3 className={styles.schema__list_item_content_title} initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ delay: 0.65 * (index + 1), duration: 0.6 }}>
          {' '}
          {title}
        </motion.h3>
        <motion.p className={styles.schema__list_item_content_description} initial={{ opacity: 0, y: -20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ delay: 0.75 * (index + 1), duration: 0.6 }}>
          {' '}
          {description}
        </motion.p>
      </motion.div>
    </motion.li>
  );
};

interface SchemaListProps {
  data: SchemaStage[];
}

const SchemaList: React.FC<SchemaListProps> = ({ data }) => {
  return (
    <ul className={styles.schema__list}>
      {data.map((item, index) => (
        <SchemaItem key={item.id} id={item.id} index={index} title={item.title} description={item.description} />
      ))}
    </ul>
  );
};

export default SchemaList;
