import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "./routes/Router.tsx";
import { userPreferences } from "./objects/userPreferences/userPreferences.ts";
import GlobalStyle from "./GlobalStyle.tsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";

userPreferences.loadInitialPreferences();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
);
