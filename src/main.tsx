import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "./routes/Router.tsx";
import { userPreferences } from "./objects/userPreferences/userPreferences.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import { PokemonsProvider } from "./context/PokemonsContext/PokemonsContext.tsx";

userPreferences.loadInitialPreferences();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <PokemonsProvider>
        <RouterProvider router={Router} />
      </PokemonsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
