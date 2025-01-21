import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import LinksConnection from './LinksConnection/LinksConnection';
import { Sceleton } from '../Ui/Sceleton/Sceleton';
import IconsInstagram from '../../vendor/images/icon-instagram.svg';
import IconsLinkedin from '../../vendor/images/icon-linkedin.svg';
import Logo from '../Ui/Logo/Logo';

interface FooterProps {
  src?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  const [isVisible, setIsVisible] = useState(false);
  const startColor = '#080808';
  const endColor = '#878787';

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <>
      <motion.footer className={styles.footer} ref={ref}>
        <motion.div className={styles.footer__gradient} initial={{ opacity: 0, x: '-150%' }} animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-150%' }} transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}>
          <Sceleton width="100%" height="2px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
        <div className={styles.footer__logoContainer}>
          <Logo />
        </div>
        <div className={styles.footer__logoSet}>
          <LinksConnection href="https://hello@xrplace.io" text="hello@xrplace.io" gridArea="logoText" />
        </div>
        <h1 className={styles.footer__logoTitle}>XR PLACE</h1>
        <p className={styles.footer__descriptionText}>{t('components.footer.description')}</p>
        <div className={styles.footer__socialBox}>
          <LinksConnection src={IconsInstagram} href="https://instagram.com" />
          <LinksConnection src={IconsLinkedin} href="https://linkedin.com" />
        </div>
        <div className={styles.footer__addressSet}>
          <span className={styles.footer__addressSet_address}>
            Melikishvili str. 92/16
            <br />
            6004 Batumi, Georgia
          </span>
          <LinksConnection href="https://yourdocumentlink.com" text={t('components.footer.conditions')} />
          <LinksConnection href="https://yourdocumentlink.com" text={t('components.footer.confidentiality')} />
          <span className={styles.footer__addressSet_address}>© 2024 XR PLACE. {t('components.footer.allRightsReserved')}</span>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
