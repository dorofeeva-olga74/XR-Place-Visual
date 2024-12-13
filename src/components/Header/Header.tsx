import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import LangButton from './LangButton/LangButton';
import Logo from '../../vendor/images/logo1.svg';
import { useState } from 'react';
import PopUp from './PopUp/PopUp';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';
import { LanguageContext, LanguageContextType } from '../../Context/LanguageContext';
import { useContext } from 'react';

export default function Header() {
  const { width } = useWindowWidth();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, handleLangChange } = useContext(LanguageContext) as LanguageContextType;

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (!language || !handleLangChange) {
    throw new Error('Контекст не найден');
  }

  return (
    <>
      <header className={styles['header']}>
        <div className={styles['header-logo-section']}>
          <img className={styles['header-logo-image']} src={Logo} alt={t('components.header.logotip')} />
          <p className={styles['header-logo-text']}>XR PLACE</p>
        </div>
        {width >= 1440 ? (
          <>
            <Navigation />
            <LangButton windowWidth={width} handleLangChange={handleLangChange} />
          </>
        ) : (
          !isMenuOpen && <LangButton OpenPopup={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />
        )}
      </header>
      {isMenuOpen && <PopUp ClosePopUp={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />}
    </>
  );
}
