import { useState, useEffect, createContext } from "react";

import { TThemeContext } from "./ThemeContext.types";
import { loadInitialTheme } from "./loadInitialTheme";

import { saveOnLocalStorage } from "../../scripts/localStorage";
import { lastUsedThemeLocalStorageKey } from "../../constants/localStorageAccessKeys";

const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [activeTheme, setActiveTheme] = useState(loadInitialTheme());

  useEffect(() => {
    saveOnLocalStorage(lastUsedThemeLocalStorageKey, activeTheme);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }!}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
