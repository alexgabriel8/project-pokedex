import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "./routes/Router.tsx";
import GlobalStyle from "./styles/GlobalStyle.tsx";

// Context Providers
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import { PokemonsProvider } from "./context/PokemonsContext/PokemonsContext.tsx";
import { SettingsProvider } from "./context/SettingsContext/SettingsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <SettingsProvider>
        <PokemonsProvider>
          <RouterProvider router={Router} />
        </PokemonsProvider>
      </SettingsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
