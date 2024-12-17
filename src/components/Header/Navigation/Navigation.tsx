import styles from './Navigation.module.scss';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation();

  const menuListItem = [
    { id: 'widget', name: t('components.header.widget'), href: `'#widget'` },
    { id: 'advantages', name: t('components.header.advantages'), href: '#advantages' },
    { id: 'examples', name: t('components.header.project'), href: '#examples' },
    { id: 'metrics', name: t('components.header.metrics'), href: '#metrics' },
    { id: 'schema', name: t('components.header.process'), href: '#schema' },
    { id: 'team', name: t('components.header.team'), href: '#team' },
  ];

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className={`${styles['navigation-list']} ${className}`}>
        {menuListItem.map((item) => (
          <li className={styles['navigation-list-item']} key={item.id}>
            <a className={styles['navigation-list-item-link']} onClick={(event) => handleButtonClick(event, item.id)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
