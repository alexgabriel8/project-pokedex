import { beforeEach, describe, expect, it } from "vitest";

// Scripts
import { loadInitialSettings } from "./loadInitialSettings";

// Constants
import { defaultSettings } from "../defaultSettings";
import { userSettingsLocalStorageKey } from "../../../constants/localStorageAccessKeys";

describe("Settings not present in Local Storage", () => {
    it("Should return default settings", () => {
        const loadedSettings = loadInitialSettings();

        expect(loadedSettings).toStrictEqual(defaultSettings);
    })
})

describe("Settings present in Local Storage", () => {
    beforeEach(() => {
        localStorage.clear()
    })
    it("Should return a valid modified Settings", () => {
        const validSettings = {...defaultSettings}
        validSettings.pkmAnimatedSprites = !validSettings.pkmAnimatedSprites
        validSettings.savePkmListInLocalStorage = !validSettings.savePkmListInLocalStorage

        localStorage.setItem(userSettingsLocalStorageKey, JSON.stringify(validSettings))

        const loadedSettings = loadInitialSettings()

        expect(loadedSettings).toStrictEqual(validSettings)
    })
})