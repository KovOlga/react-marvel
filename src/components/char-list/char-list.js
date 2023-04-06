import styles from "./char-list.module.css";
import { Component } from "react";
import CharListItem from "../char-list-item/char-list-item";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

class CharList extends Component {
  state = {
    loading: true,
    error: false,
    charList: [],
  };

  componentDidMount() {
    this.updateCharList();
  }

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  };

  onCharLoaded = (char) => {
    this.setState({ charList: char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateCharList() {
    this.onCharLoading();
    this.props.getAllCharacters().then(this.onCharLoaded).catch(this.onError);
  }

  renderItems() {
    const items = this.state.charList.map((char) => {
      let imgStyle = { objectFit: "cover" };
      if (
        char.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }
      return <CharListItem key={char.id} char={char} style={imgStyle} />;
    });

    return <ul className={styles.charlist__list}>{items}</ul>;
  }

  render() {
    const { loading, error, charList } = this.state;
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
          className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
        >
          <p className={`${styles.inner} ${styles.inner__main}`}>load more</p>
        </button>
      </div>
    );
  }
}

export default CharList;
