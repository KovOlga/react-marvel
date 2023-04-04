import styles from "./char-list.module.css";

const CharList = ({ abyss }) => {
  return (
    <div className={styles.char__container}>
      <ul className={styles.char__list}>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={`${styles.char__item} ${styles.char__item_selected}`}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
        </li>
        <li className={styles.char__item}>
          <img className={styles.char__img} src={abyss} alt="abyss" />
          <p className={styles.char__name}>Abyss</p>
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
