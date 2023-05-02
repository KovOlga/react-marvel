import thor from "../../images/thor.jpeg";
import mjolnir from "../../images/mjolnir.png";
import XM from "../../images/x-men.png";
import avangers from "../../images/Avengers.png";
import avangersLogo from "../../images/Avengers_logo.png";
import vision from "../../images/vision.png";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import RandomChar from "../random-char/random-char";
import CharList from "../char-list/char-list";
import CharInfo from "../char-info/char-info";
import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";
import SingleComic from "../single-comic/single-comic";
import ErrorBoundary from "../error-boundary/error-boundary";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = useCallback((id) => {
    setSelectedChar(id);
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {/* <main className={styles.char}>
        <ErrorBoundary>
          <RandomChar mjolnir={mjolnir} />
        </ErrorBoundary>

        <div className={styles.char__content}>
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className={styles.char__bg} src={vision} alt="vision" />
      </main> */}
      <main className={styles.comics}>
        <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
        <ComicsList />
        {/* <SingleComic XM={XM} /> */}
      </main>
    </div>
  );
};

export default App;
