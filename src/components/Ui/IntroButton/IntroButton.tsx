import React, { ButtonHTMLAttributes } from 'react';
import styles from './IntroButton.module.scss';

interface IntroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IntroButton: React.FC<IntroButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props} type="button">
      {children}
    </button>
  );
};

export default IntroButton;
