import { Route, Routes } from "react-router-dom";
import {
  MainPage,
  ComicsPage,
  Page404,
  SingleComicPage,
  LayoutPage,
} from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/:comicId" element={<SingleComicPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/characters/:charId" />
      </Route>
    </Routes>
  );
};

export default App;
