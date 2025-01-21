import { useContext, useRef } from 'react';
import { useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Lang } from '../../utils/api/apiTypes';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { LanguageContext } from '../../Context/LanguageContext';
import { useSchema } from '../../utils/hooks/useSchema';
import styles from './Schema.module.scss';
import image from './../../vendor/images/Schema.png';
import SchemaList from './SchemaList/SchemaList';
import { WINDOW_WIDTH_TABLET } from '../../utils/consts';

function Description() {
  const { t } = useTranslation();
  return (
    <p className={styles.schema__description}>
      <span className={styles.schema__description_span}>{t('components.schema.descriptionSpan')}</span>
      {t('components.schema.description')}
    </p>
  );
}

function Schema() {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const schema = useSchema(language as Lang, isInView);
  const { width } = useWindowWidth();

  return (
    <section id="schema" ref={ref} className={styles.schema__container}>
      <div className={styles.schema__overview}>
        <h2 className={styles.schema__title}>{t('components.schema.title')}</h2>
        {width >= WINDOW_WIDTH_TABLET && <Description />}
        <div className={styles.schema__image_container}>
          <img className={styles.schema__image} src={image} alt={t('components.schema.image')} />
        </div>
      </div>
      {schema.isSuccess && <SchemaList data={schema.data} />}
      {width <= WINDOW_WIDTH_TABLET && <Description />}
    </section>
  );
}

export default Schema;
