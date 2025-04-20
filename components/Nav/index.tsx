import SearchField from '@/components/SearchField';
import styles from './index.module.css';
import { Suspense } from 'react';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Suspense fallback={<input type="search" className="loading" placeholder="Loading..." />}>
        <SearchField />
      </Suspense>
    </nav>
  );
}
