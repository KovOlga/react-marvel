import styles from "./app-header.module.css";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <Link to="/" className={styles.header__title}>
          <span className={styles.header__span}>Marvel </span>
          information portal
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
              to="/"
              className={styles.nav__btn}
            >
              Characters
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <p className={styles.nav__slash}> / </p>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
              to="/comics"
              className={styles.nav__btn}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
