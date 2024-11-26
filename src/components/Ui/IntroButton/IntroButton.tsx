import React from 'react';
import styles from './IntroButton.module.scss';

interface IntroButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const IntroButton: React.FC<IntroButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <button className={styles.button} type="button" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default IntroButton;
