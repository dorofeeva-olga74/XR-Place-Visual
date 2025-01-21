import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Logo.module.scss';
import LogoImg from '../../../vendor/images/Logo.svg';

interface LogoProps {
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  const { t } = useTranslation();
  const logoRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    if (logoRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div ref={logoRef} className={styles.logo}>
      <a className={styles.logo__box} href="#" onClick={handleLogoClick}>
        <img className={styles.logo__box_img} src={src || LogoImg} alt={t('components.footer.logoAlt')} />
      </a>
    </div>
  );
};

export default Logo;
