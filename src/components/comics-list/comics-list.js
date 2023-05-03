import styles from "./comics-list.module.css";
import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
import { Link } from "react-router-dom";

const ComicsList = () => {
  const { loading, error, getComics } = useMarvelService();

  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(260);
  const [charEnded, setCharEnded] = useState(false);

  useEffect(() => {
    loadInitialList();
  }, []);

  const loadInitialList = () => {
    getComics().then((comicsList) => {
      setComicsList(comicsList);
    });
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 3) {
      ended = true;
    }

    setComicsList((charList) => [...charList, ...newComicsList]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const onRequest = (offset) => {
    setNewItemLoading(true);
    getComics(offset).then(onComicsListLoaded);
  };

  const renderComics = (comicsArr) => {
    const items = comicsArr.map((comic) => {
      let imgStyle = { objectFit: "cover" };
      if (
        comic.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li key={comic.id} className={styles.item}>
          <Link to={`/comics/${comic.id}`}>
            <img
              src={comic.thumbnail}
              alt="x-men"
              className={styles.item__img}
              style={imgStyle}
            />
            <p className={styles.item__title}>{comic.title}</p>
            <p className={styles.item__price}>{comic.price}</p>
          </Link>
        </li>
      );
    });

    return <ul className={styles.list}>{items}</ul>;
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;
  const items = renderComics(comicsList);

  return (
    <div className="comics">
      {errorMessage}
      {spinner}
      {items}
      <button
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => {
          onRequest(offset);
        }}
        className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
      >
        <p className={`${styles.inner} ${styles.inner__main}`}>load more</p>
      </button>
    </div>
  );
};

export default ComicsList;
