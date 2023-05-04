import styles from "./single-comic-page.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";

const SingleComicPage = () => {
  const { loading, error, getComic, clearError } = useMarvelService();
  const [comic, setComic] = useState(null);

  const { comicId } = useParams();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then((comic) => {
      setComic(comic);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, thumbnail, description, price, pageCount, language } = comic;
  return (
    <div className={styles.comic}>
      <div className={styles.comic__cont}>
        <img src={thumbnail} alt={title} className={styles.comic__img} />
        <div className={styles.comic__info}>
          <h2 className={styles.comic__name}>{title}</h2>
          <p className={styles.comic__descr}>{description}</p>
          <p className={styles.comic__descr}>{pageCount}</p>
          <p className={styles.comic__descr}>Language: {language}</p>
          <p className={styles.comic__price}>{price}</p>
        </div>
      </div>
      <Link to="/comics">
        <button className={styles.comic__back}>Back to all</button>
      </Link>
    </div>
  );
};

export default SingleComicPage;
