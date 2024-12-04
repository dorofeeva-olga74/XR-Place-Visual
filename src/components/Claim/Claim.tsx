import styles from './Claim.module.scss';
import { inputs } from '../../utils/consts';
import IntroButton from '../Ui/IntroButton/IntroButton';
import { useTranslation } from 'react-i18next';

function Input({ input }) {
  const { t } = useTranslation();
  return <input className={styles.claim__input} name={input.name} placeholder={t(`components.claim.${input.name}`)} required={input.required}></input>;
}

function Claim() {
  const { t } = useTranslation();
  return (
    <form className={styles.claim__container}>
      <h2 className={styles.claim__title}>{t('components.claim.title')}</h2>
      <div className={styles.claim__inputs}>
        {inputs.map((input, index) => {
          return <Input key={`${input.name} - ${index}`} input={input} />;
        })}
      </div>
      <div className={styles.claim__button}>
        <IntroButton>{t('components.claim.submit')}</IntroButton>
      </div>
      <small className={styles.claim__annotation}>
        {t('components.claim.annotation')} <span className={styles.claim__policy}>{t('components.claim.policy1')}</span> {t('components.claim.and')} <span className={styles.claim__policy}>{t('components.claim.policy2')}</span>
      </small>
    </form>
  );
}

export default Claim;
