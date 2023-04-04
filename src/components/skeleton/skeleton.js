import styles from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <>
      <p className={styles.title}>
        Please select a character to see information
      </p>
      <div className={styles.skeleton}>
        <div className={`${styles.pulse} ${styles.skeleton__header}`}>
          <div className={`${styles.pulse} ${styles.skeleton__circle}`}></div>
          <div className={`${styles.pulse} ${styles.skeleton__mini}`}></div>
        </div>
        <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
        <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
        <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
      </div>
    </>
  );
};

export default Skeleton;
