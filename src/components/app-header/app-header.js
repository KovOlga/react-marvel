import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.app__header}>
      <h1 className={styles.app__title}>
        <span className={styles.app__title_span}>Marvel </span>
        information portal
      </h1>
      <nav className={styles.app__menu}>
        <ul className={styles.app__menu_list}>
          <li className={styles.app__menu_item}>
            <button type="button" className={styles.app__menu_btn}>
              Characters
            </button>
          </li>
          <li className={styles.app__menu_item}>
            <button type="button" className={styles.app__menu_btn}>
              Comics
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
