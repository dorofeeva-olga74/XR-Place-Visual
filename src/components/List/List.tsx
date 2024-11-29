import React from 'react';
import styles from './List.module.scss';

const ListItem: React.FC<{ text: string }> = ({ text }) => {
  return <li className={styles['list-item']}>{text}</li>;
};

const List: React.FC = () => {
  const data = ['Виджет легко встраивается в любой сайт', 'Доступно с любого устройства', 'Интерактивное вовлечение покупателей', 'Точный вид из окна для каждой планировки', 'Свобода перемещения как в компьютерной игре'];
  return (
    <ul className={styles['list']}>
      {data.map((item, index) => {
        return <ListItem key={`${item}-${index}`} text={item} />;
      })}
    </ul>
  );
};

export default List;
