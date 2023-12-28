import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/:comicId" element={<SingleComicPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
