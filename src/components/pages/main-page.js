import ErrorBoundary from "../error-boundary/error-boundary";
import RandomChar from "../random-char/random-char";
import CharList from "../char-list/char-list";
import CharInfo from "../char-info/char-info";
import styles from "./main-page.module.css";
import vision from "../../images/vision.png";
import mjolnir from "../../images/mjolnir.png";
import { useState, useCallback } from "react";

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = useCallback((id) => {
    setSelectedChar(id);
  }, []);
  return (
    <main className={styles.char}>
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
    </main>
  );
};

export default MainPage;
