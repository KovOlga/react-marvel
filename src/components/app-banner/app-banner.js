import styles from "./app-banner.module.css";

const AppBanner = ({ avangers, avangersLogo }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__cont}>
        <img src={avangers} alt="Avengers" />
        <div className={styles.banner__text}>
          <p className={styles.banner__paragraph}>New comics every week!</p>
          <p className={styles.banner__paragraph}>Stay tuned!</p>
        </div>
      </div>
      <img src={avangersLogo} alt="Avengers logo" />
    </div>
  );
};

export default AppBanner;
