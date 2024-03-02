import { afterEach, describe, expect, it } from "vitest";

// Scripts
import { loadInitialTheme } from "./loadInitialTheme";

// Constants
import { themes } from "@constants/themes";
import { lastUsedThemeLocalStorageKey } from "@constants/localStorageAccessKeys";

// Mocks
import { matchMediaMock } from "@tests/mocks/matchMediaMock";

describe("Load initial theme", () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe("No theme in Local Storage", () => {
    it("Should return light theme if user prefers it", () => {
      matchMediaMock.true();
      expect(loadInitialTheme()).toStrictEqual(themes.light);
    });

    it("Should return dark theme if user prefers it", () => {
      matchMediaMock.false();
      expect(loadInitialTheme()).toStrictEqual(themes.dark);
    });
  });

  describe("Theme present in Local Storage", () => {
    it("Should load it sucessfully", () => {
      matchMediaMock.false();
      const themeToLoad = themes.light;

      localStorage.setItem(lastUsedThemeLocalStorageKey, themeToLoad.name);

      expect(loadInitialTheme()).toStrictEqual(themeToLoad);
    });

    it("Should load based on preference if theme is invalid", () => {
      matchMediaMock.false();

      localStorage.setItem(lastUsedThemeLocalStorageKey, "D4RK");

      expect(loadInitialTheme()).toStrictEqual(themes.dark);
    });
  });
});
