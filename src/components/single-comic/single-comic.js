import styles from "./single-comic.module.css";

const SingleComic = ({ XM }) => {
  return (
    <div className={styles.comic}>
      <div className={styles.comic__cont}>
        <img src={XM} alt="x-men" className={styles.comic__img} />
        <div className={styles.comic__info}>
          <h2 className={styles.comic__name}>X-Men: Days of Future Past</h2>
          <p className={styles.comic__descr}>
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </p>
          <p className={styles.comic__descr}>144 pages</p>
          <p className={styles.comic__descr}>Language: en-us</p>
          <p className={styles.comic__price}>9.99$</p>
        </div>
      </div>
      <button className={styles.comic__back}>Back to all</button>
    </div>
  );
};

export default SingleComic;
