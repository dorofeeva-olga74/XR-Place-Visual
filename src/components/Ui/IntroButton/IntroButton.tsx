import React, { ButtonHTMLAttributes } from 'react';
import styles from './IntroButton.module.scss';
import { Sceleton } from '../Sceleton/Sceleton';

interface IntroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const IntroButton: React.FC<IntroButtonProps> = ({ children, type = 'button', ...props }) => {
  const startColor = 'rgba(0, 177, 184, 1)';
  const endColor = 'rgba(245, 245, 245, 1)';
  return (
    <Sceleton width="100%" height="60px" radius="8px" startColor={startColor} endColor={endColor}>
      <button className={styles.button} type={type} {...props}>
        {children}
      </button>
    </Sceleton>
  );
};

export default IntroButton;
