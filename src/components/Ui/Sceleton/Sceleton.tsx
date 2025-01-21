import React from 'react';
import styles from './Sceleton.module.scss';

interface SceletonProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  radius?: string;
  startColor?: string;
  endColor?: string;
}
export const Sceleton: React.FC<SceletonProps> = ({ children, width, height, radius, startColor, endColor }) => {
  const gradientBackground = `linear-gradient(135deg, ${startColor} 0%, ${endColor} 25%, ${endColor} 75%, ${startColor} 100%)`;
  const gradientAnimation = `linear-gradient(135deg, ${startColor} 0%, ${endColor} 50%, ${startColor} 100%)`;

  return (
    <div className={styles.sceleton} style={{ width, height, borderRadius: radius, background: gradientBackground }}>
      {' '}
      {children}
      <div className={styles.sceleton__gradient} style={{ background: gradientAnimation }}></div>
    </div>
  );
};
