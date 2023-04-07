import styles from "./char-list.module.css";
import { Component } from "react";
import CharListItem from "../char-list-item/char-list-item";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 260,
    charEnded: false,
  };

  componentDidMount() {
    this.loadInitialList();
  }

  onInitialListLoaded = (char) => {
    this.setState({ charList: char, loading: false });
  };

  loadInitialList() {
    this.props
      .getAllCharacters()
      .then(this.onInitialListLoaded)
      .catch(this.onError);
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.props
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 3) {
      ended = true;
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  renderItems(arr) {
    const items = arr.map((char) => {
      let imgStyle = { objectFit: "cover" };
      if (
        char.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }
      return (
        <CharListItem
          onClickItem={() => {
            this.props.onCharSelected(char.id);
          }}
          key={char.id}
          char={char}
          style={imgStyle}
        />
      );
    });

    return <ul className={styles.charlist__list}>{items}</ul>;
  }

  render() {
    const { loading, error, charList, newItemLoading, offset, charEnded } =
      this.state;
    const items = this.renderItems(charList);

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
            this.onRequest(offset);
          }}
          className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
        >
          <p className={`${styles.inner} ${styles.inner__main}`}>load more</p>
        </button>
      </div>
    );
  }
}

export default CharList;
