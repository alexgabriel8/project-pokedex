// @ts-nocheck
import { describe, expect, it } from "vitest";

// Constants
import { defaultSettings } from "../defaultSettings";

// Scripts
import { isValidSettings } from "./isValidSettings";

describe("Valid Settings", () => {
    it("Should return true for valid Settings", () => {
        expect(isValidSettings(defaultSettings)).toBe(true)
    })
})

describe("Invalid Settings", () => {
    it("Should return false if it's not an object", () => {
        expect(isValidSettings(false)).toBe(false);
        expect(isValidSettings(0)).toBe(false)
        expect(isValidSettings("string")).toBe(false)
        expect(isValidSettings(null)).toBe(false)
        expect(isValidSettings(undefined)).toBe(false)
        expect(isValidSettings(["pkmAnimatedSprites", "savePkmListInLocalStorage"])).toBe(false)
    })

    it("Should return false if a property is missing", () => {
        const invalidSettings = {...defaultSettings}
        delete invalidSettings.pkmAnimatedSprites

        expect(isValidSettings(invalidSettings)).toBe(false)
    })

    it("Should return false if has extra property", () => {
        const invalidSettings = {...defaultSettings, extraProperty: false}

        expect(isValidSettings(invalidSettings)).toBe(false)
    })

    it("Should return false if a property's name is wrong", () => {
        const invalidSettings = {...defaultSettings}
        delete invalidSettings.pkmAnimatedSprites
        invalidSettings.PKMANIMATEDSPRITES = true

        expect(isValidSettings(invalidSettings)).toBe(false)
    })

    it("Should return false if a property's value isn't boolean", () => {
        const invalidSettings = {...defaultSettings}
        invalidSettings.pkmAnimatedSprites = "true"

        expect(isValidSettings(invalidSettings)).toBe(false)
    })
})