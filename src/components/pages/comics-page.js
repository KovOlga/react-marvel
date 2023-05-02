import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";
import SingleComic from "../single-comic/single-comic";
import avangers from "../../images/Avengers.png";
import XM from "../../images/x-men.png";
import styles from "./comics-page.module.css";
import avangersLogo from "../../images/Avengers_logo.png";

const ComicsPage = () => {
  return (
    <main className={styles.comics}>
      <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
      <ComicsList />
      <SingleComic XM={XM} />
    </main>
  );
};

export default ComicsPage;
