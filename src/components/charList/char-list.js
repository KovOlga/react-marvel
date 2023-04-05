import styles from "./char-list.module.css";

const CharList = ({ abyss }) => {
  return (
    <div className={styles.charlist}>
      <ul className={styles.charlist__list}>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li
          className={`${styles.charlist__item} ${styles.charlist__item_selected}`}
        >
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
        <li className={styles.charlist__item}>
          <img className={styles.charlist__img} src={abyss} alt="abyss" />
          <p className={styles.charlist__name}>Abyss</p>
        </li>
      </ul>
      <button
        className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
      >
        <p className={`${styles.inner} ${styles.inner__main}`}>load more</p>
      </button>
    </div>
  );
};

export default CharList;
