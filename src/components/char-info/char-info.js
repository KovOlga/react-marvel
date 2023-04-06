import styles from "./char-info.module.css";

const CharInfo = ({ thor }) => {
  return (
    <>
      <div className={styles.charinfo__basics}>
        <img className={styles.charinfo__img} src={thor} alt="abyss" />
        <div className={styles.charinfo__mini}>
          <h2 className={styles.charinfo__name}>thor</h2>
          <div className={styles.charinfo__btns}>
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
      <p className={styles.charinfo__descr}>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <div>
        <p className={styles.comics}>Comics:</p>
        <ul className={styles.comics__list}>
          <li className={styles.comics__item}>
            All-Winners Squad: Band of Heroes (2011) #3
          </li>
          <li className={styles.comics__item}>Alpha Flight (1983) #50</li>
          <li className={styles.comics__item}>
            Amazing Spider-Man (1999) #503
          </li>
          <li className={styles.comics__item}>
            Amazing Spider-Man (1999) #504
          </li>
          <li className={styles.comics__item}>
            AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
          </li>
          <li className={styles.comics__item}>
            Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
          </li>
          <li className={styles.comics__item}>
            Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
          </li>
          <li className={styles.comics__item}>Vengeance (2011) #4</li>
          <li className={styles.comics__item}>Avengers (1963) #1</li>
          <li className={styles.comics__item}>Avengers (1996) #1</li>
        </ul>
      </div>
    </>
  );
};

export default CharInfo;
