import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menubar } from "./components/Menubar";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/HomePage";
import { MediaPage } from "./pages/MediaPage";
import { PersonPage } from "./pages/PersonPage";
import { SearchPage } from "./pages/SearchPage";
import { WatchlistPage } from "./pages/WatchlistPage";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<CategoryPage />} />
        <Route path="/:media_type/:id" element={<MediaPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
