import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menubar } from "./components/Menubar";
import { Searchbar } from "./components/Searchbar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
