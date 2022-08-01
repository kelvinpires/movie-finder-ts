import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import { GlobalStyles } from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalContextProvider>
    <GlobalStyles />
    <App />
  </GlobalContextProvider>
);
