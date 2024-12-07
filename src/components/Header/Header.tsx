import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import LangButton from './LangButton/LangButton';
import Logo from '../../vendor/images/logo1.svg';
import { useState } from 'react';
import PopUp from './PopUp/PopUp';

interface HeaderProps {
  windowWidth: number;
}

const Header: React.FC<HeaderProps> = ({ windowWidth }) => {
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
        {windowWidth >= 1440 ? (
          <>
            <Navigation />
            <LangButton />
          </>
        ) : (
          <LangButton OpenPopup={handleMenuOpen} />
        )}
      </header>
      {isMenuOpen && <PopUp ClosePopUp={handleMenuOpen} />}
    </>
  );
};

export default Header;
