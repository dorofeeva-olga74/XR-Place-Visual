import React from 'react';
import styles from './LinksConnection.module.scss';

interface LinksConnectionProps {
  src?: string;
  href: string;
  alt?: string;
  text?: string;
  gridArea?: string;
}

const LinksConnection: React.FC<LinksConnectionProps> = ({ src, href, alt, text, gridArea }) => {
  const textClass = gridArea === 'logoText' ? styles.linksConnection__textLogo : styles.linksConnection__text;

  return (
    <a href={href} className={styles.linksConnection} target="_blank" rel="noreferrer">
      {src && <img src={src} alt={alt || 'Link Icon'} className={styles.linksConnection__img} />}
      {text && <span className={textClass}>{text}</span>}
    </a>
  );
};
export default LinksConnection;
