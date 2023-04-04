import styles from "./random-char.module.css";

const RandomChar = ({ thor, mjolnir }) => {
  return (
    <div className={styles.randomchar}>
      <div className={styles.randomchar__container}>
        <img
          src={thor}
          alt="Random character"
          className={styles.randomchar__img}
        />
        <div className={styles.randomchar__info}>
          <p className={styles.randomchar__name}>Thor</p>
          <p className={styles.randomchar__descr}>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div className={styles.randomchar__btns}>
            <button className={`${styles.button} ${styles.button__main}`}>
              <p className={`${styles.inner} ${styles.inner__main}`}>
                homepage
              </p>
            </button>
            <button className={`${styles.button} ${styles.button__secondary}`}>
              <p className={`${styles.inner} ${styles.inner__secondary}`}>
                Wiki
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.randomchar__static}>
        <div className={styles.randomchar__textContainer}>
          <div className={styles.randomchar__title}>
            <p className={styles.randomchar__text}>
              Random character for today!
            </p>
            <p className={styles.randomchar__text}>
              Do you want to get to know him better?
            </p>
          </div>
          <p className={styles.randomchar__text}>Or choose another one</p>
        </div>
        <button className={`${styles.button} ${styles.button__main}`}>
          <p className={`${styles.inner} ${styles.inner__main}`}>try it</p>
        </button>
        <img
          src={mjolnir}
          alt="mjolnir"
          className={styles.randomchar__decoration}
        />
      </div>
    </div>
  );
};

export default RandomChar;
