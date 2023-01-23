import Link from 'next/link';
import styles from '@/styles/CaseDetails.module.css';

export default function CaseDetail() {
  return (
    <div className={styles.container}>
      <Link href="/">Back to cases</Link>
      <main>
        <h1>John Doe</h1>
        <h4>Status</h4>
        <div>Open</div>
        <h4>Visit Details</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.actions}>actions not yet implemented</div>
      </main>
    </div>
  );
}
