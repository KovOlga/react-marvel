import styles from "./char-list.module.css";
import { useState, useEffect, useRef } from "react";
import CharListItem from "../char-list-item/char-list-item";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

const CharList = ({ getAllCharacters, onCharSelected }) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(260);
  const [charEnded, setCharEnded] = useState(false);

  useEffect(() => {
    loadInitialList();
  }, []);

  const onInitialListLoaded = (char) => {
    setCharList(char);
    setLoading(false);
  };

  const loadInitialList = () => {
    getAllCharacters().then(onInitialListLoaded).catch(onError);
  };

  const onRequest = (offset) => {
    onCharListLoading();
    getAllCharacters(offset).then(onCharListLoaded).catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 3) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current[id].focus();
  };

  const renderItems = (arr) => {
    const items = arr.map((char, i) => {
      let imgStyle = { objectFit: "cover" };
      if (
        char.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }
      return (
        <CharListItem
          ref={(el) => (itemRefs.current[i] = el)}
          onClickItem={() => {
            onCharSelected(char.id);
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === " " || e.key === "Enter") {
              onCharSelected(char.id);
              focusOnItem(i);
            }
          }}
          key={char.id}
          char={char}
          style={imgStyle}
        />
      );
    });

    return <ul className={styles.charlist__list}>{items}</ul>;
  };

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? items : null;

  return (
    <div className={styles.charlist}>
      {errorMessage}
      {spinner}
      {content}
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

export default CharList;
