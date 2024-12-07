import separator from '../../../vendor/images/Lang.svg';
import styles from './LangButton.module.scss';

interface HeaderProps {
  OpenPopup?: () => void;
  className?: string;
}

const LangButton: React.FC<HeaderProps> = ({ OpenPopup, className }) => {
  return (
    <div className={`${styles['lang-section']} ${className}`}>
      <a className={styles['lang-section-link']} href="#">
        En
      </a>
      <img src={separator} alt="Разделитель" />
      <a className={styles['lang-section-link']} href="#">
        {' '}
        Рус
      </a>
      {OpenPopup && <button className={styles['menu-botton']} onClick={OpenPopup} />}
    </div>
  );
};

export default LangButton;
