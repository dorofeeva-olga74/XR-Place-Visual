import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import LinksConnection from './LinksConnection/LinksConnection';
import IconsInstagram from '../../vendor/images/icon-instagram.svg';
import IconsLinkedin from '../../vendor/images/icon-linkedin.svg';
import Logo from '../../vendor/images/Logo.svg';

interface FooterProps {
  src?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <img className={styles.footer__logoImg} src={Logo} alt={t('components.footer.logoAlt')} style={{ gridArea: 'logoImg' }} />
      <div className={styles.footer__logoSet} style={{ gridArea: 'logoText' }}>
        <LinksConnection href="https://hello@xrplace.io" text="hello@xrplace.io" gridArea="logoText" />
      </div>
      <h1 className={styles.footer__logoTitle} style={{ gridArea: 'logoTitle' }}>
        XR PLACE
      </h1>
      <p className={styles.footer__descriptionText} style={{ gridArea: 'descriptionText' }}>
        {t('components.footer.description')}
      </p>
      <div className={styles.footer__socialBox} style={{ gridArea: 'socialBox' }}>
        <LinksConnection src={IconsInstagram} href="https://instagram.com" />
        <LinksConnection src={IconsLinkedin} href="https://linkedin.com" />
      </div>
      <div className={styles.footer__addressSet} style={{ gridArea: 'address' }}>
        <span className={styles.footer__address}>
          Melikishvili str. 92/16
          <br />
          6004 Batumi, Georgia
        </span>
        <LinksConnection href="https://yourdocumentlink.com" text={t('components.footer.conditions')} />
        <LinksConnection href="https://yourdocumentlink.com" text={t('components.footer.confidentiality')} />
        <span className={styles.footer__address}>
          © {new Date().getFullYear()} XR PLACE. {t('components.footer.allRightsReserved')}
        </span>
      </div>
    </div>
  );
};

export default Footer;
