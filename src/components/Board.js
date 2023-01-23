import styles from '@/styles/Board.module.css';
import Case from './Case';
import RecordModal from './RecordModal';

export default function Board() {
  // TODO: Pull cases using API route

  return (
    <div className={styles.board}>
      <div className={styles.columns}>
        <div className={styles.list}>
          <h3>To Code</h3>
          <div className={styles.cases}>
            <Case />
          </div>
        </div>
        <div className={styles.list}>
          <h3>To Review</h3>
          <div className={styles.cases}>
            <Case />
            <Case />
          </div>
        </div>
        <div className={styles.list}>
          <h3>To Bill</h3>
          <div className={styles.cases}>
            <Case />
          </div>
        </div>
      </div>
      <button>Record Visit</button>
      <RecordModal />
    </div>
  );
}
