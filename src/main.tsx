import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import { GlobalStyles } from "./GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <GlobalContextProvider>
      <GlobalStyles />
      <App />
    </GlobalContextProvider>
  </QueryClientProvider>
);
