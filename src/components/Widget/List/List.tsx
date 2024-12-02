import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './List.module.scss';

const ListItem: React.FC<{ text: string }> = ({ text }) => {
  return <li className={styles['list-item']}>{text}</li>;
};

const List: React.FC = () => {
  const { t } = useTranslation();
  const data: string[] = t('components.widget.list.items', { returnObjects: true }) as unknown as string[];
  return (
    <ul className={styles['list']}>
      {data.map((item, index) => {
        return <ListItem key={`${item}-${index}`} text={item} />;
      })}
    </ul>
  );
};

export default List;
