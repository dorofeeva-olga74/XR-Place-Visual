import separator from '../../../vendor/images/Lang.svg';
import styles from './LangButton.module.scss';

interface LangButtonProps {
  OpenPopup?: () => void;
  className?: string;
  isMenuOpen?: boolean;
  windowWidth?: number;
  handleLangChange?: (language: 'RU' | 'EN') => void;
}

const LangButton: React.FC<LangButtonProps> = ({ OpenPopup, className, isMenuOpen, windowWidth, handleLangChange }) => {
  return (
    <div className={`${styles['lang-section']} ${className ? className : ''}`}>
      {(isMenuOpen || (windowWidth && windowWidth > 768)) && (
        <>
          <button type="button" className={styles['lang-section-link']} onClick={() => handleLangChange && handleLangChange('EN')}>
            En
          </button>
          <img src={separator} alt="Разделитель" />
          <button className={styles['lang-section-link']} onClick={() => handleLangChange && handleLangChange('RU')}>
            Рус
          </button>
        </>
      )}
      {OpenPopup && <button className={styles['menu-button']} onClick={OpenPopup} />}
    </div>
  );
};

export default LangButton;
