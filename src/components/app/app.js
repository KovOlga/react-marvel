import abyss from "../../images/abyss.jpg";
import thor from "../../images/thor.jpeg";
import mjolnir from "../../images/mjolnir.png";
import UW from "../../images/UW.png";
import XM from "../../images/x-men.png";
import avangers from "../../images/Avengers.png";
import avangersLogo from "../../images/Avengers_logo.png";
import vision from "../../images/vision.png";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import RandomChar from "../random-char/random-char";
import CharList from "../char-list/char-list";
import CharInfo from "../char-info/char-info";
import Skeleton from "../skeleton/skeleton";
import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";
import SingleComic from "../single-comic/single-comic";
import MarvelService from "../../services/MarvelService";
import { Component } from "react";
import ErrorBoundary from "../error-boundary/error-boundary";

const marvelService = new MarvelService();

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({ selectedChar: id });
  };

  render() {
    return (
      <div className={styles.app}>
        <AppHeader />
        <main className={styles.char}>
          <ErrorBoundary>
            <RandomChar
              getCharacter={marvelService.getCharacter}
              mjolnir={mjolnir}
            />
          </ErrorBoundary>

          <div className={styles.char__content}>
            <ErrorBoundary>
              <CharList
                onCharSelected={this.onCharSelected}
                getAllCharacters={marvelService.getAllCharacters}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo
                charId={this.state.selectedChar}
                getCharacter={marvelService.getCharacter}
                thor={thor}
              />
            </ErrorBoundary>
          </div>
          <img className={styles.char__bg} src={vision} alt="vision" />
        </main>
        {/* <main className={styles.comics}>
        <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
        <ComicsList UW={UW} XM={XM} />
        <SingleComic XM={XM} />
      </main> */}
      </div>
    );
  }
}

export default App;
