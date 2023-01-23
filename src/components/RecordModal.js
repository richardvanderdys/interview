import styles from '@/styles/RecordModal.module.css';

export default function RecordModal({ showing, onRecord }) {
  // TODO: Implement

  return (
    <div className={styles.modal}>
      <input type="text" placeholder="Patient Name" />
      <textarea placeholder="Visit Notes" />
      <button>Record</button>
    </div>
  );
}
