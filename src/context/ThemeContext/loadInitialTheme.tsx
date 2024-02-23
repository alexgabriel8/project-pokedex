// Constants
import { lastUsedThemeLocalStorageKey } from "@constants/localStorageAccessKeys";
import { themes } from "@constants/themes/themes";

// Scripts
import { getLocalStorageItem } from "@scripts/localStorage";

// Types
import { TTheme } from "@typings/themes.types";

function loadInitialTheme(): TTheme {
  const initialTheme = getLocalStorageItem(lastUsedThemeLocalStorageKey);

  if (initialTheme === "light") return themes.light;
  else if (initialTheme === "dark") return themes.dark;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? themes.light
    : themes.dark;
}

export { loadInitialTheme };
