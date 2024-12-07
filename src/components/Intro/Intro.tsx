import { useEffect, useState } from 'react';
import styles from './Intro.module.scss';
import imgIntroBg1440 from '../../vendor/images/imgIntroBg1440.png';
import imgIntroBg768 from '../../vendor/images/imgIntroBg768.png';
import imgIntroBg360 from '../../vendor/images/imgIntroBg360.png';
import Header from '../Header/Header';
import IntroButton from '../Ui/IntroButton/IntroButton';

export default function Intro() {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (window.innerWidth >= 1440) {
      return 1440;
    } else if (window.innerWidth >= 768) {
      return 768;
    } else {
      return 360;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <section className={styles['intro']}>
      <Header windowWidth={windowWidth} />

      {/* это для iframe */}
      <img className={styles['intro-img']} src={windowWidth >= 1440 ? imgIntroBg1440 : windowWidth >= 768 ? imgIntroBg768 : imgIntroBg360} />

      <div className={styles['intro-text']}>
        <div className={styles['intro-text-leftbox']}>
          <p className={styles['intro-text-leftbox-text']}>Увеличьте продажи, используя новейшие 3D технологии для сайтов строительных компаний</p>
          <IntroButton children={'Назначить демо'} />
        </div>
        <div className={styles['intro-text-rightbox']}>
          {windowWidth >= 768 && <h1 className={styles['intro-text-rightbox-h1']}>XR PLACE</h1>}
          <p className={styles['intro-text-rightbox-text']}>Новый уровень визуализации недвижимости</p>
        </div>
      </div>
    </section>
  );
}
