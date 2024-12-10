import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import LangButton from './LangButton/LangButton';
import Logo from '../../vendor/images/logo1.svg';
import { useState } from 'react';
import PopUp from './PopUp/PopUp';
import useWindowWidth from '../../utils/hooks/useWindowWidth';

export default function Header() {
  const { width } = useWindowWidth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles['header']}>
        <div className={styles['header-logo-section']}>
          <img className={styles['header-logo-image']} src={Logo} alt="Логотип" />
          <p className={styles['header-logo-text']}>XR PLACE</p>
        </div>
        {width >= 1440 ? (
          <>
            <Navigation />
            <LangButton windowWidth={width} />
          </>
        ) : (
          !isMenuOpen && <LangButton OpenPopup={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} />
        )}
      </header>
      {isMenuOpen && <PopUp ClosePopUp={handleMenuOpen} windowWidth={width} isMenuOpen={isMenuOpen} />}
    </>
  );
}
