import styles from "./random-char.module.css";
import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

const RandomChar = ({ mjolnir, getCharacter }) => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
  }, []);

  const onCharLoading = () => {
    setLoading(true);
    setError(false);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    onCharLoading();
    getCharacter(id).then(onCharLoaded).catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <ChangableContent char={char} /> : null;

  return (
    <div className={styles.randomchar}>
      {errorMessage}
      {spinner}
      {content}
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
        <button
          type="button"
          onClick={updateChar}
          className={`${styles.button} ${styles.button__main}`}
        >
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

const ChangableContent = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "contain" };
  }
  return (
    <div className={styles.randomchar__changeable}>
      <img
        src={thumbnail}
        alt="Random character"
        className={styles.randomchar__img}
        style={imgStyle}
      />
      <div className={styles.randomchar__info}>
        <p className={styles.randomchar__name}>{name}</p>
        <p className={styles.randomchar__descr}>{description}</p>
        <div className={styles.randomchar__btns}>
          <a
            href={homepage}
            className={`${styles.button} ${styles.button__main}`}
          >
            <p className={`${styles.inner} ${styles.inner__main}`}>homepage</p>
          </a>
          <a
            href={wiki}
            className={`${styles.button} ${styles.button__secondary}`}
          >
            <p className={`${styles.inner} ${styles.inner__secondary}`}>Wiki</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
