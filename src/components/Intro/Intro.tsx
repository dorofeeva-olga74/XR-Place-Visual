import styles from './Intro.module.scss';
import imgIntroBg1440 from '../../vendor/images/imgIntroBg1440.png';
import imgIntroBg768 from '../../vendor/images/imgIntroBg768.png';
import imgIntroBg360 from '../../vendor/images/imgIntroBg360.png';
import IntroButton from '../Ui/IntroButton/IntroButton';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { width } = useWindowWidth();
  const { t } = useTranslation();
  return (
    <section className={styles['intro']}>
      {/* это для iframe */}
      <img className={styles['intro-img']} src={width >= 1440 ? imgIntroBg1440 : width >= 768 ? imgIntroBg768 : imgIntroBg360} alt={t('components.intro.background')} />
      <div className={styles['intro-text']}>
        <div className={styles['intro-text-leftbox']}>
          <p className={styles['intro-text-leftbox-text']}>{t('components.intro.leftboxtext')}</p>
          <IntroButton children={t('components.intro.button')} />
        </div>
        <div className={styles['intro-text-rightbox']}>
          {width >= 768 && <h1 className={styles['intro-text-rightbox-h1']}>XR PLACE</h1>}
          <p className={styles['intro-text-rightbox-text']}>{t('components.intro.rightboxtext')}</p>
        </div>
      </div>
    </section>
  );
}
