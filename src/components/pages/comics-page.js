import { Helmet } from "react-helmet";
import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";
import avangers from "../../images/Avengers.png";
import styles from "./comics-page.module.css";
import avangersLogo from "../../images/Avengers_logo.png";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics Page</title>
      </Helmet>
      <main className={styles.comics}>
        <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
        <ComicsList />
      </main>
    </>
  );
};

export default ComicsPage;
