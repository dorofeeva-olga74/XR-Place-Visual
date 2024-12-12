import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesTextSection.module.scss';

const FeaturesTextSection: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(styles.visible);
          element.classList.remove(styles.hidden);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
  <div className={styles.shimmerTextSet} ref={ref}>
     <p className={styles.shimmerText}>
       {t('components.widget.featuresTextSection.p')}
       <span className={styles.shimmerSpan}>{t('components.widget.featuresTextSection.span')}</span>
        {t('components.widget.featuresTextSection.p2')}
      </p>
    </div>
  );
};

export default FeaturesTextSection;
