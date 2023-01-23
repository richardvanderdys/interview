import Link from 'next/link';
import styles from '@/styles/Case.module.css';

export default function Case() {
  return (
    <Link href={`/cases/${123}`} className={styles.case}>
      John Doe
    </Link>
  );
}
