import React from 'react';
import styles from './GridItem.module.scss';

interface GridItemProps {
  type?: 'image' | 'custom';
  content?: string;
  gridArea: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  customContent?: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ type, content = '', gridArea, alt, title, subtitle, customContent }) => {
  const containerClass = gridArea === 'title' ? `${styles['grid-item-container']} ${styles['grid-item-container-title']}` : styles['grid-item-container'];
  return (
    <div className={containerClass} style={{ gridArea }}>
      {type === 'image' && content ? (
        <>
          <img className={styles['grid-item-image']} src={content} alt={alt} />
          <p className={styles['grid-item-title']}>{title}</p>
          <p className={styles['grid-item-subtitle']}>{subtitle}</p>
        </>
      ) : type === 'custom' && customContent ? (
        <div className={styles['grid-item-custom']}>{customContent}</div>
      ) : null}
    </div>
  );
};
export default GridItem;
