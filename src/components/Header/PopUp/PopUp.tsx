import styles from './PopUp.module.scss';
import LangButton from '../LangButton/LangButton';
import Navigation from '../Navigation/Navigation';
import Logo from '../../../vendor/images/logo1.svg';

interface PopUpProps {
  ClosePopUp: () => void;
  isMenuOpen?: boolean;
  windowWidth?: number;
  handleLangChange: (language: 'RU' | 'EN') => void;
}

const PopUp: React.FC<PopUpProps> = ({ ClosePopUp, isMenuOpen, windowWidth, handleLangChange }) => {
  return (
    <div className={styles['popup']}>
      <div className={styles['popup-header']}>
        <div className={styles['popup-logo']}>
          <img src={Logo} alt="Логотип" />
          <p className={styles['popup-logo-text']}>XR PLACE</p>
        </div>
        <button className={styles['popup-button']} onClick={ClosePopUp}></button>
      </div>
      <LangButton className={styles['popup-langbutton']} windowWidth={windowWidth} isMenuOpen={isMenuOpen} handleLangChange={handleLangChange} />
      <Navigation className={styles['popup-navigation']} />
    </div>
  );
};

export default PopUp;
