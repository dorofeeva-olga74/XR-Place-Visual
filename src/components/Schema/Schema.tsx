import styles from './Schema.module.scss';
import image from './../../vendor/images/Schema.png';
import { useSchema } from '../../utils/hooks/useSchema';
import { Lang, SchemaStage } from '../../utils/api/apiTypes';
import useWindowWidth from '../../utils/hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';
import { useRef, useContext } from 'react';
import { useInView } from 'motion/react';
import { LanguageContext } from '../../Context/LanguageContext';

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
        {width >= 360 && <Description />}
        <div className={styles.schema__image_container}>
          <img className={styles.schema__image} src={image}></img>
        </div>
      </div>
      <ul className={styles.schema__list}>
        {schema.isSuccess &&
          schema.data.map((item: SchemaStage) => {
            return (
              <li className={styles.schema__list_item} key={item.id}>
                <h3 className={styles.schema__list_item_title}>{item.title}</h3>
                <p className={styles.schema__list_item_description}>{item.description}</p>
                <div className={styles.schema__list_item_circle} />
              </li>
            );
          })}
      </ul>
      {width <= 360 && <Description />}
    </section>
  );
}

export default Schema;
