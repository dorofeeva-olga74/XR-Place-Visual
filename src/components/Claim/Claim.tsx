import styles from './Claim.module.scss';
import { inputs } from '../../utils/consts';
import IntroButton from '../Ui/IntroButton/IntroButton';

function Input({ input }) {
  return <input className={styles.claim__input} name={input.name} placeholder={input.placeholder} required={input.required}></input>;
}

function Claim() {
  return (
    <form className={styles.claim__container}>
      <h2 className={styles.claim__title}>НАЗНАЧИТЬ ДЕМО</h2>
      <div className={styles.claim__inputs}>
        {inputs.map((input, index) => {
          return <Input key={`${input.name} - ${index}`} input={input} />;
        })}
      </div>
      <div className={styles.claim__button}>
        <IntroButton>Отправить заявку</IntroButton>
      </div>
      <small className={styles.claim__annotation}>
        Нажимая на кнопку, вы принимаете <span className={styles.claim__policy}>условия использования</span> и <span className={styles.claim__policy}>политику конфиденциальности</span>
      </small>
    </form>
  );
}

export default Claim;
