// Constants
import { defaultSettings } from "../defaultSettings";

// Types
import { Settings } from "@typings/settings.types";

function isBoolean(value: unknown) {
    return value === true || value === false
}

function isValidSettingsKey(expectedKeys: string[], key: string) {
    return expectedKeys.includes(key)
}

function isValidSettings(settings: {[key: string]: unknown}): settings is Settings {
    if (!settings || typeof settings !== "object") return false;

    const expectedKeys = Object.keys(defaultSettings);
    const keys = Object.keys(settings);

    if(keys.length !== expectedKeys.length) return false;

    for (const key of keys) {
        if(
            !isValidSettingsKey(expectedKeys, key) || !isBoolean(settings[key])
        ) return false
    }

    return true;
}

export { isValidSettings }
