import styles from "./comics-list.module.css";

const ComicsList = ({ UW, XM }) => {
  return (
    <div className="comics">
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={UW} alt="ultimate war" className={styles.item__img} />
          <p className={styles.item__title}>
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </p>
          <p className={styles.item__price}>9.99$</p>
        </li>
        <li className={styles.item}>
          <img src={XM} alt="x-men" className={styles.item__img} />
          <p className={styles.item__title}>X-Men: Days of Future Past</p>
          <p className={styles.item__price}>NOT AVAILABLE</p>
        </li>
        <li className={styles.item}>
          <img src={UW} alt="ultimate war" className={styles.item__img} />
          <p className={styles.item__title}>
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </p>
          <p className={styles.item__price}>9.99$</p>
        </li>
        <li className={styles.item}>
          <img src={XM} alt="x-men" className={styles.item__img} />
          <p className={styles.item__title}>X-Men: Days of Future Past</p>
          <p className={styles.item__price}>NOT AVAILABLE</p>
        </li>
        <li className={styles.item}>
          <img src={UW} alt="ultimate war" className={styles.item__img} />
          <p className={styles.item__title}>
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </p>
          <p className={styles.item__price}>9.99$</p>
        </li>
        <li className={styles.item}>
          <img src={XM} alt="x-men" className={styles.item__img} />
          <p className={styles.item__title}>X-Men: Days of Future Past</p>
          <p className={styles.item__price}>NOT AVAILABLE</p>
        </li>
        <li className={styles.item}>
          <img src={UW} alt="ultimate war" className={styles.item__img} />
          <p className={styles.item__title}>
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </p>
          <p className={styles.item__price}>9.99$</p>
        </li>
        <li className={styles.item}>
          <img src={XM} alt="x-men" className={styles.item__img} />
          <p className={styles.item__title}>X-Men: Days of Future Past</p>
          <p className={styles.item__price}>NOT AVAILABLE</p>
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

export default ComicsList;
