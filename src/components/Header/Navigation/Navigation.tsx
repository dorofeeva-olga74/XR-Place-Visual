import styles from './Navigation.module.scss';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation();

  const menuListItem = [
    { id: 1, name: t('components.header.widget'), href: '#' },
    { id: 2, name: t('components.header.advantages'), href: '#' },
    { id: 3, name: t('components.header.project'), href: '#' },
    { id: 4, name: t('components.header.metrics'), href: '#' },
    { id: 5, name: t('components.header.process'), href: '#' },
    { id: 6, name: t('components.header.about'), href: '#' },
  ];

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
