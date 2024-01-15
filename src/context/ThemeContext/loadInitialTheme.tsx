import { getLocalStorageItem } from "../../scripts/localStorage";

// Constants
import { themes } from "../../constants/themes/themes";
import { lastUsedThemeLocalStorageKey } from "../../constants/localStorageAccessKeys";

// Types
import { TTheme } from "../../constants/themes/themes.types";

function loadInitialTheme(): TTheme {
  const initialTheme = getLocalStorageItem(lastUsedThemeLocalStorageKey);

  if(initialTheme === "light") return themes.light;
  else if (initialTheme === "dark") return themes.dark;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? themes.light
    : themes.dark
}

export { loadInitialTheme };
