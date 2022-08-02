import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menubar } from "./components/Menubar";
import { HomePage } from "./pages/HomePage";
import { MediaPage } from "./pages/MediaPage";
import { SearchPage } from "./pages/SearchPage";
import { WatchlistPage } from "./pages/WatchlistPage";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:media_type/:id" element={<MediaPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
