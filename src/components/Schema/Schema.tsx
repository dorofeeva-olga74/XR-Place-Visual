import styles from './Schema.module.scss';
import image from './../../vendor/images/Schema.png';
import { useSchema } from '../../utils/hooks/useSchema';
import { SchemaStage } from '../../utils/api/apiTypes';
import useWindowWidth from '../../utils/hooks/useWindowWidth';

function Description() {
  return (
    <p className={styles.schema__description}>
      <span className={styles.schema__description_span}>Выбирая нас, </span>
      вы получаете гарантию качества, внимание к деталям и соблюдение сроков
    </p>
  );
}

function Schema() {
  const schema = useSchema('RU');
  const { width } = useWindowWidth();

  return (
    <section className={styles.schema__container}>
      <div className={styles.schema__overview}>
        <h2 className={styles.schema__title}>СХЕМА РАБОТЫ</h2>
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
