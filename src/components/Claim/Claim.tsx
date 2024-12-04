import styles from './Claim.module.scss';
import { inputs } from '../../utils/consts';
import IntroButton from '../Ui/IntroButton/IntroButton';

function Input(input) {
  return <input className={styles.claim - input} name={input.name} placeholder={input.placeholder} required={input.required}></input>;
}

function Claim() {
  return (
    <div className={styles.claim__container}>
      <form>
        <h2 className={styles.claim - title}>Назначить демо</h2>
        {inputs.map((input, index) => {
          return <Input key={`${input.name} - ${index}`} input={input} />;
        })}
        <div className={styles.claim - button}>
          <IntroButton>Отправить заявку</IntroButton>
        </div>
        <small className={styles.claim - annotation}>
          Нажимая на кнопку, вы принимаете <span className={styles.claim - annotation}>условия использования</span> и <span className={styles.claim - annotation}>политику конфиденциальности</span>
        </small>
      </form>
    </div>
  );
}

export default Claim;
