import styles from "./char-list.module.css";
import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CharListItem from "../char-list-item/char-list-item";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
import useMarvelService from "../../services/MarvelService";

const CharList = ({ onCharSelected }) => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(260);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    loadInitialList();
  }, []);

  const loadInitialList = () => {
    getAllCharacters().then((char) => {
      setCharList(char);
    });
  };

  const onRequest = (offset) => {
    setNewItemLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 3) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
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
        <CSSTransition
          key={char.id}
          timeout={500}
          classNames={{
            enter: styles.char__item_enter,
            enterActive: styles.char__item_enter_active,
          }}
        >
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
        </CSSTransition>
      );
    });

    return (
      <ul className={styles.charlist__list}>
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  };

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className={styles.charlist}>
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

export default CharList;
