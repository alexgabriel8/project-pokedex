import { afterEach, describe, expect, it } from "vitest";

import { loadInitialTheme } from "./loadInitialTheme";
import { themes } from "../../constants/themes/themes";

import { lastUsedThemeLocalStorageKey } from "../../constants/localStorageAccessKeys";

import { matchMediaMock } from "../../../tests/mocks/matchMediaMock";

describe("Load initial theme", () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe("No theme in Local Storage", () => {
    it("Should load light theme if user prefers it", () => {
      matchMediaMock.true();
      expect(loadInitialTheme()).toStrictEqual(themes.light);
    });

    it("Should load dark theme if user prefers it", () => {
      matchMediaMock.false();
      expect(loadInitialTheme()).toStrictEqual(themes.dark);
    });
  });

  describe("Theme present in Local Storage", () => {
    it("Should load it sucessfully", () => {
      matchMediaMock.false();

      localStorage.setItem(
        lastUsedThemeLocalStorageKey,
        JSON.stringify(themes.light),
      );

      expect(loadInitialTheme()).toStrictEqual(themes.light);
    });

    it("Should not load if it doesn't have all properties", () => {
      matchMediaMock.false();

      let invalidTheme = { ...themes.dark } as any;
      delete invalidTheme.modalTogglerButton.enabled;
      localStorage.setItem(
        lastUsedThemeLocalStorageKey,
        JSON.stringify(invalidTheme),
      );

      expect(loadInitialTheme()).toStrictEqual(themes.dark);
    });
    it("Should not load if it has an extra property", () => {
      matchMediaMock.false();

      let invalidTheme = { ...themes.light } as any;
      invalidTheme.modalTogglerButton.enabled.invalid = "invalid";
      localStorage.setItem(
        lastUsedThemeLocalStorageKey,
        JSON.stringify(invalidTheme),
      );

      expect(loadInitialTheme()).toStrictEqual(themes.light);
    });

    it("Should not load it if the type of any property is different from string", () => {
      matchMediaMock.false();

      let invalidTheme = { ...themes.light } as any;
      invalidTheme.modalTogglerButton.circleBorder = 123;
      localStorage.setItem(
        lastUsedThemeLocalStorageKey,
        JSON.stringify(invalidTheme),
      );

      expect(loadInitialTheme()).toStrictEqual(themes.light);
    });
  });
});
