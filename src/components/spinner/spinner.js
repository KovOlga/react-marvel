import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cssload__loader}>
        <div
          className={`${styles.cssload__inner} ${styles.cssload__one}`}
        ></div>
        <div
          className={`${styles.cssload__inner} ${styles.cssload__two}`}
        ></div>
        <div
          className={`${styles.cssload__inner} ${styles.cssload__three}`}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
