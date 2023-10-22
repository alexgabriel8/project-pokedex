import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./GlobalStyle.tsx";

import Router from "./routes/Router.tsx";

import { userPreferences } from "./objects/userPreferences/userPreferences.ts";

userPreferences.loadInitialPreferences();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
