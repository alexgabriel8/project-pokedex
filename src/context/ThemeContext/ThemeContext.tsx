import { useState, useEffect, createContext } from "react";

// Scripts
import { saveOnLocalStorage } from "../../scripts/localStorage";
import { loadInitialTheme } from "./loadInitialTheme";

// Constants
import { lastUsedThemeLocalStorageKey } from "../../constants/localStorageAccessKeys";

// Types
import { TThemeContext } from "./ThemeContext.types";

const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [activeTheme, setActiveTheme] = useState(loadInitialTheme());

  useEffect(() => {
    saveOnLocalStorage(lastUsedThemeLocalStorageKey, activeTheme.name);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }!}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
