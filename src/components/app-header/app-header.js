import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <span className={styles.header__span}>Marvel </span>
        information portal
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <button type="button" className={styles.nav__btn}>
              Characters
            </button>
          </li>
          <li className={styles.nav__item}>
            <p className={styles.nav__slash}> / </p>
          </li>
          <li className={styles.nav__item}>
            <button type="button" className={styles.nav__btn}>
              Comics
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
