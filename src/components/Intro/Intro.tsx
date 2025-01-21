import { MouseEvent } from 'react';
import styles from './Intro.module.scss';
import imgIntroBg1440 from '../../vendor/images/imgIntroBg1440.png';
import imgIntroBg760 from '../../vendor/images/imgIntroBg760.png';
import IntroButton from '../Ui/IntroButton/IntroButton';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';
import { WINDOW_WIDTH_LARGE } from '../../utils/consts';

export default function Intro() {
  const { width } = useWindowWidth();
  const { t } = useTranslation();

  const handleDemoClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formElement = document.getElementById('claim-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.intro}>
      <img className={styles.intro__img} src={width <= WINDOW_WIDTH_LARGE ? imgIntroBg760 : imgIntroBg1440} alt={t('components.intro.background')} />
      <div className={styles.intro__text}>
        <div className={styles.intro__text_leftbox}>
          <p className={styles.intro__text_leftbox_text}>{t('components.intro.leftboxtext')}</p>
          <IntroButton children={t('components.intro.button')} onClick={handleDemoClick} />
        </div>
        <div className={styles.intro__text_rightbox}>
          <h1 className={styles.intro__text_rightbox_title}>XR PLACE</h1>
          <p className={styles.intro__text_rightbox_text}>{t('components.intro.rightboxtext')}</p>
        </div>
      </div>
    </section>
  );
}
