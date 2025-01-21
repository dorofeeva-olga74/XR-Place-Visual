import { useRef, useEffect, useState } from 'react';
import styles from './Claim.module.scss';
import { inputs } from '../../utils/consts';
import IntroButton from '../Ui/IntroButton/IntroButton';
import { useTranslation } from 'react-i18next';
import { FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { Claim as ClaimInputs } from '../../utils/api/apiTypes';
import { useClaim } from '../../utils/hooks/useClaim';
import { motion, useInView } from 'motion/react';
import { Sceleton } from '../Ui/Sceleton/Sceleton';

function Input({ input, handleFocus }: { input: { name: keyof ClaimInputs; required: boolean }; handleFocus: () => void }) {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.claim__inputSet}>
      <input className={`${styles.claim__inputSet_input} ${errors[input.name] ? styles.inputError : ''}`} placeholder={t(`components.claim.${input.name}`)} required={input.required} {...register(input.name)} onFocus={handleFocus} />
      {errors[input.name] && <span className={styles.error}>{t('components.claim.error')}</span>}
    </div>
  );
}

function Claim() {
  const { t } = useTranslation();
  const methods = useForm<ClaimInputs>({ mode: 'onBlur' });
  const { createClaim } = useClaim('RU');

  const ref = useRef<HTMLFormElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [isVisible, setIsVisible] = useState(false);
  const [touched, setTouched] = useState(false);
  const [showResponse, setShowResponse] = useState(true);
  const startColor = '#a5a7a7';
  const endColor = '#a5a7a7';

  const onSubmit: SubmitHandler<ClaimInputs> = (data) => {
    createClaim.mutateAsync(data);
    setShowResponse(true);
  };

  useEffect(() => {
    if (createClaim.isSuccess) {
      methods.reset();
    }
  }, [createClaim.isSuccess, methods]);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  const handleFocus = () => {
    setTouched(true);
    setShowResponse(false);
  };
  const watchFields = methods.watch();
  const isFormValid = inputs.slice(0, -1).every((input) => watchFields[input.name]);

  return (
    <FormProvider {...methods}>
      <form id="claim-form" ref={ref} className={styles.claim} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={styles.claim__title}>{t('components.claim.title')}</h2>
        <motion.div className={styles.claim__ray} initial={{ opacity: 0, height: 0 }} animate={isVisible ? { opacity: 1, height: '100%' } : { opacity: 0, height: '0%' }} transition={{ delay: 0.2, duration: 1.5, ease: 'linear' }}>
          <Sceleton height="100%" width="1px" radius="0" startColor={startColor} endColor={endColor}></Sceleton>
        </motion.div>
        <div className={styles.claim__inputs}>
          {inputs.map((input, index) => {
            return <Input key={`${input.name} - ${index}`} input={input} handleFocus={handleFocus} />;
          })}
        </div>
        <div className={styles.claim__button}>
          <IntroButton type="submit" disabled={touched && (!isFormValid || createClaim.isPending)}>
            {createClaim.isPending ? t('components.claim.submitting') : t('components.claim.submit')}
          </IntroButton>
          {createClaim.isSuccess && showResponse && <span className={styles.claim__button_response}>{createClaim.data.message}</span>}
        </div>
        <small className={styles.claim__annotation}>
          {t('components.claim.annotation')} <span className={styles.claim__annotation_policy}>{t('components.claim.policy1')}</span> {t('components.claim.and')} <span className={styles.claim__policy}>{t('components.claim.policy2')}</span>
        </small>
      </form>
    </FormProvider>
  );
}

export default Claim;
