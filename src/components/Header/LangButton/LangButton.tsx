import separator from '../../../vendor/images/Lang.svg';
import styles from './LangButton.module.scss';

interface LangButtonProps {
  OpenPopup?: () => void;
  className?: string;
  isMenuOpen?: boolean;
  windowWidth?: number;
  handleLangChange?: (language: string) => void;
}

const LangButton: React.FC<LangButtonProps> = ({ OpenPopup, className, isMenuOpen, windowWidth, handleLangChange }) => {
  return (
    <div className={`${styles['lang-section']} ${className ? className : ''}`}>
      {(isMenuOpen || (windowWidth && windowWidth > 768)) && (
        <>
          <a className={styles['lang-section-link']} href="#" onClick={() => handleLangChange && handleLangChange('en')}>
            En
          </a>
          <img src={separator} alt="Разделитель" />
          <a className={styles['lang-section-link']} href="#" onClick={() => handleLangChange && handleLangChange('ru')}>
            Рус
          </a>
        </>
      )}
      {OpenPopup && <button className={styles['menu-button']} onClick={OpenPopup} />}
    </div>
  );
};

export default LangButton;
