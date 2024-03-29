import { Route, Routes } from "react-router-dom";
import {
  MainPage,
  ComicsPage,
  Page404,
  SingleComicPage,
  LayoutPage,
  SingleCharPage,
} from "./components/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/:comicId" element={<SingleComicPage />} />
        <Route path="/characters/:charId" element={<SingleCharPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
