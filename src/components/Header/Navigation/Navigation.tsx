import styles from './Navigation.module.scss';

const menuListItem = [
  { id: 1, name: '3D-виджет', href: '#' },
  { id: 2, name: 'Преимущества', href: '#' },
  { id: 3, name: 'Реализованные проекты', href: '#' },
  { id: 4, name: 'Метрики', href: '#' },
  { id: 5, name: 'Процесс работы', href: '#' },
  { id: 6, name: 'О нас', href: '#' },
];

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav>
      <ul className={`${styles['navigation-list']} ${className}`}>
        {menuListItem.map((item) => (
          <li className={styles['navigation-list-item']} key={item.id}>
            <a className={styles['navigation-list-item-link']} href={item.href}>
              {item.name}
            </a>
            {/* здесь "а" заменим на Link из хука навигации*/}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
