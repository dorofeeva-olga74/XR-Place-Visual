import { ReactElement } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
