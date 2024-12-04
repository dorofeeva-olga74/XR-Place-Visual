import styles from './Claim.module.scss';
import { inputs } from '../../utils/consts';
import IntroButton from '../Ui/IntroButton/IntroButton';
import { useTranslation } from 'react-i18next';
import { FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { Claim as ClaimInputs } from '../../utils/api/apiTypes';

function Input({ input }) {
  const { t } = useTranslation();
  const { register } = useFormContext();
  return <input className={styles.claim__input} name={input.name} placeholder={t(`components.claim.${input.name}`)} required={input.required} {...register(input.name)}></input>;
}

function Claim() {
  const { t } = useTranslation();
  const methods = useForm<ClaimInputs>();
  const onSubmit: SubmitHandler<ClaimInputs> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className={styles.claim__container} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={styles.claim__title}>{t('components.claim.title')}</h2>
        <div className={styles.claim__inputs}>
          {inputs.map((input, index) => {
            return <Input key={`${input.name} - ${index}`} input={input} />;
          })}
        </div>
        <div className={styles.claim__button}>
          <IntroButton type="submit">{t('components.claim.submit')}</IntroButton>
        </div>
        <small className={styles.claim__annotation}>
          {t('components.claim.annotation')} <span className={styles.claim__policy}>{t('components.claim.policy1')}</span> {t('components.claim.and')} <span className={styles.claim__policy}>{t('components.claim.policy2')}</span>
        </small>
      </form>
    </FormProvider>
  );
}

export default Claim;
