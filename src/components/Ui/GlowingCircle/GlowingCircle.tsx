import React from 'react';
import styles from './GlowingCircle.module.scss';

interface GlowingCircleProps {
  size?: string;
  display?: string;
}

const GlowingCircle: React.FC<GlowingCircleProps> = ({ size = '50px', display = 'noon' }) => {
  return <div className={styles['glowing-circle']} style={{ '--circle-size': size, display: display } as React.CSSProperties}></div>;
};

export default GlowingCircle;
