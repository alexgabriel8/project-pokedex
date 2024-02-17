import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "@routes/Router.tsx";
import GlobalStyle from "@styles/GlobalStyle.tsx";

// Context Providers
import { ThemeProvider } from "@context/ThemeContext/ThemeContext.tsx";
import { PokemonsProvider } from "@context/PokemonsContext/PokemonsContext.tsx";
import { SettingsProvider } from "@context/SettingsContext/SettingsContext.tsx";
import { PkmListStatusProvider } from "@context/PokemonListContext/PkmListStatusContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <SettingsProvider>
        <PkmListStatusProvider>
          <PokemonsProvider>
            <RouterProvider router={Router} />
          </PokemonsProvider>
        </PkmListStatusProvider>
      </SettingsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
