import separator from '../../../vendor/images/Lang.svg';
import styles from './LangButton.module.scss';

interface LangButtonProps {
  OpenPopup?: () => void;
  className?: string;
  isMenuOpen?: boolean;
  windowWidth?: number;
}

const LangButton: React.FC<LangButtonProps> = ({ OpenPopup, className, isMenuOpen, windowWidth }) => {
  return (
    <div className={`${styles['lang-section']} ${className ? className : ''}`}>
      {(isMenuOpen || (windowWidth && windowWidth > 768)) && (
        <>
          <a className={styles['lang-section-link']} href="#">
            En
          </a>
          <img src={separator} alt="Разделитель" />
          <a className={styles['lang-section-link']} href="#">
            Рус
          </a>
        </>
      )}
      {OpenPopup && <button className={styles['menu-button']} onClick={OpenPopup} />}
    </div>
  );
};

export default LangButton;
