import styles from "./char-info.module.css";
import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
import Skeleton from "../skeleton/skeleton";
import useMarvelService from "../../services/MarvelService";
import { useContext } from "react";
import SelectedCharContext from "../context/charContext";
import CharSearchForm from "../char-search-form/char-search-form";

const CharInfo = () => {
  const { loading, error, getCharacter, clearError } = useMarvelService();
  const [char, setChar] = useState(null);

  const charId = useContext(SelectedCharContext);

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (!charId) {
      return;
    }
    clearError();
    getCharacter(charId).then((char) => {
      setChar(char);
    });
  };

  const skeleton = char || error || loading ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? (
    <CharView char={char} />
  ) : null;

  return (
    <div className={styles.oneChar}>
      <div className={styles.charInfo}>
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
      <CharSearchForm />
    </div>
  );
};

const CharView = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  let imageStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imageStyle = { objectFit: "contain" };
  }
  return (
    <>
      <div className={styles.charinfo__basics}>
        <img
          className={styles.charinfo__img}
          src={thumbnail}
          alt={name}
          style={imageStyle}
        />
        <div className={styles.charinfo__mini}>
          <h2 className={styles.charinfo__name}>{name}</h2>
          <div className={styles.charinfo__btns}>
            <a
              href={homepage}
              className={`${styles.button} ${styles.button__main}`}
            >
              <p className={`${styles.inner} ${styles.inner__main}`}>
                homepage
              </p>
            </a>
            <a
              href={wiki}
              className={`${styles.button} ${styles.button__secondary}`}
            >
              <p className={`${styles.inner} ${styles.inner__secondary}`}>
                Wiki
              </p>
            </a>
          </div>
        </div>
      </div>
      <p className={styles.charinfo__descr}>{description}</p>
      <div>
        <p className={styles.comics}>Comics:</p>
        <ul className={styles.comics__list}>
          {comics.length > 0 ? null : "No comics with this character"}
          {comics.map((comic, i) => {
            return (
              <li key={i} className={styles.comics__item}>
                {comic.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

// CharInfo.propTypes = {
//   charId: PropTypes.number,
// };

export default CharInfo;
