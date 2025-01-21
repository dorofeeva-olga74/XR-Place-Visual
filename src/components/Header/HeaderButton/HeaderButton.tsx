import styles from './HeaderButton.module.scss';
import { Lang } from '../../../utils/api/apiTypes';
import { useState } from 'react';
import { WINDOW_WIDTH_TABLET } from '../../../utils/consts';

interface HeaderButtonProps {
  OpenPopup?: () => void;
  className?: string;
  isMenuOpen?: boolean;
  windowWidth?: number;
  handleLangChange: (language: Lang) => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ OpenPopup, className, isMenuOpen, windowWidth, handleLangChange }) => {
  const [activeLang, setActiveLang] = useState<Lang | null>(null);

  const onLanguageClickHandler = (language: Lang) => {
    setActiveLang(language);
    handleLangChange(language);
  };

  return (
    <div className={`${styles.headerButton} ${className ? className : ''}`}>
      {(isMenuOpen || (windowWidth && windowWidth > WINDOW_WIDTH_TABLET)) && (
        <>
          <button type="button" className={`${styles.headerButton__lang} ${activeLang === 'EN' ? styles.headerButton__lang_active : ''}`} onClick={() => onLanguageClickHandler('EN')}>
            En
          </button>
          <div className={styles.headerButton__separator}></div>
          <button type="button" className={`${styles.headerButton__lang} ${activeLang === 'RU' ? styles.headerButton__lang_active : ''}`} onClick={() => onLanguageClickHandler('RU')}>
            Рус
          </button>
        </>
      )}
      {OpenPopup && <button className={styles.headerButton__menu} onClick={OpenPopup} />}
    </div>
  );
};

export default HeaderButton;
