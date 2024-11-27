import React, { ButtonHTMLAttributes } from 'react';
import styles from './IntroButton.module.scss';

interface IntroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IntroButton: React.FC<IntroButtonProps> = ({ children, type = 'button', ...props }) => {
  return (
    <button className={styles.button} type={type} {...props}>
      {children}
    </button>
  );
};

export default IntroButton;
