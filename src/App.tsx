import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menubar } from "./components/Menubar";
import { Searchbar } from "./components/Searchbar";
import { HomePage } from "./pages/HomePage";
import { MediaPage } from "./pages/MediaPage";
import { WatchlistPage } from "./pages/WatchlistPage";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:media_type/:id" element={<MediaPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
