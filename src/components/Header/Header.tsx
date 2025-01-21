import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from '../Ui/Logo/Logo';
import { useState, useContext } from 'react';
import PopUp from './PopUp/PopUp';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { LanguageContext, LanguageContextType } from '../../Context/LanguageContext';
import { WINDOW_WIDTH_LARGE } from '../../utils/consts';

export default function Header() {
  const { width } = useWindowWidth();
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
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Logo />
          <p className={styles.header__logo_text}>XR PLACE</p>
        </div>
        {width <= WINDOW_WIDTH_LARGE ? (
          !isMenuOpen && <HeaderButton OpenPopup={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />
        ) : (
          <>
            <Navigation />
            <HeaderButton windowWidth={width} handleLangChange={handleLangChange} />
          </>
        )}
      </header>
      <PopUp ClosePopUp={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />
    </>
  );
}
