import React, { ButtonHTMLAttributes } from 'react';
import styles from './IntroButton.module.scss';
import { Sceleton } from '../Sceleton/Sceleton';

interface IntroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IntroButton: React.FC<IntroButtonProps> = ({ children, type = 'button', ...props }) => {
  return (
    <Sceleton width="100%" height="60px" radius="8px">
      <button className={styles.button} type={type} {...props}>
        {children}
      </button>
    </Sceleton>
  );
};

export default IntroButton;
