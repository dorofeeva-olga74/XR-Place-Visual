import React from 'react';
import styles from './Sceleton.module.scss';

interface SceletonProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  radius?: string;
}

export const Sceleton: React.FC<SceletonProps> = ({ children, width, height, radius }) => {
  return (
    <div className={styles.sceleton} style={{ width, height, borderRadius: radius }}>
      {children}
    </div>
  );
};
