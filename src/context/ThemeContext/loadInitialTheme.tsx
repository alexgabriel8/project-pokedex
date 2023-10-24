import { getLocalStorageItem } from "../../scripts/localStorage";
import { lastUsedThemeLocalStorageKey } from "../../constants/localStorageAccessKeys";

import { TTheme, isTypeTTheme } from "../../constants/themes/themes.types";
import { themes } from "../../constants/themes/themes";

function loadInitialTheme(): TTheme {
  const initialTheme = getLocalStorageItem(lastUsedThemeLocalStorageKey);

  if (!initialTheme || !isTypeTTheme(initialTheme)) {
    if (window.matchMedia("(prefers-color-scheme: light)").matches)
      return themes.light;
    else return themes.dark;
  } else return initialTheme;
}

export { loadInitialTheme };
