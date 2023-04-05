import styles from "./random-char.module.css";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.mjolnir = props.mjolnir;
  }
  state = {
    char: {},
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id).then(this.onCharLoaded);
  };

  render() {
    const {
      char: { name, description, thumbnail, homepage, wiki },
    } = this.state;
    return (
      <div className={styles.randomchar}>
        <div className={styles.randomchar__container}>
          <img
            src={thumbnail}
            alt="Random character"
            className={styles.randomchar__img}
          />
          <div className={styles.randomchar__info}>
            <p className={styles.randomchar__name}>{name}</p>
            <p className={styles.randomchar__descr}>{description}</p>
            <div className={styles.randomchar__btns}>
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
          <button className={`${styles.button} ${styles.button__main}`}>
            <p className={`${styles.inner} ${styles.inner__main}`}>try it</p>
          </button>
          <img
            src={this.mjolnir}
            alt="mjolnir"
            className={styles.randomchar__decoration}
          />
        </div>
      </div>
    );
  }
}

export default RandomChar;
