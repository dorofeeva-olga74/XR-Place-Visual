import { useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import styles from './PopUp.module.scss';
import HeaderButton from '../HeaderButton/HeaderButton';
import Navigation from '../Navigation/Navigation';
import Logo from '../../Ui/Logo/Logo';
import { Lang } from '../../../utils/api/apiTypes';

interface PopUpProps {
  ClosePopUp: () => void;
  isMenuOpen?: boolean;
  windowWidth?: number;
  handleLangChange: (language: Lang) => void;
}

const PopUp: React.FC<PopUpProps> = ({ ClosePopUp, isMenuOpen, windowWidth, handleLangChange }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        ClosePopUp();
      }
    },
    [ClosePopUp]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains(styles.popup) || target.tagName === 'A' || (!target.closest(`.${styles.popup__logo}`) && !target.closest(`.${styles.popup__header_langbutton}`))) {
      ClosePopUp();
    }
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    ClosePopUp();
  };

  return (
    <motion.section className={`${styles.popup}`} initial={{ opacity: 0, translateX: '-100%' }} animate={{ opacity: isMenuOpen ? 1 : 0, translateX: isMenuOpen ? 0 : '-100%' }} transition={{ duration: 0.7, delay: 0.1, ease: 'linear' }} onClick={handleOverlayClick}>
      <div className={styles.popup__header}>
        <div className={styles.popup__header_logo}>
          <Logo />
          <p className={styles.popup__header_logo_text}>XR PLACE</p>
        </div>
        <button className={styles.popup__header_buttonClose} onClick={handleButtonClick}></button>
      </div>
      <HeaderButton className={styles.popup__header_langbutton} windowWidth={windowWidth} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />
      <Navigation className={styles.popup__header_navigation} />
    </motion.section>
  );
};

export default PopUp;
