import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage } from "../pages";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
